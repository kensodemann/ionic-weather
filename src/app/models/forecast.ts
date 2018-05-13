import { Weather } from './weather';

export interface Forecast {
  summary: Array<Weather>, // One summarized entry per day
  daily: Array<Array<Weather>> // Three hour increments throughout the day
}
