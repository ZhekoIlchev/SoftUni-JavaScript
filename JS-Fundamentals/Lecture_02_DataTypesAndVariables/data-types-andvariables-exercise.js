// Task 1.
function  printSumOfDigits(number) {
    let sum = 0;

    while (number > 0) {
        let lastDigit = number % 10;
        sum += lastDigit;

        number = Math.floor(number / 10);
    }

    console.log(sum);
}

// Task 2.
function printReversedCharacters(char1, char2, char3) {
    let reversedResult = `${char3}${char2}${char1}`;
    let asciiResult = `${char3.charCodeAt(0)} ${char2.charCodeAt(0)} ${char1.charCodeAt(0)}`;

    console.log(reversedResult);
    console.log(asciiResult);
}

//printReversedCharacters('a', 'b', 'c');

// Task 3.
function printTownInfo(townName, population, area) {
    let flag = true;

    if (String(townName).length <= 2) {
        console.log('Town name must be at least 3 characters!');
        flag = false;
    }

    if (Number(population) < 0) {
        console.log('Population must be positive numbers!');
        flag = false;
    }

    if (Number(area) < 0) {
        console.log('Area must be positive numbers!');
        flag = false;
    }

    if (flag) {
        console.log(`Town ${townName} has population of ${population} and area ${area} square km.`);
    }
}

// printTownInfo('Sofia', 1286383, 492);
// printTownInfo('La', 1286383, 492);
// printTownInfo('Sofia', -1286383, 492);
// printTownInfo('Ka', 1286383,-492);

// Task 4.
function convertDistance(meters) {
    let kilometers = meters / 1000;
    let miles = kilometers * 0.621371;

    console.log(`${meters} meters is equal to ${kilometers} kilometers.`);
    console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);
}

// convertDistance(1852);
// convertDistance(798);

// Task 5.
function poundsToDollarsConverter(pounds) {
    let dollars = pounds * 1.31;
    console.log(dollars.toFixed(3));
}

// poundsToDollarsConverter(80);
// poundsToDollarsConverter(39);

// Task 6.
function reverseString(word) {
    let reversedWord = '';

    for (let i = word.length - 1 ; i >= 0; i--) {
        let symbol = word[i];
        reversedWord += symbol;
    }

    console.log(reversedWord);
}

// reverseString('Information');
// reverseString('star');
// reverseString('racecar');

// Task 7.
function checkSymbol(symbol) {
    let asciiCode = String(symbol).charCodeAt(0);

    if (asciiCode >= 65 && asciiCode <= 90) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

// checkSymbol('L');
// checkSymbol('f');

function calculator(numOne, operator, numTwo) {
    let result = 0;
    switch(operator) {
        case '+':
            result = numOne + numTwo;
            break;
        case '-':
            result = numOne - numTwo;
            break;
        case '*':
            result = numOne * numTwo;
            break;
        case '/':
            result = numOne / numTwo;
            break;
        default:
            console.log('Uknown operator');
            break;
    }

    console.log(result.toFixed(2));
}

// calculator(5, '+', 10);
// calculator(25.5, '-', 3);