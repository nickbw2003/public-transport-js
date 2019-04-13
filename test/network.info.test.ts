import publicTransportService, { Network } from './../src';

describe('NetworkInfo is configured correctly for each Network', () => {
  const networks: Network[] = Object.keys(Network)
    .filter((key: any) => isNaN(key))
    .map(key => Network[key]);

  for (const network of networks) {
    test(`${Network[network]}`, async () => {
      const networkInfo = await publicTransportService.networkInfo(network);

      expect(networkInfo).toBeDefined();
      expect(networkInfo.network).toBeDefined();
      expect(networkInfo.lat).toBeDefined();
      expect(networkInfo.lng).toBeDefined();
      expect(networkInfo.name).toBeDefined();
      expect(networkInfo.country).toBeDefined();
    });
  }
});
