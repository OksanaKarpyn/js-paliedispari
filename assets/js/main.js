// // richiesta
// let promptString = prompt('inserisci parola palindroma');

// //creo funzione
// function palindroma() {
//     // converte string in array
//     let string = promptString.split('');

//     // rovescia la string .creo una let
//     let revString = string.reverse();

//     // converto  string che era diventata array di nuovo in string. creo una let
//     let newString = revString.join('');

//     // condizione
//     if (newString == promptString) {

//         prompt `la parola${promptString} è palindroma`;
//     } else {
//         prompt ` la parola ${promptString} non è palindroma`;

//     }
// }
// palindroma();






// ----pari dispari-----
let number1;
let number2;
let output = document.querySelector('.out');
let select = document.querySelector('#select');
// function calcolo
function sommaNumeri(a, b) {

    // output.innerHTML=`${a + b}`;

    return `${a + b}`
}


let btn = document.querySelector('.btn').addEventListener('click', function () {
    // prende valore che incesisce utente
    number1 = parseInt(document.querySelector('#number1').value);
    number2 = numRandom(1, 5);
    // entra dentro funzione e fa calcolo
    let somma = sommaNumeri(number1, number2)
    // dopo calcolo asegna il valore alla funzione tramite return
    // ouput dove voglio stampare e assegno funzione con valore
    output.innerHTML = `${somma}`
    select = select.value;
    console.log(select);
    if (somma % 2 == 0 && select == 'pari') {
        output.innerHTML = `${somma} ${select} e pari hai vinto`

    } else if (somma % 2 == 0 && select == 'dispari') {
        output.innerHTML = `${somma} ${select}e pari hai perso`

    } else if (somma % 2 != 0 && select == 'dispari') {
        output.innerHTML = `${somma} ${select}e dispari hai vinto`

    } else if (somma % 2 != 0 && select == 'pari') {
        output.innerHTML = `${somma} ${select}e dispari hai perso`
    }


})












// random Function
function numRandom(min, max) {
    return Math.floor(Math.random() * max) + min;
}