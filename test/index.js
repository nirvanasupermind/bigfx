var BigFX = require("../bigfx.js");
console.log(new BigFX(36.9).add(45).mul(94).toFixed(6)); // 7698.600000
console.log(new BigFX(9007199254740991n).add(2).toString()); // 9007199254740993
console.log(BigFX.PI.neg().cos().toString()); // -1