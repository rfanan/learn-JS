// //dengan require kita bisa memanggil object yang sudah di export sebelumnya (gaya node.js)
const coffeeStock = require('./export');

const makeCoffe = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log('kopi kenangan bersama mu telah di buat')
    } else {
        console.log('nangis')
    }

}
makeCoffe('robusta', 120)

// // jika modul export lebih dari satu bisa menggunakan destructuring
// const { param, param2 } = require('/..');


// import dengan gaya ES6 Module
import coffeeStock from './export.js';

const kopi = stokKopi => {
    for (const type in stokKopi) {
        console.log(type)
    }
}
console.log(coffeeStock)

//import lebih dari 1
import { hahah, coffeeStock } from './export';