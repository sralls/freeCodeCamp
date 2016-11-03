function reverseString(str) {
 var arr = str.split("")
 arr.reverse();
 str = arr.join("");
 return str;
}
reverseString("dogs");

////////

function factorialize(num) {
  var count = 1;
  for(var i = 1; i <= num; i++){
    count *= i;
  }
  return count;
}
factorialize(5);

////////

function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}_\- ]/g, "");
  var newArr = str.split("");
  newArr = newArr.reverse("");
  str2 = newArr.join("");
  if(str === str2){
    return true;
  } else {
    return false;
  }
}
palindrome("_eye eye");

///////
var testString = "The quick brown fox jumped over the lazy dog";
var testArray = [];

function findLongestWord(str) {
  var longestArray = str.split(" ");
  var longestWord = "";
  for(var i = 0; i < longestArray.length; i++) {
    if(longestArray[i].length > longestWord.length) {
      longestWord = longestArray[i];
    }
  }
  return longestWord.length;
}

//////////
var testString = "The quick brown fox jumped over the lazy dog";
var testArr = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

var titleCase = function (str) {
  var strArr = str.toLowerCase().split(" ");
  for(var i = 0; i < strArr.length; i++){
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(" ");
}

////////
var testLarge = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

function largestOfFour(arr) {
  var largeArr = [];
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i][j] > arr[i][j+1]){
        console.log(arr[i][j]);
      }
    }
  }     
  return largeArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

var testArr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
//FUNCTIONALLY 
function largestOfFour(arr) {
  
  for(var i = 0; i < arr.length; i++){ //index through each array
    arr[i] = arr[i].reduce(function(largestNum, current){
       return largestNum > current ? largestNum : current;
    }, 0)
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// FCC: Confirm the Ending
var testStr = "Bastian"
var testTar = "n"

function confirmEnding(str, target) {
    var tarLen = target.length
    var strLen = str.length
    if(str.substring(strLen - tarLen, strLen) === target){
      return true;
    } else {
      return false;
    }
}

confirmEnding("Bastian", "n");

// Repeate a string repeat a string 


function repeatStringNumTimes(str, num) {
  var newStr = ""
  for(var i = 0; i < num; i++){
    var newStr = newStr.concat(str)
  }
  return newStr
}

repeatStringNumTimes("abc", 3);

// Truncate a string

function truncateString(str, num) {
  if(num <=3) {
    str = str.slice(0, num);
    str = str.concat("...");
  } else if(str.length > num){
    str = str.slice(0, num - 3);
    str = str.concat("...");
  } 
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
var tester = "A-tisket a-tasket A green and yellow basket"

// Chunky Monkey
var testyArr = ["a", "b", "c", "d"]
function chunkArrayInGroups(arr, size) {
  var newArr = []
  for(var i = 0; i < arr.length; i += size){
    newArr.push(arr.slice(i, i+size))
  }
  return arr = newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Slasher Flick

function slasher(arr, howMany) {
  arr.splice(0, howMany)
  return arr;
}

slasher([1, 2, 3], 2);

// Mutations
//If all the letters present in arr[2] are in arr[1], return true
var arr = ["hello", "neo"]
function mutation(arr) {
  var check = undefined;
  for(var i = 0; i < arr[1].length; i++){ //search if each letter in arr[1] is in arr[0]
    if(arr[0].toLowerCase().indexOf(arr[1].toLowerCase().charAt(i)) < 0)
    return false
  }
  return true
}

mutation(["hello", "hey"]);

// Falsy Bouncer

function bouncer(arr) {
  return arr.filter(function(value){
    return value ? true : false;
  })
}

// Seek & Destroy

function destroyer(arr) {
  var args = Array.from(arguments)
  for(var i = 1; i < args.length; i++) 
    arr = arr.filter(function(value){
      return value !== args[i] ? true : false;
   })
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Where do I belong? 
// var yay = [4,6,5]
// function getIndexToIns(arr, num) {
//   var sorted = arr.sort()
//   var winner = 0
//   for(var i = 0; i < arr.length; i++){
//     if(sorted[i] >= num){
//       return i;
//     } else if(){
      
//     }
//   }
// }

getIndexToIns([1,2,3,4,5], 3.5);

  
function getIndexToIns(arr, num) {
  var index = arr.sort(function (curr, next) {return curr > next})
                 .findIndex(function(currentNum) {return num <= currentNum});
  return index === -1 ? arr.length : index;
}
getIndexToIns([1,2,3,4,5], 3.5);
  
var arr1 = [3,10,5,7];
  
// Ceasars Cipher

var ceasar = "SERR PBQR PNZC"

function rot13(str) { // LBH QVQ VG!
  var arr = str.split("")
  return arr.map(function(value){
    if(value.match(/[! ?.]/gi)){
       return value
    } else if ((value.charCodeAt()) <= 77){
      return String.fromCharCode(value.charCodeAt() + 13)
    } else if ((value.charCodeAt()) > 77){
      return String.fromCharCode(value.charCodeAt() - 13)
    }
  }).join("")
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
