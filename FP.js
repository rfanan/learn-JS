//functional programming


const myName = ['rofi', 'rudi', 'ronan', 'puan'];
const myLastName = [];

for (let i = 0; i < myName.length; i++) {
    myLastName.push(`${myName[i]} anan`)
}
console.log(myLastName)

//deklaratif style
const name = ['rofi', 'rudi', 'puan', 'ronan']
const myName1 = name.map((nama) => `${nama} anan`)
console.log(myName1)


//array map
const animal = ['gajah', 'kangguru', 'singa'].map((nAnimal) => { return `${nAnimal} haha` });
console.log(animal)


//array filter
const array = ['hao', null, 0, 'halo', 'yes'].filter((newarray) => Boolean(newarray));
//booelan untuk menentukan apakah item array lolos atau tidaknya penyaringan/filter
console.log(array)


const siswa = [
    {
        nama: 'fazan',
        nilai: 80,
    },
    {
        nama: 'Jhon Chena',
        nilai: 87,
    },
    {
        nama: 'Naruto',
        nilai: 60,
    },
    {
        nama: 'Jiraya',
        nilai: 23,
    }
];

const arrayKu = siswa.filter((lastNilai) => lastNilai.nilai > 70);
console.log(arrayKu);

//reduce array

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const genap = angka.some((nilaiGenap) => nilaiGenap % 2 === 0)
console.log(genap)


//array find

const find = siswa.find(cari => cari.nama === 'Naruto')
console.log(find)

/**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */

const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

// TODO
const greatAuthors = books.filter((book) => book.sales > 1000000).map((book) => { return `${book.author} adalah penulis buku ${book.title} yang sangat hebat` })
console.log(greatAuthors)


/**
 * Jangan hapus kode di bawah ini
 */

//   module.exports = { books, greatAuthors };
