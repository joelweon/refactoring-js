export function readingsOutsideRange(readings, range) {
  return readings.filter((r) => !range.contains(r.temp));
}

export class NumberRange {
  #min;
  #max;

  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  contains(num) {
    return this.#min <= num && this.#max >= num;
  }
}

const station = {
  name: 'ZB1',
  readings: [
    {temp: 47, time: '2016-11-10 09:10'},
    {temp: 53, time: '2016-11-10 09:20'},
    {temp: 58, time: '2016-11-10 09:30'},
    {temp: 53, time: '2016-11-10 09:40'},
    {temp: 51, time: '2016-11-10 09:50'},
  ],
};
const operationPlan = new NumberRange(51, 53);

console.log(readingsOutsideRange(station.readings, operationPlan))
