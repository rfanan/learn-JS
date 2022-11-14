let namaKu = "Rofianan";
let nilaiInggris = 100
let nilaiMtk = 90

// kondisi IF
if (namaKu) {
    console.log(`halo namku, ${namaKu}`);
} else {
    console.log(`bukan namaku`)
}

if (nilaiInggris > nilaiMtk) {
    console.log(`lulus`)
} else {
    console.log(`gak lulus`)
}

// swicth case statement
let bahasa = "indo"
let say = null;

switch (bahasa) {
    case "jepun":
        say = "koniciwa";
        break;
    case "indo":
        say = "apakabs";
        break;
    case "enggres":
        say = "hello eberione";
        break;
    default:
        say = "Hey Yo"
}
console.log(say)

// looping for
for (let i = 0; i < 6; i++) {
    console.log(i)
}

// for..of..
let katakan = ['hello', 'anyong', 'konichiwa', 'banjour', 'assalmualaikum']
for (okeKatakan of katakan) {
    console.log(okeKatakan)
}

// while
let i = 0
let k = 0
while (i < 5) {
    console.log(i);
    i++
}

console.log("")

// do while
do {
    console.log(k);
    k++
} while (k < 5)


// infinite loop :v
// while (i <= 5) {
//     console.log(i)
// }
