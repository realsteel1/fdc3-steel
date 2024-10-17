export interface App {
  appId: string;
  title: string;
  description: string;
  categories: string[];
  version: string;
  tooltip: string;
  lang: string;
  icons: Icon[];
  screenshots: Screenshot[];
  contactEmail: string;
  supportEmail: string;
  moreInfo: string;
  publisher: string;
  type: string;
  details: Details;
  hostManifests: HostManifests;
  interop: Interop;
}

export interface Icon {
  src: string;
  size: string;
  type: string;
}

export interface Screenshot {
  src: string;
  label: string;
  type: string;
  size: string;
}

export interface Details {
  url: string;
}

export interface HostManifests {}

export interface Interop {
  intents: Intents;
  userChannels: UserChannels;
  appChannels: AppChannel[];
}

export interface Intents {
  listensFor: ListensFor;
  raises: Raises;
}

export interface ListensFor {
  ViewChart: ViewChart;
  'myApp.GetPrice': MyAppGetPrice;
}

export interface ViewChart {
  contexts: string[];
}

export interface MyAppGetPrice {
  contexts: string[];
  resultType: string;
}

export interface Raises {
  ViewOrders: string[];
  StartEmail: string[];
}

export interface UserChannels {
  broadcasts: string[];
  listensFor: string[];
}

export interface AppChannel {
  id: string;
  description: string;
  broadcasts: string[];
  listensFor: string[];
}
