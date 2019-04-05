import { Network } from './../../common/models/Network';
import { Station } from './../../common/models/Station';
import { NetworkService } from './../../common/NetworkService';
import { EfaProvider } from './providers/EfaProvider';
import { Departure } from './../../common/models/Departure';
import providers from './providers';

export class EfaService implements NetworkService {
  readonly networks: Network[] = [Network.Kvv, Network.Vvs];

  async stationsByLatLng(network: Network, lat: number, lng: number): Promise<Station[]> {
    return await this.getEfaProvider(network).byLatLng(lat, lng);
  }

  async stationsByName(network: Network, name: string): Promise<Station[]> {
    return await this.getEfaProvider(network).byName(name);
  }

  async departuresByOriginStation(network: Network, originStationId: string): Promise<Departure[]> {
    return await this.getEfaProvider(network).byOriginStation(originStationId);
  }

  getEfaProvider(network: Network): EfaProvider {
    return providers.find(ep => ep.network === network);
  }
}
