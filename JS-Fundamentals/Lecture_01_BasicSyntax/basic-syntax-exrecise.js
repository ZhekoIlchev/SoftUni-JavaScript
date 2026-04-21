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