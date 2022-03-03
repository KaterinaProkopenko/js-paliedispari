/* Palindroma */
function reverseString(str) {

    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

const userWord = prompt('Inserisci una parola');

const result = reverseString(userWord);
console.log(result);

if (result === userWord) {
    console.log(`La parola "${userWord}" è palindroma`);
} else {
    console.log(`La parola "${userWord}" non è palindroma`);
}


/* Pari e Dispari */

const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(userNumber);

const computerNumber = Math.floor((Math.random() * 5) + 1);
console.log(computerNumber);

const sum = userNumber + computerNumber;
console.log(sum);

function isEven(number) {
    if(number % 2 == 0) {
        console.log('Il numero è pari: ho vinto io!');
    } else {
        console.log('Il numero è dispari: hai vinto!');
    }
};

const resultSum = isEven(sum);
