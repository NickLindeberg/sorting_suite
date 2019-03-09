const expect = require('chai').expect
const flip = require('../sort')

describe("sort functionality", function() {
  context("sort function", function(){
    it('can sort an array', function(){
      var array = flip([2,1])
      expect(array).to.deep.equal([1,2])
    })
  })
})
