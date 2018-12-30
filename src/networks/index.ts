import { EfaService } from './efa';
import { NetworkService } from '../common/NetworkService';

const efaService = new EfaService();

const networkServices = <NetworkService[]>[efaService];

export default networkServices;
