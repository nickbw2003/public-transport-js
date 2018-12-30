import { VersionInfo } from './VersionInfo';
import { InfoLinkList } from './InfoLinkList';

export interface XsltDepartureMonitorRequestResult {
  itdRequest: {
    $: {
      version: string;
      language: string;
      lengthUnit: string;
      sessionID: string;
      client: string;
      clientIP: string;
      serverID: string;
      virtDir: string;
      calcTime: string;
      now: Date;
      nowWD: string;
    };
    itdVersionInfo: VersionInfo[];
    itdInfoLinkList: InfoLinkList[];
    itdDepartureMonitorRequest: ItdDepartureMonitorRequest[];
  };
}

export interface OutputClientText {
  htmlText: string[];
  wmlText: string[];
  smsText: string[];
  speechText: string[];
}

export interface OdvPlaceElem {
  _: string;
  $: {
    omc: string;
    placeID: string;
    value: string;
    span: string;
    type: string;
    mainPlace: string;
    stateless: string;
  };
}

export interface ItdOdvPlace {
  $: {
    state: string;
    method: string;
  };
  odvPlaceElem: OdvPlaceElem[];
  odvPlaceInput: string[];
}

export interface OdvNameElem {
  _: string;
  $: {
    selected: string;
    matchQuality: string;
    x: string;
    y: string;
    mapName: string;
    stopID: string;
    value: string;
    isTransferStop: string;
    stateless: string;
  };
}

export interface ItdOdvName {
  $: {
    state: string;
    method: string;
  };
  odvNameElem: OdvNameElem[];
  odvNameInput: string[];
}

export interface ItdOdv {
  $: {
    type: string;
    usage: string;
    anyObjFilter: string;
  };
  itdOdvPlace: ItdOdvPlace[];
  itdOdvName: ItdOdvName[];
}

export interface ItdDate {
  $: {
    weekday: string;
    year: string;
    month: string;
    day: string;
  };
}

export interface ItdTime {
  $: {
    hour: string;
    minute: string;
  };
}

export interface ItdDateTime {
  $: {
    ttpFrom: string;
    ttpTo: string;
  };
  itdDate: ItdDate[];
  itdTime: ItdTime[];
}

export interface ItdDMDateTime {
  $: {
    deparr: string;
  };
}

export interface ItdDate2 {
  $: {
    day: string;
    month: string;
    year: string;
    weekday: string;
  };
}

export interface ItdDateRange {
  itdDate: ItdDate2[];
}

export interface MeansElem {
  $: {
    value: string;
    selected: string;
  };
}

export interface ExcludedMean {
  meansElem: MeansElem[];
}

export interface ItdPtOption {
  $: {
    active: string;
    maxChanges: string;
    maxTime: string;
    maxWait: string;
    routeType: string;
    changeSpeed: string;
    lineRestriction: string;
    useProxFootSearch: string;
    useProxFootSearchOrigin: string;
    useProxFootSearchDestination: string;
    bike: string;
    plane: string;
    noCrowded: string;
    noSolidStairs: string;
    noEscalators: string;
    noElevators: string;
    lowPlatformVhcl: string;
    wheelchair: string;
    needElevatedPlt: string;
    assistance: string;
    SOSAvail: string;
    noLonelyTransfer: string;
    illumTransfer: string;
    overgroundTransfer: string;
    noInsecurePlaces: string;
    privateTransport: string;
    activeImp: string;
    activeCom: string;
    activeSec: string;
    twoSidedAlt: string;
    level: string;
  };
  excludedMeans: ExcludedMean[];
}

export interface ItRouter {
  $: {
    logASCII: string;
    logSVG: string;
  };
}

export interface ItPedestrian {
  $: {
    computeMonomodalTrip: string;
    computationType: string;
    itIncidentData: string;
    useElevation: string;
    speedFactor: string;
    costFactor: string;
    distanceFactor: string;
    traveltimeFactor: string;
    noTunnel: string;
    noBridge: string;
    noFerry: string;
    maxTime: string;
    minTime: string;
    maxLength: string;
    minLength: string;
    ignoreRestrictions: string;
    computeAlternativeRoutes: string;
    level: string;
    prefIllum: string;
    prefToilet: string;
    prefBench: string;
    useHdcAcc: string;
    useGeoRefs: string;
  };
}

export interface ItBicycle {
  $: {
    preferAsphaltTracks: string;
    preferGreenTracks: string;
    usePseudoRouting: string;
    useSignedRoute: string;
    cycleSpeed: string;
    prefHikePath: string;
    elevFac: string;
    useNetClasses: string;
    useDrawClasses: string;
    useEnv: string;
    inclEnvLeisureRoutes: string;
    inclEnvTrafficDensity: string;
    useSurfQuality: string;
    inclSurfQualGravel: string;
    inclSurfQualForrest: string;
    inclSurfQualSingleTrial: string;
    inclSurfQualCarry: string;
    useLayoutStructural: string;
    useLayoutDirections: string;
    prefPedestrianSeperated: string;
    useRecommRoute: string;
    computeMonomodalTrip: string;
    computationType: string;
    itIncidentData: string;
    useElevation: string;
    speedFactor: string;
    costFactor: string;
    distanceFactor: string;
    traveltimeFactor: string;
    noTunnel: string;
    noBridge: string;
    noFerry: string;
    maxTime: string;
    minTime: string;
    maxLength: string;
    minLength: string;
    ignoreRestrictions: string;
    computeAlternativeRoutes: string;
    level: string;
  };
}

export interface MitCar {
  $: {
    computeMonomodalTrip: string;
    computationType: string;
    itIncidentData: string;
    useElevation: string;
    speedFactor: string;
    costFactor: string;
    distanceFactor: string;
    traveltimeFactor: string;
    noTunnel: string;
    noBridge: string;
    noFerry: string;
    maxTime: string;
    minTime: string;
    maxLength: string;
    minLength: string;
    ignoreRestrictions: string;
    computeAlternativeRoutes: string;
    level: string;
    mitProfileData: string;
    mitIncidentData: string;
    mitOnlineData: string;
    noHighway: string;
    noTollRoad: string;
    prefSerSt: string;
  };
}

export interface MitTaxi {
  $: {
    computeMonomodalTrip: string;
    computationType: string;
    itIncidentData: string;
    useElevation: string;
    speedFactor: string;
    costFactor: string;
    distanceFactor: string;
    traveltimeFactor: string;
    noTunnel: string;
    noBridge: string;
    noFerry: string;
    maxTime: string;
    minTime: string;
    maxLength: string;
    minLength: string;
    ignoreRestrictions: string;
    computeAlternativeRoutes: string;
    level: string;
    mitProfileData: string;
    mitIncidentData: string;
    mitOnlineData: string;
    noHighway: string;
    noTollRoad: string;
    prefSerSt: string;
  };
}

export interface IndividualTransport {
  $: {
    meansCode: string;
    value: string;
    speed: string;
    selected: string;
  };
}

export interface DepartureTransport {
  individualTransport: IndividualTransport[];
}

export interface ItdItOption {
  itRouter: ItRouter[];
  itPedestrian: ItPedestrian[];
  itBicycle: ItBicycle[];
  mitCar: MitCar[];
  mitTaxi: MitTaxi[];
  departureTransport: DepartureTransport[];
}

export interface ItdUsedOption {
  $: {
    calcNumberOfTrips: string;
    dwellTime: string;
    nextDepsPerLeg: string;
    calcCO2: string;
    realtime: string;
    realOnlyInfo: string;
    itemType: string;
  };
}

export interface ItdTripOption {
  itdPtOptions: ItdPtOption[];
  itdItOptions: ItdItOption[];
  itdUsedOptions: ItdUsedOption[];
}

export interface ItdNoTrain {
  $: {
    name: string;
  };
}

export interface MotDivaParam {
  $: {
    line: string;
    project: string;
    direction: string;
    supplement: string;
    network: string;
  };
}

export interface ItdOperator {
  code: string[];
  name: string[];
}

export interface ItdServingLine2 {
  $: {
    selected: string;
    code: string;
    number: string;
    symbol: string;
    motType: string;
    mtSubcode: string;
    productId: string;
    realtime: string;
    direction: string;
    valid: string;
    compound: string;
    TTB: string;
    STT: string;
    ROP: string;
    type: string;
    spTr: string;
    destID: string;
    stateless: string;
    trainName: string;
    oK: string;
    vF: string;
    vT: string;
    index: string;
  };
  itdNoTrain: ItdNoTrain[];
  motDivaParams: MotDivaParam[];
  itdOperator: ItdOperator[];
  itdRouteDescText: string[];
}

export interface ItdServingLine {
  $: {
    trainInfo: string;
    selected: string;
  };
  itdServingLine: ItdServingLine2[];
}

export interface ItdDate3 {
  $: {
    year: string;
    month: string;
    day: string;
    weekday: string;
  };
}

export interface ItdTime2 {
  $: {
    hour: string;
    minute: string;
    ap: string;
  };
}

export interface ItdDateTime2 {
  itdDate: ItdDate3[];
  itdTime: ItdTime2[];
}

export interface ItdDate4 {
  $: {
    year: string;
    month: string;
    day: string;
    weekday: string;
  };
}

export interface ItdTime3 {
  $: {
    hour: string;
    minute: string;
    ap: string;
  };
}

export interface ItdRTDateTime {
  itdDate: ItdDate4[];
  itdTime: ItdTime3[];
}

export interface ItdNoTrain2 {
  $: {
    name: string;
    delay: string;
  };
  _: string;
}

export interface MotDivaParam2 {
  $: {
    line: string;
    project: string;
    direction: string;
    supplement: string;
    network: string;
  };
}

export interface ItdOperator2 {
  code: string[];
  name: string[];
}

export interface ItdServingLine3 {
  $: {
    key: string;
    code: string;
    number: string;
    symbol: string;
    motType: string;
    mtSubcode: string;
    productId: string;
    realtime: string;
    direction: string;
    directionFrom: string;
    trainName: string;
    trainNum: string;
    destID: string;
    stateless: string;
    trainType: string;
  };
  itdNoTrain: ItdNoTrain2[];
  motDivaParams: MotDivaParam2[];
  itdOperator: ItdOperator2[];
  itdRouteDescText: string[];
}

export interface ItdServingTrip {
  $: {
    tripCode: string;
    AVMSTripID: string;
  };
}

export interface Param2 {
  $: {
    edit: string;
  };
  type: string[];
  name: string[];
  value: string[];
}

export interface ParamList2 {
  param: Param2[];
}

export interface OutputClientText2 {
  htmlText: string[];
  wmlText: string[];
  smsText: string[];
  speechText: string[];
}

export interface AdditionalLink2 {
  $: {
    ID: string;
  };
  linkURL: string[];
  linkText: string[];
  linkTextShort: string[];
  linkTarget: string[];
}

export interface AdditionalLink {
  additionalLink: AdditionalLink2[];
}

export interface InfoText2 {
  content: string[];
  subtitle: string[];
  subject: string[];
  additionalText: string[];
  image: string[];
  outputClientText: OutputClientText2[];
  additionalLinks: AdditionalLink[];
}

export interface InfoLink2 {
  paramList: ParamList2[];
  infoLinkText: string[];
  infoLinkURL: string[];
  infoLinkImage: string[];
  infoText: InfoText2[];
}

export interface ItdLineInfoList {
  infoLink: InfoLink2[];
}

export interface ItdInfoLinkList2 {
  itdLineInfoList: ItdLineInfoList[];
}

export interface ItdDeparture {
  $: {
    stopID: string;
    x: string;
    y: string;
    mapName: string;
    area: string;
    platform: string;
    gid: string;
    pointGid: string;
    platformName: string;
    stopName: string;
    nameWO: string;
    pointType: string;
    countdown: string;
  };
  itdDateTime: ItdDateTime2[];
  itdRTDateTime: ItdRTDateTime[];
  itdServingLine: ItdServingLine3[];
  itdServingTrip: ItdServingTrip[];
  itdInfoLinkList: ItdInfoLinkList2[];
}

export interface ItdDepartureList {
  itdDeparture: ItdDeparture[];
}

export interface ItdDepartureMonitorRequest {
  $: {
    requestID: string;
  };
  itdOdv: ItdOdv[];
  itdDateTime: ItdDateTime[];
  itdDMDateTime: ItdDMDateTime[];
  itdDateRange: ItdDateRange[];
  itdTripOptions: ItdTripOption[];
  itdServingLines: ItdServingLine[];
  itdDepartureList: ItdDepartureList[];
}
