import * as frac from "./frac.js";
import { runTest } from './node_modules/@clubfest/table-test/index.js'

const testCases = [
  {
    name: 'testing plus',
    got: frac.make(1, 4).plus(1),
    want: frac.make(5, 4),
    comparisonFunc: fracEquals,
  },
  {
    name: 'testing toFloat',
    got: frac.make(1, 4).plus(1).toFloat(),
    want: 1.25,
  },
];

runTest({testCases: testCases, testName: 'testing frac.js'});

function fracEquals(got, want) {
  return got.equals(want);
};
