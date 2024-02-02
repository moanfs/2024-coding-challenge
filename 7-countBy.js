// day 7/366 coding challenge 2024
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

// function countBy(x, n) {
//     let z = [];
//     for (let i=1;i<= n;i++) {
//         z.push(i*x)
//     }
//     return z;
//   }

// function countBy(x, n) {
//     return [...Array(n)].map((el,i) => ((i+1)*x))
// } 

const countBy = (x, n) =>  [...Array(n)].map((el,i) => ((i+1)*x))



  console.log(countBy(2,5))