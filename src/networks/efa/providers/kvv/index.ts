import { StationProvider, DepartureProvider } from './../EfaProvider';
import { Network } from './../../../../common/models/Network';
import { AbstractEfaProvider } from './../base/AbstractEfaProvider';
import { EfaStationProvider } from './../base/EfaStationProvider';
import { EfaDepartureProvider } from './../base/EfaDepartureProvider';

export const baseUrl: string = 'https://projekte.kvv-efa.de/sl3/';

export class KvvProvider extends AbstractEfaProvider {
  network: Network = Network.Kvv;
  protected stationProvider: StationProvider = new EfaStationProvider(baseUrl);
  protected departureProvider: DepartureProvider = new EfaDepartureProvider(baseUrl);
}
