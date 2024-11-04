function module1() {
  const counter = {};
}

function module2() {
  const counter = new Object();
}

function module3() {
  const counter = Object.create({});
}

function module4() {
  const counter = Object.assign({});
}

function module5() {
  function MyObject() {}

  const counter = new MyObject();
}

function module6() {
  class MyObject2 {}

  const counter5 = new MyObject2();
}

function module7() {
  const obj = '{}';

  const counter = JSON.parse(obj);

  console.log(counter);
}
