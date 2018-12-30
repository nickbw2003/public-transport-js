import { Station } from './models/Station';
import { Network } from './models/Network';
import { Departure } from './models/Departure';

export interface NetworkService {
  networks: Network[];
  stationsByLatLng: (network: Network, lat: number, lng: number) => Promise<Station[]>;
  stationsByName: (network: Network, name: string) => Promise<Station[]>;
  departuresByOriginStation: (network: Network, originStationId: string) => Promise<Departure[]>;
}
