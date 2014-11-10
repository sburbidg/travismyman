'use strict'

var expect = require('chai').expect
var count = require('../counter/count')

describe ('a counter function', function() {
  var counter = new count

  it('should start the count at zero', function(done) {
    expect(counter.currCount).to.eql(0)
    done()
  })

  it('should count upwards by one', function(done){
    counter.incrementor()
    expect(counter.currCount).to.eql(1)

    counter.incrementor()
    expect(counter.currCount).to.eql(2)
    done()
  })
})
