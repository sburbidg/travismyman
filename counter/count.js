'use strict'

function Counter(){
  this.currCount = 0
};

Counter.prototype.incrementor = function(){
  this.currCount++
};

Counter.prototype.getValue = function(){
  return this.currCount
};

var value = new Counter()
value.incrementor()
value.incrementor()
console.log(value.currCount)


module.exports = Counter
