import axios from 'axios';
import * as querystring from 'querystring';
import { StationProvider } from './../EfaProvider';
import { Station } from './../../../../common/models/Station';
import { LocationType } from './../../../../common/models/LocationType';
import { XmlCoordRequestResult } from '../../models/XmlCoordRequestResult';
import { XmlStopFinderRequestResult } from './../../models/XmlStopFinderRequestResult';
import { baseUrl } from '.';
import xmlParser from './../../util/xmlParser';
import urlBuilder from './../../util/urlBuilder';

export class KvvStationProvider implements StationProvider {
  private readonly httpClient = axios.create({
    baseURL: baseUrl,
  });

  async byName(name: string): Promise<Station[]> {
    const params = {
      ...urlBuilder.getCommonQueryParams('XML', 'de'),
      ...urlBuilder.getStopFinderRequestQueryParams(name),
    };

    const response = await this.httpClient.get(
      `${urlBuilder.xmlStopFinderRequestRoute}?${querystring.stringify(params)}`,
    );

    if (response.data) {
      const parsedData = await xmlParser.parse<XmlStopFinderRequestResult>(response.data);
      const stopFinderRequest = parsedData && parsedData.itdRequest ? parsedData.itdRequest.itdStopFinderRequest : null;

      if (stopFinderRequest && stopFinderRequest.length > 0) {
        const odvName =
          stopFinderRequest[0].itdOdv && stopFinderRequest[0].itdOdv.length > 0
            ? stopFinderRequest[0].itdOdv[0].itdOdvName
            : null;

        if (odvName && odvName.length > 0) {
          const odvNameElems = odvName[0].odvNameElem;

          if (odvNameElems) {
            return odvNameElems
              .filter(
                o =>
                  o.$ &&
                  o.$.anyType === 'stop' &&
                  o.$.id &&
                  o.$.id.length > 0 &&
                  o.$.locality &&
                  o.$.locality.length > 0 &&
                  o.$.objectName &&
                  o.$.objectName.length > 0 &&
                  o.$.x &&
                  o.$.x.length > 0,
              )
              .map(o => {
                return <Station>{
                  id: o.$.id,
                  lat: parseFloat(o.$.y),
                  lng: parseFloat(o.$.x),
                  locality: o.$.locality,
                  name: o.$.objectName,
                };
              });
          }
        }
      }
    }

    return [];
  }

  async byLatLng(lat: number, lng: number): Promise<Station[]> {
    const params = {
      ...urlBuilder.getCommonQueryParams('XML', 'de'),
      ...urlBuilder.getCoordRequestQueryParams([LocationType.Station], lat, lng),
    };

    const response = await this.httpClient.get(`${urlBuilder.xmlCoordRequestRoute}?${querystring.stringify(params)}`);

    if (response.data) {
      const parsedData = await xmlParser.parse<XmlCoordRequestResult>(response.data);
      const coordInfoRequest = parsedData && parsedData.itdRequest ? parsedData.itdRequest.itdCoordInfoRequest : null;

      if (coordInfoRequest && coordInfoRequest.length > 0) {
        const coordInfo =
          coordInfoRequest[0].itdCoordInfo && coordInfoRequest[0].itdCoordInfo.length > 0
            ? coordInfoRequest[0].itdCoordInfo[0]
            : null;

        if (coordInfo) {
          const coordInfoItems =
            coordInfo.coordInfoItemList && coordInfo.coordInfoItemList.length > 0
              ? coordInfo.coordInfoItemList[0].coordInfoItem
              : null;

          if (coordInfoItems) {
            return coordInfoItems
              .filter(
                c =>
                  c.$ &&
                  c.itdPathCoordinates &&
                  c.itdPathCoordinates.length > 0 &&
                  c.itdPathCoordinates[0].itdCoordinateString &&
                  c.itdPathCoordinates[0].itdCoordinateString.length > 0 &&
                  c.itdPathCoordinates[0].itdCoordinateString[0]._,
              )
              .map(c => {
                const attributes = c.$;
                const coordinateString = c.itdPathCoordinates[0].itdCoordinateString[0]._;

                const splittedCoordinates = coordinateString.split(',');

                return <Station>{
                  id: attributes.id,
                  distance: attributes.distance,
                  lat: parseFloat(splittedCoordinates[1]),
                  lng: parseFloat(splittedCoordinates[0]),
                  locality: attributes.locality,
                  name: attributes.name,
                };
              });
          }
        }
      }
    }

    return [];
  }
}
