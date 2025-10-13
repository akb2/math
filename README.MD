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
ceil(10.123, 2);               // 10.13
ceil(3.151, 1);                // 3.2
ceil(7.1);                     // 8
ceil(3.141592653589793, 3);    // 3.142
ceil(1000000.1234567891, 10);  // 1000000.123456789
ceil(56.111111111111114, 5);   // 56.11112
```

### clamp

```ts
clamp(15, 10);                              // 10 (too hight)
clamp(-5, 10);                              // 0 (too low)
clamp(7, 10);                               // 7 (within range)
clamp(3.141592653589793, 3.1416, 3.1415);   // 3.141592653589793 (within range)
clamp(50, -10, 10);                         // NaN (incorrect range)
clamp(-99, 6, -6);                          // -6 (too low)
```

### floor

```ts
floor(10.123, 2);                // 10.12
floor(3.151, 1);                 // 3.1
floor(7.1);                      // 7
floor(3.141592653589793, 3);     // 3.141
floor(1000000.1234567891, 10);   // 1000000.123456789
floor(56.111111111111114, 5);    // 56.11111
```

### round

```ts
round(10.123, 2);               // 10.12
round(3.151, 1);                // 3.2
round(7.1);                     // 7
round(3.141592653589793, 3);    // 3.142
round(1000000.1234567891, 10);  // 1000000.123456789
round(56.111111111111114, 5);   // 56.11111
```

### random

```ts
random(0, 10);                          // 0 <= 4 <= 10
random(1.5, 5.5, false, 2);             // 1.5 <= 1.52 <= 5.5
random(0, 1, true, 3);                  // 0 < 0.88 < 1
random(-1000, 1000);                    // -1000 <= 230 <= 1000
random(-Infinity, Infinity, true, 6);   // NaN (incorrect ranges)
```

## License

MIT © [Andrei Kobelev (@akb2)](https://github.com/akb2)
