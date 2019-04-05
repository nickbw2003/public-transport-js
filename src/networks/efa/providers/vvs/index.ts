import { StationProvider, DepartureProvider } from './../EfaProvider';
import { Network } from './../../../../common/models/Network';
import { AbstractEfaProvider } from './../base/AbstractEfaProvider';
import { EfaStationProvider } from './../base/EfaStationProvider';
import { EfaDepartureProvider } from './../base/EfaDepartureProvider';

export const baseUrl: string = 'https://www2.vvs.de/vvs/';

export class VvsProvider extends AbstractEfaProvider {
  network: Network = Network.Vvs;
  protected stationProvider: StationProvider = new EfaStationProvider(baseUrl);
  protected departureProvider: DepartureProvider = new EfaDepartureProvider(baseUrl);
}
