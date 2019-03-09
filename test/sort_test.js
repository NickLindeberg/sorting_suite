const expect = require('chai').expect
const sort = require('../sort')

pry = require('pryjs')

describe("Sort", function() {
  context("array of two numbers", function() {
    it("will sort an array of two numbers", function() {
      var array = sort([2,1]);
      expect(array).to.deep.equal([1,2])
    })
  })
  context("array of three numbers", function() {
    it("will sort an array of three numbers", function() {
      var array = sort([3,2,1]);
      expect(array).to.deep.equal([1,2,3])
    })
  })
  context("array of three numbers", function() {
    it("will sort an array of three numbers again", function() {
      var array = sort([2,3,1]);
      expect(array).to.deep.equal([1,2,3])
    })
  })
  context("array of two numbers", function() {
    it("will sort an array of two numbers", function() {
      var array = sort([3,2,1,4,5,9,8,7,6]);
      expect(array).to.deep.equal([1,2,3,4,5,6,7,8,9])
    })
  })
})
