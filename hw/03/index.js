// * 1

/* - */

//* 2

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: 'some value' };

logger.apply(obj);
logger.call(obj);
logger.bind(obj)();

//* 3

const nums = [2, 5, 67, 55, 46, 78, 999, 764, 356, 7777];

const sum = nums.reduce((acc, val) => acc + val, 0);

const str = ['h', 'e', 'l', 'l', 'o'].join('');

const max = Math.max(...nums);
const min = Math.min(...nums);

const numsSort = nums.sort((a, b) => a - b);

const maxFromSort = numsSort[nums.length - 1];
const minFromSort = numsSort[0];
