// Sum All
function sumAll(arr) {
  var min = Math.min(...arr); // new spread operator
  var max = Math.max(...arr);
  var total = 0;
  for(var i = min; i <= max; i++){
    total += i;
  }
  return total
}

sumAll([1, 4]);

// Diff Two Arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.filter(function(value){
    return arr2.indexOf(value) === -1 ? newArr.push(value) : false;
  })
   arr2.filter(function(value){
    return arr1.indexOf(value) === -1 ? newArr.push(value) : false;
  })
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 8, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])

//Roman Number Converter
function convert(num) {
  var romanEquiv = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var roman = '';
  for (var key in romanEquiv) {
    while (num >= romanEquiv[key]) {
      roman += key;
      num -= romanEquiv[key];
    }
  }
  return roman;
}