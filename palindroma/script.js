
//funzione che controlla se una parola inserita dall'utente come parametro è palindroma o no

function isPalindrome(parola){

    //variabile che conterrà la parola scelta dall'utente ma al contrario
    let revParola = "";

    //variabile che conterrà il risultato della funzione per poi utilizzarla nel console log
    let output = '';

    
    //impostando la lunghezza della parola a - 1 come numero di iterazioni per arrivare a 0, creeremo la parola in modo corretto in quanto accederemo anche alla posizione 0 (che contiene la prima lettera)
    for (let i = parola.length - 1; i >= 0; i--) {

        //in questo modo, partendo dalla fine, aggiungiamo lettera per lettera alla nuova variabile. 
        revParola += parola[i];

    }


    //se la parola è identica alla sua versione, ma al contrario, sarà per forza palindroma
    if(parola === revParola){
        output = `La parola ${parola} è palindroma`;

    }else{
        output = `La parola ${parola} non è palindroma`;

    }
    //restituiamo la variabile contenente la stringa di conferma
    return output;
    
}


// Parola scelta dall'utente
let userParola = prompt('Inserisci una parola a tua scelta');

//l'output della funzione in questo caso viene visualizzato tramite console log in quanto restituisce la variabile "output" contenente la stringa
console.log(isPalindrome(userParola));
