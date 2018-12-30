export interface InfoLinkList {
  itdBannerInfoList: BannerInfoList[];
}

interface BannerInfoList {
  infoLink: InfoLink[];
}

interface InfoLink {
  infoLinkImage: string[];
  infoLinkText: string[];
  infoLinkURL: string[];
  infoText: InfoText[];
  paramList: ParamList[];
}

interface ParamList {
  param: Param[];
}

interface Param {
  $: {
    edit: string;
  };
  name: string[];
  type: string[];
  value: string[];
}

interface InfoText {
  additionalText: string[];
  content: string[];
  image: string[];
  outputClientText: OutputClientText[];
  subject: string[];
  subtitle: string[];
}

interface OutputClientText {
  htmlText: string[];
  smsText: string[];
  speechText: string[];
  wmlText: string[];
}
