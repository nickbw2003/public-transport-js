import { EfaProvider } from './EfaProvider';
import { KvvProvider } from './kvv';

const kvvProvider = new KvvProvider();

const providers = <EfaProvider[]>[kvvProvider];

export default providers;
