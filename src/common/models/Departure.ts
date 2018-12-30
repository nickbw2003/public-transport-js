import { Line } from './Line';

export interface Departure {
  plannedTime: Date;
  realTime: Date;
  line: Line;
}
