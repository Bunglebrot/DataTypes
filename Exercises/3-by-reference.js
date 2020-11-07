'use strict';

const inc = obj => {
  obj.n += 1;
};
const objectOne = { n: 44 };
console.dir(inc(objectOne));

module.exports = { inc };
