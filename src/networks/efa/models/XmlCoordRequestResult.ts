import { InfoLinkList } from './InfoLinkList';
import { VersionInfo } from './VersionInfo';

export interface XmlCoordRequestResult {
  itdRequest: {
    itdCoordInfoRequest: CoordInfoRequest[];
    itdVersionInfo: VersionInfo[];
    itdInfoLinkList: InfoLinkList[];
  };
}

interface CoordInfoRequest {
  itdCoordInfo: CoordInfo[];
}

interface CoordInfo {
  coordInfoItemList: CoordInfoItemList[];
}

interface CoordInfoItemList {
  coordInfoItem: CoordInfoItem[];
}

interface CoordInfoItem {
  $: {
    distance: string;
    gisID: string;
    id: string;
    locality: string;
    name: string;
    omc: string;
    placeID: string;
    stateless: string;
    type: string;
  };
  itdIndexInfoList: string[];
  itdPathCoordinates: PathCoordinate[];
}

interface PathCoordinate {
  coordEllipsoid: string[];
  coordType: string[];
  itdCoordinateString: CoordinateString[];
}

interface CoordinateString {
  _: string;
  $: {
    cs: string;
    decimal: string;
    format: string;
    ts: string;
  };
}
