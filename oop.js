//class OOP

// OOP function dengan prototype
function mail() {
    this.from = "rofianan@gmail.com";
};

mail.prototype.sendMessage = function (msg, to) {
    console.log(`you send ${msg} ke ${to} from ${this.from}`);
};
const mail1 = new mail()
mail1.sendMessage('halo', 'anan@gmail.com')



// function tanpa  prototype
function Email() {
    this.from = 'rofianan@gmail.com',
        this.sendMessage = function (msg, to) {
            console.log(`you send ${msg} ke ${to} from ${this.from}`);
        }
}
const Email1 = new Email();
Email1.sendMessage('halo', 'anan@gmail.com')
// lebih di anjurkan menggunakan prototype karena dapat menghemat alokasi memory


// OOP dengan syintak class
class mailBaru {
    constructor() {
        this.from = "Rofianan@gmail.com"
    }
    sendMessage = function (msg, to) {
        console.log(`you send ${msg} ke ${to} from ${this.from}`)
    };
}

const newMail = new mailBaru();
newMail.sendMessage('Haloooo', 'anan@gmail.com')

//property dan method
//cara 1
class pesan {
    constructor() {
        this.from = 'rofianan@gmail.com';
        this.kontak = [];
    }
    kirimPesan(psn, ke) {
        console.log(`kamu ngirim ${psn} ke ${ke} dari ${this.from}`);
        this.kontak.push(ke); //menyimpan kontak baru
    }
}

const pesanBaru = new pesan();
pesanBaru.kirimPesan('haloo', 'jj@gmail.com')

//cara 2

function pesann() {
    this.pesan = 'hello'
    this.kontakk = [];
};

pesann.prototype.sendMessage = function (psn, to) {
    console.log(`ini pesan ${psn} untuk ${to} dari ${this.pesan}`)
    this.kontakk.push(to);
}

const pesannBaru = new pesann()
pesannBaru.sendMessage('hallo', 'halooo')

/*
 Dalam OOP sendiri, properti dibagi menjadi 2:
 Internal interface : method dan property yang dapat diakses oleh method lain namun tidak bisa diambil/dijalankan di luar kelas tersebut.
 External interface : method dan property yang dapat diakses di luar kelas itu sendiri.

 Sedangkan di dalam JavaScript sendiri terdapat 2 jenis akses identifier untuk sebuah field:
 Public : dapat diakses dari mana pun.
 Private : hanya dapat diakses dari dalam kelas itu sendiri. */

// 4 pilar oop encapsulation abstarction inheritance polymorphism
// 1 encapsulation. Enkapsulasi adalah kondisi di mana attribute atau method di dalam class dibungkus dan bersifat privat. Artinya objek lain tidak bisa mengakses atau mengubah nilai dari property secara langsung.

class name {
    constructor(author) {
        this.fristName = [];
        this.from = author;
    }

    sendMessage = function (alias, tgl) {
        console.log('nama alias ku:', alias, 'tanggal lahirku :', tgl, this.fristName);
        this.fristName.push(tgl);
    }

    showIdentitasKu() {
        return this.fristName;
    }
}

// 2 inheritance mewarisi class sebelumnya 'extends'
class namamu extends name {
    constructor(author) {
        super(author)
        this.yourName = 'rofianan'
        this.isHandsome = false
    }

    myProfile() {
        return `my name ${this.yourName}, handsome ? ${this.isHandsome ? 'ya' : 'no'}`;
    }
}

const fullName = new namamu('Rofianan')
console.log(fullName.myProfile());

// [1] list of abstractions
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
});

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
});

// [2] crate object composition
const personalEnterprise = (from, message, store) => {
    // [3] attributes
    const self = {
        from,
        message,
        store
    };
    // [4] method
    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log('Catalog has created: ', self.store)
    });

    // [5] create object composition
    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pe1.createCatalog(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih

//quis
/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */


// TODO
class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }

}

class Rabbit extends Animal {
    constructor(name, age, isMammal) {
        super(name, age, isMammal);
        this.isMammal = true;
    }
    eat() {
        return (`${this.name} sedang makan!`)
    }
}

class Eagle extends Animal {
    constructor(name, age, isMammal) {
        super(name, age, isMammal)
        this.isMammal = false;
    }
    fly() {
        return (`${this.name} sedang terbang!`)
    }

}

const myRabbit = new Rabbit('Labi', 2);
console.log(myRabbit.eat());

const myEagle = new Eagle('Elo', 4)
console.log(myEagle.fly())


/**
 * Jangan hapus kode di bawah ini
 */

module.exports = {
    Animal, Rabbit, Eagle, myRabbit, myEagle,
};
