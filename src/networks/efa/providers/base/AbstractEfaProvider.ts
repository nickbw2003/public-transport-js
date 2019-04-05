import { EfaProvider, StationProvider, DepartureProvider } from './../EfaProvider';
import { Network } from './../../../../common/models/Network';
import { Station } from './../../../../common/models/Station';
import { Departure } from './../../../../common/models/Departure';

export abstract class AbstractEfaProvider implements EfaProvider {
  abstract readonly network: Network;
  protected abstract readonly stationProvider: StationProvider;
  protected abstract readonly departureProvider: DepartureProvider;

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
