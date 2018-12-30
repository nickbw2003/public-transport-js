import { InfoLinkList } from './InfoLinkList';
import { VersionInfo } from './VersionInfo';

export interface XmlStopFinderRequestResult {
  itdRequest: {
    $: {
      calcTime: string;
      client: string;
      clientIP: string;
      language: string;
      lengthUnit: string;
      now: string;
      nowWD: string;
      serverID: string;
      sessionID: string;
      version: string;
      virtDir: string;
    };
    itdInfoLinkList: InfoLinkList[];
    itdVersionInfo: VersionInfo[];
    itdStopFinderRequest: StopFinderRequest[];
  };
}

interface StopFinderRequest {
  $: {
    requestID: string;
  };
  itdDateTime: DateTime[];
  itdOdv: Odv[];
}

interface DateTime {
  itdDate: {
    $: {
      day: string;
      month: string;
      weekday: string;
      year: string;
    };
  }[];
  itdTime: {
    $: {
      hour: string;
      minute: string;
    };
  }[];
}

interface Odv {
  $: {
    anyObjFilter: string;
    regionID: string;
    type: string;
    usage: string;
  };
  itdOdvName: OdvName[];
  itdOdvPlace: OdvPlace[];
}

interface OdvName {
  $: {
    state: string;
  };
  itdMessage: Message[];
  odvNameElem: NameElem[];
  odvNameInput: string[];
}

interface Message {
  $: {
    code: string;
    module: string;
    type: string;
  };
}

interface NameElem {
  _: string;
  $: {
    anyType: string;
    anyTypeSort: string;
    buildingName: string;
    buildingNumber: string;
    gid: string;
    id: string;
    listIndex: string;
    locality: string;
    mainLocality: string;
    mapName: string;
    matchQuality: string;
    nameKey: string;
    objectName: string;
    omc: string;
    placeID: string;
    postCode: string;
    selected: string;
    stateless: string;
    streetName: string;
    value: string;
    x: string;
    y: string;
  };
}

interface OdvPlace {
  $: {
    state: string;
  };
  odvPlaceElem: string[];
}
