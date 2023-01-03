# bigfx
[![npm version](https://badge.fury.io/js/bigfx)](https://badge.fury.io/js/bigfx)

`BigFX` is a JavaScript decimal fixed-point number library with unlimited size, based on the native `BigInt`. It supports up to 15 digits of fractional precision, and is internally stored as a `BigInt` scaled by a factor of `1e+15`. `BigFX` can work on both Node.js and the browser.

## Installation
Using NPM:
```
npm install bigfx
```

On the browser:
```
<script src="https://raw.githubusercontent.com/nirvanasupermind/bigfx/main/bigfx.min.js" type="text/javascript"></script>
```

## Example
```javascript
var BigFX = require("bigfx");
console.log(new BigFX(36.9).add(45).mul(94).toFixed(6)); // 7698.600000
console.log(new BigFX(9007199254740991n).add(2).toString()); // 9007199254740993
console.log(BigFX.PI.neg().cos().toString()); // -1
```

## API
* `constructor()` - Creates a `BigFX` object equal to 0
* `constructor(number)` - Creates a `BigFX` object from a number (precision may be lost)
* `constructor(bigint)` - Creates a `BigFX` object from a `BigInt`
* `constructor(bigfx)` - Creates a `BigFX` object from another `BigFX` object
* `clone()` - Returns a clone of a `BigFX` object
* `neg()` - Returns negation of a `BigFX` object
* `add(other)` - Returns addition of two `BigFX` objects (converts `other` if needed)
* `sub(other)` - Returns subtraction of two `BigFX` objects (converts `other` if needed)
* `mul(other)` - Returns multiplication of two `BigFX` objects (converts `other` if needed)
* `div(other)` - Returns division of two `BigFX` objects (converts `other` if needed)
* `mod(other)` - Returns modulo of two `BigFX` objects (converts `other` if needed)
* `and(other)` - Returns bitwise AND of two `BigFX` objects (converts `other` if needed, only works if both arguments are integers)
* `or(other)` - Returns bitwise OR of two `BigFX` objects (converts `other` if needed, only works if both arguments are integers)
* `xor(other)` - Returns bitwise XOR of two `BigFX` objects (converts `other` if needed, only works if both arguments are integers)
* `shl(other)` - Returns left-shift of two `BigFX` objects (converts `other` if needed, only works if `other` is an integer)
* `shr(other)` - Returns right-shift of two `BigFX` objects (converts `other` if needed, only works if `other` is an integer)
* `exp()` - Returns e raised to the power of a `BigFX` object
* `log()` - Returns natural logarithm of a `BigFX` object
* `pow(other)` - Returns exponentiation of two `BigFX` objects (converts `other` if needed)
* `sqrt()` - Returns the square root of a `BigFX` object
* `sin()` - Returns the sine of a `BigFX` object
* `cos()` - Returns the cosine of a `BigFX` object
* `tan()` - Returns the tangent of a `BigFX` object
* `lt(other)` - Checks if a `BigFX` object is less than another `BigFX` object
* `le(other)` - Checks if a `BigFX` object is less than or equal to another `BigFX` object
* `gt(other)` - Checks if a `BigFX` object is greater than another `BigFX` object
* `ge(other)` - Checks if a `BigFX` object is greater than or equal to another `BigFX` object
* `eq(other)` - Checks if a `BigFX` object is equal to another `BigFX` object
* `ne(other)` - Checks if a `BigFX` object is not equal to another `BigFX` object
* `toNumber()` - Converts a `BigFX` object to a number
* `toBigInt()` - Converts a `BigFX` object to a `BigInt`
* `toScaledBigInt()` - Converts a `BigFX` object to a `BigInt` scaled up by a factor of `1e+15` (the internal representation)
* `toString(radix = 10)`- Converts a `BigFX` object to a string in the specified radix
* `toFixed(fractionDigits = 0)`- Converts a `BigFX` object to a string with the specified number of fraction digits
* `toExponential()`- Converts a `BigFX` object to a string in scientific notation format
* `static ZERO`- A `BigFX` object with a value of 0
* `static ONE`- A `BigFX` object with a value of 1
* `static PI`- A `BigFX` object with a value of π
* `static E`- A `BigFX` object with a value of e
* `static random()`- Creates a `BigFX` object with a pseudo-random value between 0 and 1