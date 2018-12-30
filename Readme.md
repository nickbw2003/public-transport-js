# public-transport-js

This package enables you to query for public transport stations and departures of them. Currently the following networks are supported:

  * KVV (Karlsruher Verkehrsverbund, Germany)

More networks will be added from time to time. Feel free to contribute - the package is already designed to support multiple networks.

## Installation
This package is available through the [npm registry](https://www.npmjs.com/). Before installing it make sure that you have installed [Node.js](https://nodejs.org/en/download/).

```bash
$ npm install public-transport-js
```

## Usage
Using this package is quite simple. See the following samples to have an idea what you can do with it.

```js
import publicTransportService, { Network } from 'public-transport-js';

// this returns all stations of the KVV network matching the name by the query string 'Karlsruhe Hbf' - you don't have to pass the whole name
const stationsByName = await publicTransportService.stationsByName(Network.Kvv, 'Karlsruhe Hbf');

// this returns all stations of the KVV network around the given coordinate
const stationsByLatLng = await publicTransportService.stationsByLatLng(Network.Kvv, 48.9939401, 8.4009743);

// to get a list of departures of a specific station pass the network and station ID to the following method
const departures = await publicTransportService.departuresByOriginStation(Network.Kvv, '7000090');
```

## License

  [MIT](LICENSE)