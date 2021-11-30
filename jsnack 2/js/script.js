// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

function isEven(num) {
    if (num % 2 == 0){
        return true;
    } else {
        return false;
    }
}

const number = [];

const arrayDim = parseInt(prompt('Quanti numeri deve contenere la lista?'));
let sum = 0;

for (let i = 0; i < arrayDim; i++) {
    number.push(i+1);
    if (!isEven(i)) {
        sum += (i+1);
    }
}

console.log(number);
console.log(sum);
