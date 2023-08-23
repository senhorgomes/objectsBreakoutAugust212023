//Easier way to access this bigObject?

const bigObject = {
  level: 1,
  floors: {
    basement: {
      level: -1,
    },
    main: {
      // level: 1,
      floors: {
        first: {
          level: 1,
        },
        second: {
          level: 2,
        }
      }
    }
  },
}

const mainFloorsOfBigObject = bigObject.floors.main

for(let floor in mainFloorsOfBigObject){
  console.log(mainFloorsOfBigObject[floor])
}


// const mainFloor = bigObject.floors.main
// console.log(mainFloor.floors.second.level)
// // console.log(bigObject.floors.main.floors.second.level)
// console.log(bigObject.floors.main.level)
// console.log(bigObject["floors"]["main"]["floors"]["second"]["level"])





// const mainFloor = bigObject.floors.main;
// console.log(mainFloor.floors.second.level)
// console.log(bigObject.floors.main.level)
// console.log(mainFloor.level)