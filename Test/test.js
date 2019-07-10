function sayName(name) {
  let msg = `My name is${name}`;
  return msg;
}

let arr = [5, -3, 6, -5, 0, -7, 8, 9];
let result = arr.reduce(function(sum, elem) {
  return sum + elem;
});

let assert = require('chai').assert;

describe('sayName', function () {
  it('Receive new name phrase', function () {
    assert.typeOf(sayName('Ivan'), 'string');
  });
});

describe('arr', function () {
  it('Receive sum of array numbers', function () {
    assert.equal(result, 13);
  });
});