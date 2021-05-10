//------------------------------------------------------------ Global Imports --
const assert = require('assert');

//---------------------------------------------------------- Relative Imports --
const {howLongUntilLunch} = require('..');

//------------------------------------------------------------------ MockDate --
class MockDate {
  private date = 0;
  private hours = 0;
  private minutes = 0;
  private seconds = 0;
  private milliseconds = 0;

  static now() {
    return now.valueOf();
  }

  getDate(): number {
    return this.date;
  }

  setDate(date: number): void {
    this.date = date * 1e3 * 60 * 60 * 24;
  }

  setHours(h: number) {
    this.hours = h * 1e3 * 60 * 60;
  }

  setMinutes(m: number): void {
    this.minutes = m * 1e3 * 60;
  }

  setSeconds(s: number): void {
    this.seconds = s * 1e3;
  }

  setMilliseconds(ms: number): void {
    this.milliseconds = ms;
  }

  getTime(): number {
    return this.valueOf();
  }

  valueOf(): number {
    return this.milliseconds + this.seconds + this.minutes + this.hours + this.date;
  }
}

const now = new MockDate();

global.Date = (MockDate as any) as typeof Date;

//---------------------------------------------------------------------- test --
function test(hours: number, minutes: number, seconds: number, expected: string): void {
  now.setHours(hours);
  now.setMinutes(minutes);
  now.setSeconds(seconds);

  assert.equal(howLongUntilLunch(...lunchtime), expected);

  console.log(`\u001B[32m✓\u001B[39m ${expected}`);
}

let lunchtime = [12, 30];

test(11, 30, 0, '1 hour');
test(10, 30, 0, '2 hours');
test(12, 25, 0, '5 minutes');
test(12, 29, 15, '45 seconds');
test(13, 30, 0, '23 hours');

// some of us like an early lunch
lunchtime = [11, 0];
test(10, 30, 0, '30 minutes');
