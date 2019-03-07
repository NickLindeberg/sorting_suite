const assert = require('chai').assert
const sort = require('../sort')

describe("sort functionality", function() {
  context("sort function", function(){
    it('can sort an array', function(){
      assertgi.equal(sort([2,1]).toString, ([1,2]).toString)
    })
  })
})
