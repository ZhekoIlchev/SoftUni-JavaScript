// Task 1.
function printAgeType(input) {
    let age;

    if (input >= 0 && input <= 2) {
        age = 'baby';
    } else if (input >= 3 && input <= 13) {
        age = 'child';
    } else if (input >= 14 && input <= 19) {
        age = 'teenager';
    } else if (input >= 20 && input <= 65) {
        age = 'adult';
    } else if (input >= 66) {
        age = 'elder';
    } else {
        age = 'out of bounds'
    }

    console.log(age);
}

// Task 2.
function roundNumber(number, precision) {
    if (precision > 15) { 
        precision = 15;
    }

    number = Number((number).toFixed(precision));
    console.log(number);
}

// Task 3.
function findBiggestDevisor(number) {
    let biggestDevisor;

    if (number % 2 === 0) {
        biggestDevisor = 2;
    }

    if (number % 3 === 0) {
        biggestDevisor = 3
    }

    if (number % 6 === 0 ) {
        biggestDevisor = 6;
    }

    if (number % 7 === 0) {
        biggestDevisor = 7;
    }

    if (number % 10 === 0) {
        biggestDevisor = 10;
    }

    console.log(biggestDevisor === undefined ? "Not divisible" : `The number is divisible by ${biggestDevisor}`);
}

// Task 4.
function calculatePrice(group, type, day) {
    let totalPrice = 0;
    let pricePerPerson = 0;
    let discount = 0;

    switch (day) {
        case 'Friday':
            if (type === 'Students') {
                pricePerPerson = 8.45;
            } else if (type === 'Business') {
                pricePerPerson = 10.90;
            } else if (type === 'Regular') {
                pricePerPerson = 15.00;
            }
            break;
        case 'Saturday':
            if (type === 'Students') {
                pricePerPerson = 9.80;
            } else if (type === 'Business') {
                pricePerPerson = 15.60;
            } else if (type === 'Regular') {
                pricePerPerson = 20.00;
            }
            break;
        case 'Sunday':
            if (type === 'Students') {
                pricePerPerson = 10.46;
            } else if (type === 'Business') {
                pricePerPerson = 16.00;
            } else if (type === 'Regular') {
                pricePerPerson = 22.50;
            }
            break;
    }

    if (group  >= 30 && type === 'Students') {
        discount = 0.15;
    }

    if (group > 100 && type === 'Business') {
        group -= 10;
    }
    
    if (group  >= 10 && group <= 20 && type === 'Regular') {
        discount = 0.05;
    }

    totalPrice = (group * pricePerPerson) * (1 - discount);
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

// Task 5.
function checkYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

// Task 6.
function printSum(startNumber, endNumber) {
    let sum = 0;
    let allNumbers = '';
    for(let i = startNumber; i <= endNumber; i++) {
        sum += i;
        allNumbers += `${i} `; 
    }

    console.log(allNumbers);
    console.log(`Sum: ${sum}`);
}

// Task 7.
function printTriangle(number) {
    for (let row = 1; row <= number; row++) {
        let rowSequence = '';

        for (let column = 0; column < row; column++) {
            rowSequence += `${row} `
        }

        console.log(rowSequence.trim())
    }
}

// Task 8.
function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} X ${i} = ${result}`)
    }
}

// Task 9.
function login(input){
    let username = input[0];
    let correctPassword = '';
    let tries = 0;

    let textAsArray = username.split('');

    for (let i = textAsArray.length - 1; i >=0; i--) {
        correctPassword += textAsArray[i];
    }

    for (let i = 1; i < input.length; i++) {
        let currentPassowrd = input[i];

        if (correctPassword === currentPassowrd) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            tries += 1;
            let message = tries === 4 ? `User ${username} blocked!` : `Incorrect password. Try again.`
            console.log(message);

            if (tries === 4) {
                return;
            }
        }
    }
}



login(['Acer', 'login', 'go', 'let me in', 'recA'])

