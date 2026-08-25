// Task 01.
function modifyArray(input) {
    let originalSum = 0;
    let modifiedSum = 0;

  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i];
    originalSum += currentElement;

    if (currentElement % 2 === 0) {
      input[i] = currentElement + i;
    } else {
      input[i] = currentElement - i;
    }

    modifiedSum += input[i];
  }

  console.log(`[ ${input.join(", ")} ]`);
  console.log(originalSum);
  console.log(modifiedSum);
}

// modifyArray([5, 15, 23, 56, 35]);

// Task 02.
function findCommonElements(arr1, arr2) {
    for (let element1 of arr1) {
        for (let element2 of arr2) {
            if (element1 === element2) {
                console.log(element1);
            }
        }
    }
}

// findCommonElements(
// ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], 
// ['s', 'o', 'c', 'i', 'a', 'l']);