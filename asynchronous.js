// asynchronous asynchronous program, jika kita menuliskan dua baris kode, kita dapat membuat baris kode kedua dieksekusi tanpa harus menunggu kode pada baris pertama selesai dieksekusi intinya secara bersamaan

//setTimeout
console.log('halo')
setTimeout(() => {
    console.log('hai')
}, 4000);
console.log('ada yang bisa di bantu ?')

//call back
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 1000);
}
orderCoffee(coffee => {
    console.log(coffee);
});

//promise
const eksekusiFunction = (resolve, reject) => {
    const jadi = true;
    console.log('kue lagi dibuat...')
    if (jadi) {
        resolve('kue dah jadi')
    } else {
        reject('kue gagal')
    }
}
const buatKue = () => {
    return new Promise(eksekusiFunction)
};
const kuePromise = buatKue();
console.log(kuePromise)

// consumsing promise
const bahan = {
    tepung: 900,
    air: 900
}

const proses = () => {
    return new Promise((jadi, noJadi) => {
        if (bahan.tepung >= 800 && bahan.air >= 100) {
            jadi('kuenya jadi tuan')
        } else {
            noJadi('bahanya kurang tuan')
        }
    })
}

const handlerSucces = jadiResolve => {
    console.log(jadiResolve)
}
const handleFail = noJadiReject => {
    console.log(noJadiReject)
}
proses().then(handlerSucces, handleFail)
//atau bisa kaya gini onRejected with Catch Method
proses()
    .then(handlerSucces)
    .catch(handleFail)


//chaining promise 
const coffee = {
    stock: {
        air: 1000,
        serbukCoffe: 9000
    },
    isMesinSibuk: false,
}

const mesinCek = () => {
    return new Promise((resole, reject) => {
        setTimeout(() => {
            if (!coffee.isMesinSibuk) {
                resole('mesin siap digunakan tuan')
            } else {
                reject('mesin tidak siap tuan')
            }
        }, 1000)
    })
}

const cekStok = () => {
    return new Promise((resolve, reject) => {
        coffee.isMesinSibuk = true;
        setTimeout(() => {
            if (coffee.stock.air >= 100 && coffee.stock.serbukCoffe >= 250) {
                resolve('stok coffe dan air ready')
            } else {
                reject('stok coffe dan air kosong')
            }
        }, 1000);
    });
}

const masakAer = () => {
    return new Promise((resolve, reject) => {
        console.log('masak air')
        setTimeout(() => {
            resolve('air dah panas tuan')
        }, 2000)
    })
}

const gilingBijiCoffe = () => {
    return new Promise((resolve, reject) => {
        console.log('giling biji....')
        setTimeout(() => {
            resolve('biji dah digiling tuan')
        }, 1000)
    })
}

const prosesCoffe = () => {
    console.log('kopi sedang dibuat');
    return new Promise((resole, reject) => {
        setTimeout(() => {
            resole('silahkan nikmati kopi anda tuan')
        }, 1500)
    })
}

function membuatKopi() {
    mesinCek()
        .then((value) => {
            console.log(value);
            return cekStok();
        })
        .then((value) => {
            console.log(value);
            const promiseAll = [masakAer(), gilingBijiCoffe()]
            return Promise.all(promiseAll);
        })
        .then((value) => {
            console.log(value);
            return prosesCoffe()
        })
        .then((value) => {
            console.log(value)
            coffee.isMesinSibuk = false;
        })
        .catch(rejectReason => {
            console.log(rejectReason);
            coffee.isMesinSibuk = false;
        })
}

membuatKopi()


// promise all seperti namanya ia akan menjalankan proses secara bersamaan dalam bentuk array

// const promises = [firstPromise(), secondPromise(), thirdPromise()];

// Promise.all(promises)
//     .then(resolvedValue => {
//         console.log(resolvedValue);
//     });
/* output
[ 'first promise', 'second promise', 'third promise' ]
*/


// Async-await

const ambilKopi = () => {
    return new Promise((resolve, reject) => {
        const seed = 100;
        setTimeout(() => {
            if (seed >= 90) {
                resolve('kopi didapatkan tuan')
            } else {
                reject('kopi gagal didapatkan')
            }
        }, 7000)
    })
}

async function makeCoffe() {
    try {
        const coffe = await ambilKopi();
        console.log(coffe)
    } catch (rejectReason) {
        console.log(rejectReason)
    }
}
makeCoffe()


// kuis
/**
 * Ini adalah program untuk mendapatkan nama user dari internet.
 * Terdapat dua fungsi yang sudah dibuat, berikut penjelasanya:
 *   - fetchingUserFromInternet:
 *     - fungsi ini digunakan untuk mendapatkan data user seolah-olah dari internet.
 *     - fungsi ini menerima dua argumen yakni callback, dan isOffline.
 *     - Argumen callback membawa dua nilai yakni error dan user:
 *       - error: NetworkError akan dibawa oleh callback bila isOffline bernilai true.
 *       - user: data user akan dibawa oleh callback bila isOffline bernilai false.
 *   - gettingUserName:
 *      - fungsi ini memanggil fungsi fetchingUserFromInternet dengan nilai isOffline: false untuk mendapatkan data user name dari internet.
 *      - fungsi ini harus mengembalikan nilai user.name, namun sulit karena menggunakan pola callback.
 *      - Maka dari itu, ubahlah fetchingUserFromInternet dari callback menjadi promise
 *      - Dengan begitu, Anda bisa memanfaatkan .then atau async/await untuk mendapatkan user.name.
 *
 * TODO: 1
 * - Ubahlah fungsi fetchingUserFromInternet dengan memanfaatkan Promise. Anda bisa menghapus implementasi callback.
 *
 * TODO: 2
 * - Ubahlah cara mengonsumsi fungsi fetchingUserFromInternet dari callback ke Promise.
 * - Tips:
 *   - Agar penulisan kode lebih bersih dan mudah dibaca, coba manfaatkan async/await
 *
 *
 * Notes:
 * - Jangan ubah struktur atau nilai dari objek user yang dibawa oleh callback sebelumnya.
 * - Tetap gunakan NetworkError untuk membawa nilai error pada Promise
 */

class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}

// TODO: 1
const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOffline) {
                reject(new NetworkError('Gagal mendapatkan data dari internet'));
            } else {
                resolve({ name: 'John', age: 18 });
            }
        }, 500);
    })

};


// TODO: 2
async function gettingUserName() {
    try {
        const user = await fetchingUserFromInternet();
        return user.name
    } catch (error) {
        return error.message
    }
};

/**
 * Abaikan kode di bawah ini
 */

module.exports = { fetchingUserFromInternet, gettingUserName, NetworkError };
