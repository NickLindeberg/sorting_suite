pry = require('pryjs')

function sort(array) {
  length = array.length
  var swapped;
  do {
    swapped = false;
    for (var element = 1; element < length; ++element){
      if (array[element - 1] > array[element]) {
        [array[element], array[element-1]] = [array[element-1], array[element]];
        swapped = true;
      }
    }
  } while (swapped == true)
  return array
}

console.log(sort([2,1,3,5,6,7,8,0,1,4,6,7]))

module.exports = sort
