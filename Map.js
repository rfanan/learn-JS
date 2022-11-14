const map = new Map(
    [
        [
            'A', 'ini string'
        ],
        [
            1, 'ini number'
        ],
        [
            true, true
        ]

    ]
)
console.log(map)

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"],
    ["soul", "korea"]
]);

console.log(capital.size);
console.log(capital.get("London"));
// kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));


/* TODO
* 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
*    - Memiliki properti bernama "name"
*       - Bertipe data string
*       - Bernilai apa pun, asalkan tidak string kosong atau null.
*    - Memiliki properti bernama "city"
*       - Bertipe data string
*       - Bernilai apa pun, asalkan tidak string kosong atau null.
*    - Memiliki properti "favorite drink"
*       - Bertipe data string
*       - Bernilai apa pun, asalkan tidak string kosong atau null.
*    - Memiliki properti "favorite food"
*       - Bertipe data string
*       - Bernilai apa pun, asalkan tidak string kosong atau null.
*    - Memiliki properti "isVegan"
*       - Bertipe data boolean
*       - Bernilai boolean apa pun.
*
* 2. Buatlah variabel bernama name.
*    Kemudian isi dengan nilai name dari properti object restaurant
* 3. Buatlah variabel bernama favoriteDrink.
*    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
*/

const restaurant = {
    name: "A N D",
    city: "Cilegon",
    "favorite drink": "yakult",
    "favorite food": "nasi",
    isVegan: true
}

const name = restaurant.name
const favoriteDrink = restaurant["favorite drink"]
console.log(name, favoriteDrink)
/* TODO:
* Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
*   - Array tersebut menampung bilangan genap dari 1 hingga 100
*
* Catatan:
*   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
*/

let evenNumber = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        evenNumber.push(i)
    }
}
console.log(evenNumber)

/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */
const priceInJPY = 5000;
let currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500],
]);

const priceInIDR = priceInJPY * currency.get("JPY");
console.log(priceInIDR)


