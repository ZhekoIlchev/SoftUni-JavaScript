// Task 1.
function checkType(input) {
    console.log(typeof input);

    if (typeof (input) === 'number') {
        console.log(`${input}`);
    } else if (typeof (input) === 'string') {
        console.log(`${input}`);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

// Task 2.
function printName(firstName, lastName, delimiter) {
    console.log(`${firstName}${delimiter}${lastName}`);
}

// Task 3.
function matchWord(word1, char, word2) {
    let word3 = String(word1).replace('_', char);
    let result = word3 === word2
        ? 'Matched'
        : 'Not Matched'

    console.log(result)
}

// Task 4.
function checkNumber(num1, num2, num3) {
    let result = (Number(num1) + Number(num2) + Number(num3))
    let isIntger = result % 1 === 0;

    if (isIntger) {
        console.log(`${result} - Integer`);
    } else {
        console.log(`${result} - Float`);
    }
}

// Task 5.
function isNumberAmazing(number) {
    let numberAsString = String(number);
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }

    let isNumberAmazing = sum.toString().includes('9');
    if (isNumberAmazing) {
        console.log(`${numberAsString} Amazing? True`);
    } else {
        console.log(`${numberAsString} Amazing? False`);
    }
}

// Task 6.
function solve(band, album, song) {
    let songDuration = (band.length * album.length) * song.length / 2;
    let rotations = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}

// Task 7.
function calculateNeededHours(numberOfPages, pagesPerHour, availableDays) {
    let hours = Number(numberOfPages) / Number(pagesPerHour);
    let days = hours / Number(availableDays);

    console.log(days);
}

// Task 8.
function convertCenturies(centuries) {
    let years = Number(centuries) * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

// Task 9.
function isNumberSpecial(number) {
    for (let i = 1; i <= number; i++) {
        let currentNumber = i;
        let numberAsString = String(currentNumber);
        let sum = 0;

        for (let k = 0; k < numberAsString.length; k++) {
            sum += Number(numberAsString[k]);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

// Task 10.
function printLetters(n) {
    for (let i = 0; i < n; i++) {
        let firstLetter = String.fromCharCode(97 + i);

        for (let j = 0; j < n; j++) {
            let secondLetter = String.fromCharCode(97 + j);

            for (let k = 0; k < n; k++) {
                let thirdLetter = String.fromCharCode(97 + k);
                let result = firstLetter + secondLetter + thirdLetter;
                console.log(result);
                result = '';
            }
        }
    }
}