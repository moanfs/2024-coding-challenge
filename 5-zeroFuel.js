// day 5/365 coding challenge 2024
// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     // TODO
//     return distanceToPump / mpg <= fuelLeft;
//   };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     // TODO
//     return fuelLeft * mpg >= distanceToPump;
//   };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump;


console.log(zeroFuel(50, 25, 2));