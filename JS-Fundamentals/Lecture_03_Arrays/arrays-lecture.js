// Task 01.
function findSum(array) {
  let sum = array[0] + array[array.length - 1];
  console.log(sum);
}

// findSum([20, 30, 40]);
// findSum([10, 17, 22, 33]);
// findSum([11, 58, 69]);

// Task 02.
function printDayName(day) {
  let array = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (0 < day && day <= 7) {
    console.log(array[day - 1]);
  } else {
    console.log("Invalid day!");
  }
}

// printDayName(3);
// printDayName(6);
// printDayName(0);

// Task 03.
function reverseArray(number, array) {
  let reversedArray = [];

  for (let i = 0; i < number; i++) {
    reversedArray.push(array[number - 1 - i]);
  }

  console.log(reversedArray.join(" "));
}

// reverseArray(3, [10, 20, 30, 40, 50]);
// reverseArray(4, [-1, 20, 99, 5]);
// reverseArray(2, [66, 43, 75, 89, 47] );

// Task 04.
function reverseArr(inputArray) {
  console.log(inputArray.reverse().join(" "));
}

// reverseArr(["a", "b", "c", "d", "e"]);
// reverseArr(["abc", "def", "hig", "klm", "nop"]);
// reverseArr(["33", "123", "0", "dd"]);

// Task 05.
function sumEvenNumbers(inputArray) {
  let sum = 0;
  for (let currentNumber of inputArray) {
    if (currentNumber % 2 === 0) {
      sum += Number(currentNumber);
    }
  }

  console.log(sum);
}

// sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
// sumEvenNumbers(["3", "5", "7", "9"]);
// sumEvenNumbers(["2", "4", "6", "8", "10"]);

// Task 06.
function evenAndOddSubsraction(array) {
  let evenSum = 0;
  let oddSum = 0;

  for (let element of array) {
    if (element % 2 === 0) {
      evenSum += element;
    } else {
      oddSum += element;
    }
  }
  console.log(evenSum - oddSum);
}

// evenAndOddSubsraction([1, 2, 3, 4, 5, 6]);
// evenAndOddSubsraction([3, 5, 7, 9]);
// evenAndOddSubsraction([2, 4, 6, 8, 10]);

// Task 07.
function checkIfArraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    console.log("Arrays are not identical");
    return;
  }

  let index = -1;
  let sum = 0;

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      index = i;
      console.log(`Arrays are not identical. Found difference at ${index}`);
      return;
    }

    sum += Number(arrayOne[i]);
  }

  console.log(`Arrays are identical. Sum: ${sum} `);
}

// checkIfArraysAreEqual(['10', '20', '30'], ['10', '20', '30']);
// checkIfArraysAreEqual(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
// checkIfArraysAreEqual(['1'], ['10']);

// Task 08.
function condenseArray(array) {
  let elementsCount = array.length;

  if (array.length === 1) {
    console.log(`${array[0]} is already condensed to number `);
    return;
  }

  while (array.length > 2) {
    let condensedArray = [];

    for (let i = 0; i < array.length - 1; i++) {
      let condensedSum = array[i] + array[i + 1];
      condensedArray.push(condensedSum);
    }

    array = condensedArray;
  }

  console.log(array[0] + array[1]);
}

// condenseArray([2, 10, 3]);
// condenseArray([5, 0, 4, 1, 2]);
// condenseArray([1]);