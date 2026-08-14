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
    let array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (0 < day && day <= 7) {
        console.log(array[day - 1]);
    } else {
        console.log('Invalid day!');
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
    console.log(inputArray.reverse().join(' '));
}

reverseArr(['a', 'b', 'c', 'd', 'e']);
reverseArr(['abc', 'def', 'hig', 'klm', 'nop']);
reverseArr(['33', '123', '0', 'dd']);