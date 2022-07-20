// 1) Falsy or Truthy
/*
// long way
function falsyOrTruthy(elem1, elem2) {
    if (!elem1) {
        return elem1;
    }
    else {
        return elem2;
    }
}

console.log(falsyOrTruthy(0, 5));

// short way
function falsyOrTruthy(elem1, elem2) {
    return (!elem1) ? elem1 : elem2;
}

console.log(falsyOrTruthy(0, 500));
console.log(falsyOrTruthy(false, 5));
console.log(falsyOrTruthy(10, 'Dog'));


// 2) Return the lenght of any given array

// it works
let arr = [1, 2, 3]
let arr2 = [5,0, -4, 1]
let arr3 = [7]
console.log(arr.length);
console.log(arr2.length);
console.log(arr3.length);


// length of the array
function arrLength(arr) {
    return arr.length;
}

console.log(arrLength([0, 1, 2, 3]));

// last number of the array
function arrLength(arr) {
    return arr[arr.length -1];
}

console.log(arrLength([0, 1, 2, 3]));

// 4) Find the sum of an array

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length (-1 this is going to take out the last number and sum only the others); i++) {
       sum = sum + arr[i];
    }
    return sum;
   }
   
   console.log(arrSum([1, 2, 248]));

// this is how you loop through every element in an array
   function arrSum(arr) {
 for (let i = 0; i < arr.length; i++) {
    console.log('run this code')
 }
 console.log('for loop broke')
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200,  500]));
console.log(arrSum([0, -5, -10]));

// this is showing every single element of the array
function arrSum(arr) {
 for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
 }
}

console.log(arrSum([0, 1, 2]));

// 5) Add up the number from a single number

function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; ++i) {
    sum = sum + i;
  }
  return sum;
}

console.log(progressiveSum(4));

// 6) Calculate the time

function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60); // round up the number
   let timerSeconds = seconds % 60;

   if (timerMinutes.toString().length === 1) {  // put '0' infront of single numbers
    timerMinutes = '0' + timerMinutes;
   }

   return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(70));

// 7) Find the largest number

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMax([-100, -200, -300]));

// 8) Reverse a string
// methods: 1 incrementing for loop
//          2 decrementing for loop
//          3 array reverse property

// 1
function reverseString(str) {
    let reversedString = '';
  for (let i = 0; i < str.length; i++) {
    reversedString = str[i] + reversedString;
  }
  return reversedString;
 }

console.log(reverseString('abc'));
console.log(reverseString('Antonio'));
console.log(reverseString('i love ancinio'));

// 2
function reverseString(str) {
    let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
 }

console.log(reverseString('abc'));
console.log(reverseString('Antonio'));
console.log(reverseString('i love ancinio'));

// 3
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('antonio'));

// 9) Turn every lement in an array into 0

// 1 for loop
// 2 array 'fill'
// 3 array 'map'

// 1
function convertToZeros(arr) {
    let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = 0;
  }
  return newArr;
}

console.log(convertToZeros([5, 100, 0]));

// 2
function convertToZeros(arr) {
    return new Array(arr.length).fill(0);
}

console.log(convertToZeros([1, 2, 5]));

// 3
function convertToZeros(arr) {
    return arr.map(elem => 0); // map converts every elem of the array into whatever is after =>
}

console.log(convertToZeros([1, 2, 5 ]));

// 10) Filter out all the apples

// 1 for loop
// 2 array .filter

// 1
  function removeApples(arr) {
    let noApples = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'Apple') {
            noApples.push(arr[i]);
        }
    }
    return noApples;
  }

  console.log(removeApples(['Banana', 'Orange', 'Apple']));

// 2
function removeApples(arr) {
    return arr.filter(elem => elem !== 'Apple')
}

  console.log(removeApples['Banana', 'Apple', 'Orange', 'Apple']);


// 11) Filter out all the falsy walues

// 1 for loop
// 2 array .filter

// 1
function filterOutFalsy(arr) {
        let truthyArr = []
        for (let i = 0; i < arr.length; i++) {
            if (!!arr[i] !== false) {
                truthyArr.push(arr[i]);
            }
        }
        return truthyArr;
}

console.log(filterOutFalsy(["", [], null, undefined, "0"]));

// 2 
function FilterOutFalsy(arr) {
    return arr.filter (elem => !!elem === true);
}
console.log(FilterOutFalsy(["", [], 0, null, undefined, "0"]))


// 12) Truthy to true, Falsy to false
*/
function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, "Anto", "", []]));
