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
    console.log(`La parola "${userWord}" non è palidroma`);
}