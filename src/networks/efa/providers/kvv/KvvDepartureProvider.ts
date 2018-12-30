import axios from 'axios';
import * as moment from 'moment';
import * as querystring from 'querystring';
import urlBuilder from './../../util/urlBuilder';
import xmlParser from './../../util/xmlParser';
import { DepartureProvider } from './../EfaProvider';
import { Departure } from './../../../../common/models/Departure';
import { Line } from './../../../../common/models/Line';
import { baseUrl } from '.';
import {
  XsltDepartureMonitorRequestResult,
  ItdDeparture,
  ItdRTDateTime,
  ItdDateTime2,
} from './../../models/XsltDepartureMonitorRequestResult';

export class KvvDepartureProvider implements DepartureProvider {
  private readonly httpClient = axios.create({
    baseURL: baseUrl,
  });

  async byOriginStation(
    originStationId: string,
    maxDepartures: number = 0,
    time: Date = null,
    equivs: boolean = false,
  ): Promise<Departure[]> {
    const params = {
      ...urlBuilder.getCommonQueryParams('XML', 'de'),
      ...urlBuilder.getDepartureMonitorRequestParams(originStationId, maxDepartures, time, equivs),
    };

    const response = await this.httpClient.get(
      `${urlBuilder.xsltDepartureMonitorEndpoint}?${querystring.stringify(params)}`,
    );

    if (response.data) {
      const parsedData = await xmlParser.parse<XsltDepartureMonitorRequestResult>(response.data);
      const departureMonitorRequest =
        parsedData && parsedData.itdRequest ? parsedData.itdRequest.itdDepartureMonitorRequest : null;

      if (departureMonitorRequest && departureMonitorRequest.length > 0) {
        const departureList =
          departureMonitorRequest[0].itdDepartureList && departureMonitorRequest[0].itdDepartureList.length > 0
            ? departureMonitorRequest[0].itdDepartureList[0].itdDeparture
            : null;

        if (departureList && departureList.length > 0) {
          return departureList
            .map(
              departure =>
                <Departure>{
                  line: this.getDepartureServingLine(departure),
                  plannedTime: this.getDeparturePlannedTime(departure),
                  realTime: this.getDepartureRealtime(departure),
                },
            )
            .filter(
              departure =>
                departure.line &&
                departure.line.direction &&
                departure.line.directionFrom &&
                departure.line.symbol &&
                departure.plannedTime,
            );
        }
      }
    }

    return null;
  }

  private getDepartureServingLine(departure: ItdDeparture): Line {
    if (!departure.itdServingLine || departure.itdServingLine.length === 0) {
      return undefined;
    }

    const servingLine = departure.itdServingLine[0];
    const line = <Line>{};

    if (servingLine.$) {
      line.direction = servingLine.$.direction;
      line.directionFrom = servingLine.$.directionFrom;
      line.symbol = servingLine.$.symbol;
    }

    line.routeDetails =
      servingLine.itdRouteDescText && servingLine.itdRouteDescText.length > 0 ? servingLine.itdRouteDescText[0] : null;

    return line;
  }

  private getDepartureRealtime(departure: ItdDeparture) {
    if (!departure.itdRTDateTime || departure.itdRTDateTime.length === 0) {
      return undefined;
    }

    return this.parseTime(departure.itdRTDateTime[0]);
  }

  private getDeparturePlannedTime(departure: ItdDeparture): Date {
    if (!departure.itdDateTime || departure.itdDateTime.length === 0) {
      return undefined;
    }

    return this.parseTime(departure.itdDateTime[0]);
  }

  private parseTime(timeElement: ItdDateTime2 | ItdRTDateTime) {
    const dateTime = timeElement;
    const date = dateTime.itdDate && dateTime.itdDate.length > 0 ? dateTime.itdDate[0] : null;

    if (!date || !date.$) {
      return undefined;
    }

    const year: number = parseInt(date.$.year, 10);
    const month: number = parseInt(date.$.month, 10);
    const day: number = parseInt(date.$.day, 10);

    if (!year || !month || !day) {
      return undefined;
    }

    const time = dateTime.itdTime && dateTime.itdTime.length > 0 ? dateTime.itdTime[0] : null;

    if (!time || !time.$) {
      return undefined;
    }

    const hour: number = parseInt(time.$.hour, 10);
    const minute: number = parseInt(time.$.minute, 10);

    if (!hour || !minute) {
      return undefined;
    }

    return moment()
      .year(year)
      .month(month - 1)
      .date(day)
      .hour(hour)
      .minute(minute)
      .second(0)
      .millisecond(0)
      .toDate();
  }
}
