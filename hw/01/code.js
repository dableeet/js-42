//3 задание

const str = 'str';
const str2 = String('str2');

const num = 123;
const num2 = Number(123);

const boolean = false;
const boolean2 = Boolean(1);

const n1 = null;

const undef1 = undefined;
let undef;

const sym1 = Symbol();
const sym2 = Symbol('id');

const bigInt1 = 1234567890123456789012345678901234567890n;

const bigInt2 = BigInt('1234567890123456789012345678901234567890');

// ------------------------------------
const res = 'B' + 'a' + (1 - 'hello');
console.log(res); // BaNaN

const res2 = (true && 3) + 'd';
console.log(res2); // 3d

const res3 = Boolean(true && 3) + 'd';
console.log(res3); // trued
