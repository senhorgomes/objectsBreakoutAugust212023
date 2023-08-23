// Create a copy of the blueTshirtObject and then change the color of the shirt to Green
const blueTshirtObject = {
  size: "Large",
  color: "Blue"
}

// const greenTshirtObject = {...blueTshirtObject};

// console.log(greenTshirtObject)

// greenTshirtObject.color = "Green"
// console.log("After changing the color:", greenTshirtObject)

// console.log(blueTshirtObject)


// for... in, for... of


const animals = {
  1: "Cat",
  2: "Bird",
  3: "Dog",
  4: "Fish",
  5: {
    key: "value"
  }
}

for(const element of Object.values(animals)){
  console.log(element);
}
//  console.log(Object.values(animals))