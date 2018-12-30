import { EfaProvider } from './../EfaProvider';
import { Network } from './../../../../common/models/Network';
import { Station } from './../../../../common/models/Station';
import { KvvStationProvider } from './KvvStationProvider';
import { KvvDepartureProvider } from './KvvDepartureProvider';
import { Departure } from './../../../../common/models/Departure';

export const baseUrl: string = 'https://projekte.kvv-efa.de/sl3/';

export class KvvProvider implements EfaProvider {
  readonly network: Network = Network.Kvv;

  private readonly stationProvider = new KvvStationProvider();
  private readonly departureProvider = new KvvDepartureProvider();

  async byLatLng(lat: number, lng: number): Promise<Station[]> {
    return await this.stationProvider.byLatLng(lat, lng);
  }

  async byName(name: string): Promise<Station[]> {
    return await this.stationProvider.byName(name);
  }

  async byOriginStation(
    originStationId: string,
    maxDepartures: number = 0,
    time: Date = null,
    equivs: boolean = false,
  ): Promise<Departure[]> {
    return await this.departureProvider.byOriginStation(originStationId, maxDepartures, time, equivs);
  }
}
