# @akb2/math

Lightweight TypeScript math utilities extending JavaScript's standard math functionality.
Includes precise rounding and random number generation helpers.

## Installation

```bash
npm install @akb2/math
```

## Using

### Import

```ts
import { ceil, clamp, floor, random, round } from "@akb2/math";
```

### ceil

```ts
ceil(10.123, 2);    // 10.13
ceil(3.141, 1);     // 3.2
ceil(7.1);          // 8
```

### clamp

```ts
clamp(15, 10, 0);   // 10  (too high)
clamp(-5, 10, 0);   // 0   (too low)
clamp(7, 10, 0);    // 7   (within range)
```

### floor

```ts
floor(10.987, 2);   // 10.98
floor(3.999, 1);    // 3.9
floor(5.7);         // 5
```

### round

```ts
round(10.256, 2);   // 10.26
round(3.14159, 3);  // 3.142
round(7.5);         // 8
```

### random

```ts
random(0, 10);                   // integer | 0 <= N <= 10 | e.g. 7
random(1.5, 5.5, false, 2);      // float with 2 decimals | 1.5 <= N <= 5.5 | e.g. 3.27
random(0, 1, true, 3);           // float in (0,1) excluding borders | 0 < N < 1 | e.g. 0.428
```

## License

MIT © [Andrei Kobelev (@akb2)](https://github.com/akb2)
