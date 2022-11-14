function nama() {
    console.log("nama ku rofianan")
}
nama();

function x(a, b) {
    return a * b;
}
let resu = x(4, 6)
console.log(`hasilnya ${resu}`)

function say(halo, nama) {
    if (halo === "inggris") {
        console.log(`hello ${nama}`)
    } else if (halo == "jepun") {
        console.log(`konichiwa ${nama}`)
    } else if (halo === "french") {
        console.log(`banjour ${nama}`)
    } else {
        console.log(`selamat pagi ${nama}`)
    }

}
say("jepun", "Rofianan");

function kpop(name, song) {
    if (song == "BTS") {
        return `love ur self - ${name}`
    } else if (song === "RV") {
        return `feel my rythm - ${name}`
    } else {
        return `bang jono - ${name}`
    }
}
let lagu = kpop("BTS", "BTS")
console.log(lagu)

const pop = function (name, song) {
    if (song == "BTS") {
        return "love ur self" + name + "!";
    } else if (song === "RV") {
        return "feel my rythm " + name + '!'
    } else {
        return `bang jono - ` + name + '!'
    }
}
console.log(pop('Red Velvet', 'RV'))

// default function parameters B =2 adalah default parameters
function exNumber(A, B = 2) {
    let result = A * B;
    console.log(`${A}^${B} = ${result}`)
}
exNumber(2)

// rest parameter

function sum(...number) {
    let result = 0;
    for (let numbers of number) {
        result += numbers
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5, 6))

// array function *pada parameters kita bisa menghapus tanda kurung ()
let cars = namaCars => {
    console.log(namaCars)
}
cars(`ferary`)
// dan jika ingin mengmbalikan nilai tidak perlu return
const xx = (c, d) => c * d;
console.log(xx(5, 1))

// kuis
console.log("kuis")
/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */

function minimal(a, b) {

    if (a < b) {
        return a;
    } else if (b < a) {
        return b;
    } else {
        a == b;
        return a;
    }
}
const c = minimal(4, 1)
console.log(c)

function power(a, b) {
    let d = a ** b;
    console.log(d)
    return d;
}
power(7, 3)

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));