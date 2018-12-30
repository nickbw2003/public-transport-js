import { Network } from './../../../common/models/Network';
import { Departure } from './../../../common/models/Departure';
import { Station } from './../../../common/models/Station';

export interface EfaProvider extends StationProvider, DepartureProvider {
  network: Network;
}

export interface DepartureProvider {
  byOriginStation: (
    originStationId: string,
    maxDepartures?: number,
    time?: Date,
    equivs?: boolean,
  ) => Promise<Departure[]>;
}

export interface StationProvider {
  byLatLng: (lat: number, lng: number) => Promise<Station[]>;
  byName: (name: string) => Promise<Station[]>;
}
