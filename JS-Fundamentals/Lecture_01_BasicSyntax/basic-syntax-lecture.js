// #Task 1.
function multipleByTwo(number) {
    result = number * 2;
    console.log(result);
}

multipleByTwo(2);

// #Task 2.
function studentInfo(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

studentInfo('John', 20, 5.5555);

// #Task 3.
function exellentGrade(grade) {
    if (grade >= 5.50) {
        console.log('Excellent');
    } else {
        console.log('Not excellent');
    }
}

exellentGrade(5.50);

// #Task 4.
function solve(country) {
    switch (country) {
        case 'England':
        case 'USA':
            console.log("English");
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log('Spanish')
            break;
        default:
            console.log('unknown');
    }
}

solve('England');

// #Task 5.
function printMonth(month) {
    if (month < 1 || month > 12) {
        console.log('Error!');
        return;
    }

    switch (month) {
        case 1:
            console.log('January');
            break;
        case 2:
            console.log('February');
            break;
        case 3:
            console.log('March');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
            console.log('May');
            break;
        case 6:
            console.log('June');
            break;
        case 7:
            console.log('July');
            break;
        case 8:
            console.log('August');
            break;
        case 9:
            console.log('September');
            break;
        case 10:
            console.log('October');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('December');
            break;
    }
}

printMonth(2);
printMonth(17);

// #Task 6.
function calculatePrice(typeOfDay, age) {
    let ticketPrice = 0;

    switch (typeOfDay) {
        case 'Weekday':
            if (0 <= age && age <= 18) {
                ticketPrice = 12;
            } else if (18 < age && age <= 64) {
                ticketPrice = 18;
            } else if (64 < age && age <= 122) {
                ticketPrice = 12;
            }
            break;
        case 'Weekend':
            if (0 <= age && age <= 18) {
                ticketPrice = 15;
            } else if (18 < age && age <= 64) {
                ticketPrice = 20;
            } else if (64 < age && age <= 122) {
                ticketPrice = 15;
            }
            //TODO:
            break;
        case 'Holiday':
            if (0 <= age && age <= 18) {
                ticketPrice = 5;
            } else if (18 < age && age <= 64) {
                ticketPrice = 12;
            } else if (64 < age && age <= 122) {
                ticketPrice = 10;
            }
            break;
        default:
            console.log('Error!');
            break;
    }

    if (ticketPrice != 0) {
        console.log(`${ticketPrice}$`);
    } else {
        console.log('Error!')
    }
}

calculatePrice('Weekday', 42);

// #Task 7.
function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

printNumbers();

// #Task 8.
function divisibleBy3() {
    for (let i = 3; i <= 100; i += 3) {
        console.log(i);
    }
}

divisibleBy3();

// #Task 9.
function printNumbersFromNTo1(start) {
    for (let i = start; i >= 1; i--) {
        console.log(i)
    }
}

// #Task 10.
function printFromNToM(start, end) {
    while (start >= end) {
        console.log(start--);
    }
}

// #Task 11.
function sumOddNumbers(count) {
    let number = 1;
    let sum = 0;

    for (let i = 0; i < count; i++) {
        sum += number
        console.log(number);
        number += 2;
    }

    console.log(`Sum: ${sum}`);
}

sumOddNumbers(5);