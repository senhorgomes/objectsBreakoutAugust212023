const arrayOfRandomTypes = [0, 1, "pizza", 3, 4, false, 7, 10, 14, "strings", 18, true, 2, "another string"];
// Challenge is to loop through the array
const counterOfTypes = {
    // "strings": 3
    // "strings": {
    // numberOfOccurances: 3
    // values: ["pizza", "strings", "another string"]
    // }
}
// for of loop to console log each element in the array
for (let element of arrayOfRandomTypes) {
    // Create an object that counts how many times a certain type occurs
    // console log the type of each element
    // console.log(typeof element)
    // Create a key value pair
    // The key will be the data type, and the value will be the number of occurances.
    // Assign each data type with the value 1
    let dataType = typeof element //string
    // Check if the key exists, if it doesnt, assign the value to one, else add one
    if (counterOfTypes[dataType]) {
        // How do we add one to an existing key value pair?
        // counterOfTypes[dataType] += 1
        counterOfTypes[dataType].numberOfOccurances += 1;
        counterOfTypes[dataType].values.push(element);
    } else {
        // counterOfTypes[dataType] = 1
        counterOfTypes[dataType] = {
            numberOfOccurances: 1,
            values: [element]
        }
    }
}

console.log(counterOfTypes)