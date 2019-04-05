import publicTransportService, { Network } from './../src';

test('At least one station is found by name for VVS network', async () => {
  const stationsByName = await publicTransportService.stationsByName(Network.Vvs, 'Stuttgart Hbf');
  expect(stationsByName.length).toBeGreaterThan(0);
});

test('At least one station is found by coordinates for VVS network', async () => {
  const stationsByLatLng = await publicTransportService.stationsByLatLng(Network.Vvs, 48.7829823, 9.1798463);
  expect(stationsByLatLng.length).toBeGreaterThan(0);
});

test('At least one departure is found for a given station ID of VVS network', async () => {
  const departures = await publicTransportService.departuresByOriginStation(Network.Vvs, '5006118');
  expect(departures.length).toBeGreaterThan(0);
});
