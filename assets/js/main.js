// richiesta
let promptString = prompt('inserisci parola palindroma');

//creo funzione
function palindroma() {
    // converte string in array
    let string =promptString.split('');

    // rovescia la string .creo una let
    let revString =string.reverse();

    // converto  string che era diventata array di nuovo in string. creo una let
    let newString = revString.join('');

    // condizione
    if (newString == promptString ) {

        prompt `la parola${promptString} è polindroma`;
    } else {
        prompt ` la parola ${promptString} non è polindroma`;

    }
}
palindroma();