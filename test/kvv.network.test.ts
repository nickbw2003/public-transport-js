import publicTransportService, { Network } from './../src';

test('At least one station is found by name for KVV network', async () => {
  const stationsByName = await publicTransportService.stationsByName(Network.Kvv, 'Karlsruhe Hbf');
  expect(stationsByName.length).toBeGreaterThan(0);
});

test('At least one station is found by coordinates for KVV network', async () => {
  const stationsByLatLng = await publicTransportService.stationsByLatLng(Network.Kvv, 48.9939401, 8.4009743);
  expect(stationsByLatLng.length).toBeGreaterThan(0);
});

test('At least one departure is found for a given station ID of KVV network', async () => {
  const departures = await publicTransportService.departuresByOriginStation(Network.Kvv, '7000090');
  expect(departures.length).toBeGreaterThan(0);
});