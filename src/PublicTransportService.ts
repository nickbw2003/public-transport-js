import { NetworkService } from './common/NetworkService';
import { Network } from './common/models/Network';
import { Station } from './common/models/Station';
import { Departure } from './common/models/Departure';
import networks from './networks';
import { NetworkInfo } from './common/models/NetworkInfo';
import fileAccess from './common/util/fileAccess';

const networkInfoFilePath = `${__dirname}/../networkInfo.json`;

export class PublicTransportService {
  private networkInfos: NetworkInfo[];

  async stationsByLatLng(network: Network, lat: number, lng: number): Promise<Station[]> {
    return await this.getNetworkService(network).stationsByLatLng(network, lat, lng);
  }

  async stationsByName(network: Network, name: string): Promise<Station[]> {
    return await this.getNetworkService(network).stationsByName(network, name);
  }

  async departuresByOriginStation(network: Network, originStationId: string): Promise<Departure[]> {
    return await this.getNetworkService(network).departuresByOriginStation(network, originStationId);
  }

  async networkInfo(network: Network): Promise<NetworkInfo> {
    if (!this.networkInfos) {
      this.networkInfos = JSON.parse(await fileAccess.readFile(networkInfoFilePath));
    }

    return this.networkInfos.find(ni => ni.network === Network[network]);
  }

  private getNetworkService(network: Network): NetworkService {
    return networks.find(ns => ns.networks.indexOf(network) > -1);
  }
}
