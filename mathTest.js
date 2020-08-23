import * as math from "./math.js";
import { runTest } from './node_modules/@clubfest/table-test/index.js'

const testCases = [
  {
    name: 'testing gcd',
    got: math.gcd(8, 12),
    want: 4,
  },
  {
    name: 'testing gcd for relatively prime pairs',
    got: math.gcd(4, 9),
    want: 1,
  },
];

runTest({testCases: testCases, testName: 'testing math.js'});

