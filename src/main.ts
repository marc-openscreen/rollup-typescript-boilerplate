//------------------------------------------------------------ Global Imports --
import ms from 'ms';

//---------------------------------------------------------- Relative Imports --
import lunchtime from './lunchtime.js';
import millisecondsUntil from './millisecondsUntil.js';

//--------------------------------------------------------- howLongUntilLunch --
export function howLongUntilLunch(hours: number = 12, minutes: number = 30): string {
  const millisecondsUntilLunchTime = millisecondsUntil(lunchtime(hours, minutes));

  return ms(millisecondsUntilLunchTime, {long: true});
}
