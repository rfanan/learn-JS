
let user = {
    nama: "Rofianan",
    age: 24,
    hobi: "futsal",
    isJedi: true,
    "rumah": "cilegon"
}

console.log(user)
console.log(`halo nama saya ${user.nama} umur saya ${user.age} saya memiliki hobi ${user.hobi} dan saya tinggal di ${user["rumah"]}`)

let tesla = {
    owner: "Elon musk",
    produk: "spaceship",
    color: "red",
    price: 25
}

tesla.owner = "Rofianan"
tesla["price"] = 89
tesla.gf = "none"

delete tesla.color;

console.log(tesla)
