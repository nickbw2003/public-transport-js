import { EfaProvider } from './EfaProvider';
import { KvvProvider } from './kvv';
import { VvsProvider } from './vvs';

const kvvProvider = new KvvProvider();
const vvsProvider = new VvsProvider();

const providers = <EfaProvider[]>[kvvProvider, vvsProvider];

export default providers;
