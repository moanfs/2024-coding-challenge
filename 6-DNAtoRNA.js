// day 5/366 coding challenge 2024
// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// function DNAtoRNA(dna) {
//     let rna = '';
//     for(let i = 0; i < dna.length; i++){
//         // if(dna[i] === 'T'){
//         //     rna += 'U';
//         // }else{
//         //     rna += dna[i];
//         // }
//         rna += dna[i] === 'T' ? 'U' : dna[i];
//     }
//     return rna;
//   }

// function DNAtoRNA(dna) {
//     return dna.split('').map((el) => el === 'T' ? 'U' : el).join('');
// }

// const DNAtoRNA = (kata) => kata.split('').map((el) => el === 'T' ? 'U' : el).join('')

// const  DNAtoRNA = (dna) => dna.replace(/T/g, 'U')

const  DNAtoRNA = (dna) => dna.replaceAll('T', 'U')



console.log(DNAtoRNA("GCAT"))