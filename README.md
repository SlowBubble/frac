# Usage

```
import * as frac from './node_modules/@clubfest/frac/frac.js'
// 1/2 + 1/4 + 1 = 1.75
console.log(frac.make(1, 2).plus(frac.make(1, 4)).plus(1).toFloat());
```