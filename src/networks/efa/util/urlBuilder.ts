import * as moment from 'moment';
import { LocationType } from './../../../common/models/LocationType';

const xmlCoordRequestRoute = 'XML_COORD_REQUEST';
const xmlStopFinderRequestRoute = 'XML_STOPFINDER_REQUEST';
const xsltDepartureMonitorEndpoint = 'XSLT_DM_REQUEST';

const usEnglishLocale = 'en-US';

const getCommonQueryParams = (outputFormat: string, language: string = 'de') => {
  return {
    outputFormat,
    language,
    stateless: '1',
    coordOutputFormat: 'WGS84',
  };
};

const getStopFinderRequestQueryParams = (
  constraint: string,
  includeRegionId: boolean = true,
  needsSpEncId: boolean = false,
) => {
  return {
    locationServerActive: '1',
    regionID_sf: includeRegionId ? '1' : undefined,
    type_sf: 'any',
    name_sf: constraint,
    SpEncId: needsSpEncId ? '0' : undefined,
    anyObjFilter_sf: (2 + 4 + 8 + 16 + 32 + 64).toString(),
    reducedAnyPostcodeObjFilter_sf: 64,
    reducedAnyTooManyObjFilter_sf: '2',
    useHouseNumberList: 'true',
    anyMaxSizeHitList: '500',
  };
};

const getCoordRequestQueryParams = (
  types: LocationType[],
  lat: number,
  lng: number,
  useStringCoordListOutputFormat: boolean = true,
  maxLocations: number = 50,
  maxDistance: number = 1320,
) => {
  const lonParam: string = lng.toLocaleString('en-US', { minimumFractionDigits: 6, minimumIntegerDigits: 2 });
  const latParam: string = lat.toLocaleString('en-US', { minimumFractionDigits: 6, minimumIntegerDigits: 2 });
  const appendix: string = 'WGS84';

  const params: object = {
    coord: `${lonParam}:${latParam}:${appendix}`,
    max: maxLocations.toString(),
    inclFilter: '1',
  };

  if (useStringCoordListOutputFormat) {
    params['coordListOutputFormat'] = 'STRING';
  }

  types.forEach((type, index) => {
    const paramNumber = index + 1;

    params[`radius_${paramNumber}`] = maxDistance.toString();

    switch (type) {
      case LocationType.Station:
        params[`type_${paramNumber}`] = 'STOP';
        break;
      case LocationType.Poi:
        params[`type_${paramNumber}`] = 'POI_POINT';
        break;
      default:
        throw `cannot handle location type ${LocationType[type]}`;
    }
  });

  return params;
};

const getDepartureMonitorRequestParams = (
  stationId: string,
  maxDepartures: number = 0,
  time: Date = null,
  equivs: boolean = false,
  useProxFootSearch: boolean = false,
) => {
  let params: object = {
    type_dm: 'stop',
    name_dm: normalizeStationId(stationId),
    useRealtime: '1',
    mode: 'direct',
    ptOptionsActive: '1',
    deleteAssignedStops_dm: equivs ? '0' : '1',
    mergeDep: 1,
  };

  if (time) {
    params = {
      ...params,
      ...getDateTimeParameters(time),
    };
  }

  if (useProxFootSearch) {
    params = {
      ...params,
      useProxFootSearch: equivs ? '0' : '1',
    };
  }

  if (maxDepartures > 0) {
    params = {
      ...params,
      limit: maxDepartures.toString(),
    };
  }

  return params;
};

const getDateTimeParameters = (time: Date) => {
  const input: moment.Moment = moment(time);

  const year: number = input.year();
  const month: number = input.month() + 1;
  const day: number = parseInt(input.format('D'), 10);
  const hour: number = input.hour();
  const minute: number = input.minute();

  const formattedYear = year.toLocaleString(usEnglishLocale, {
    useGrouping: false,
    minimumIntegerDigits: 4,
    maximumFractionDigits: 0,
  });
  const formattedMonth = month.toLocaleString(usEnglishLocale, {
    useGrouping: false,
    minimumIntegerDigits: 2,
    maximumFractionDigits: 0,
  });
  const formattedDay = day.toLocaleString(usEnglishLocale, {
    useGrouping: false,
    minimumIntegerDigits: 2,
    maximumFractionDigits: 0,
  });

  const formattedHour = hour.toLocaleString(usEnglishLocale, {
    useGrouping: false,
    minimumIntegerDigits: 2,
    maximumFractionDigits: 0,
  });
  const formattedMinute = minute.toLocaleString(usEnglishLocale, {
    useGrouping: false,
    minimumIntegerDigits: 2,
    maximumFractionDigits: 0,
  });

  return {
    itdDate: formattedYear + formattedMonth + formattedDay,
    itdTime: formattedHour + formattedMinute,
  };
};

const normalizeStationId = (stationId: string): string => {
  if (!stationId) {
    return null;
  }

  if (!stationId.startsWith('0')) {
    return stationId;
  }

  let normalized: string = stationId;

  while (normalized.startsWith('0')) {
    normalized = normalized.substring(1, normalized.length);
  }

  return normalized;
};

export default {
  xmlCoordRequestRoute,
  xmlStopFinderRequestRoute,
  xsltDepartureMonitorEndpoint,
  getCommonQueryParams,
  getCoordRequestQueryParams,
  getStopFinderRequestQueryParams,
  getDepartureMonitorRequestParams,
};
