// try {
//     console.log("Awal blok try");   // (1)
//     errorCode;                      // (2)
//     console.log("Akhir blok try");  // (3)
// } catch (error) {
//     console.log("Terjadi error!");  // (4)
//     console.log(error.name)
// }

// try {
//     console.log("Awal blok try");
//     console.log("Akhir blok try");
// } catch (error) {
//     console.log("Baris ini diabaikan");
// } finally {
//     console.log("Akan tetap dieksekusi");
// }


// //throwing error
// let json = '{ "name": "Yoda", "age": 20 }';

// try {
//     let user = JSON.parse(json);

//     console.log(user.name);

//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

// //throw. melemparkan error pada program, sehingga eksekusi code akan masuk pada blok catch dan menampilkan pesan error

// try {
//     let user = JSON.parse(json);

//     if (!user.hobi) {
//         throw new SyntaxError("'hobi' is required.");
//     }
//     console.log(user.hobi);
//     console.log(user.name);
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }

// //
// try {
//     let user = JSON.parse(json);
//     if (!user.name) {
//         throw new SyntaxError("'name' is required.");
//     }
//     errorCode;
//     console.log(user.name); // Yoda
//     console.log(user.age);  // 20

// } catch (error) {
//     if (error instanceof SyntaxError) {
//         console.log(`JSON Error: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//         console.log(error.message);
//     } else {
//         console.log(error.stack);
//     }
// }

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// let n = '{ "age": 30 }';

// try {
//     let user = JSON.parse(n);

//     if (!user.name) {
//         throw new ValidationError("'name' is required.");
//     }
//     if (!user.age) {
//         throw new ValidationError("'age' is required.");
//     }

//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     if (error instanceof SyntaxError) {
//         console.log(`JSON Syntax Error: ${error.message}`);
//     } else if (error instanceof ValidationError) {
//         console.log(`Invalid data: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//         console.log(error.message);
//     } else {
//         console.log(error.stack);
//     }
// }

//kuis
/**
 * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
 * mendeteksi jenis segitiga berdasarkan nilai argumen.
 * Contoh:
 *  - 1, 1, 1 -> Segitiga sama sisi
 *  - 4, 4, 2 -> Segitiga sama kaki
 *  - 3, 4, 6 -> Segitiga sembarang
 *
 * Namun fungsi detectTriangle belum berjalan dengan baik karena
 * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
 * Contoh:
 *  - 1, false, 1 -> Segitiga sembarang
 *  - 'a', 3, 5 -> Segitiga sembarang
 *  - 12, 2, null -> Segitiga sembarang
 * Kondisi yang diharapkan:
 *  - 1, false, 1 -> Argumen kedua harus number
 *  - 'a', 3, 5 -> Argumen pertama harus number
 *  - 12, 2, null -> Argumen ketiga harus number
 *
 *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
 *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
 *
 * TODO 1:
 * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
 *   - Turunan dari class Error
 *   - Memiliki constructor(message)
 *   - this.name harus bernilai "ValidationError"
 *
 * TODO 2:
 * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
 *   - Menerima 3 argumen
 *   - Bila argumen pertama bukan number:
 *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
 *   - Bila argumen kedua bukan number:
 *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
 *   - Bila argumen ketiga bukan number:
 *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
 *
 * TODO 3:
 * - Panggil fungsi validateNumberInput di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
 *   - pastikan Anda memanggil validateNumberInput menggunakan try .. catch.
 *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateNumberInput.
 */


// TODO 1
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
// TODO 2
const validateNumberInput = (a, b, c) => {
    if (typeof a != "number") {
        throw new ValidationError("Argumen pertama harus number");
    } else if (typeof b != "number") {
        throw new ValidationError("Argumen kedua harus number");
    } else if (typeof c != "number") {
        throw new ValidationError("Argumen ketiga harus number");
    }
};

const detectTriangle = (a, b, c) => {
    // TODO 3
    try {
        validateNumberInput(a, b, c);
    } catch (error) {
        return (error.message);
    }
    if (a === b && b === c) {
        return 'Segitiga sama sisi';
    }

    if (a === b || a === c || b === c) {
        return 'Segitiga sama kaki';
    }

    return 'Segitiga sembarang';
};

/**
 * Jangan hapus kode di bawah ini
 */
module.exports = { ValidationError, validateNumberInput, detectTriangle };

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyCustomError("This is an error");
} catch (e) {
    console.log(e.message);
}