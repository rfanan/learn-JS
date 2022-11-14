import _ from 'lodash';

const myArray = [1, 2, 3, 4, 5];
let sum = 0

for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
console.log(sum)

// dengan lodash
const sum1 = _.sum(myArray);
console.log(sum1);
/* simple bukan! */