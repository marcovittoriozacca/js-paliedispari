//funzione che genera un numero randomico
function randomNumGen(min, max){
    return Math.floor (Math.random()*(max-min + 1)+min);
}

//funzione che effettua la somma di due numeri
function sum(num1, num2){
    return num1 + num2;
}

//funzione che controlla se un numero è pari o dispari
function oddOrEven(num){
    
    if (num % 2 !== 0){
        return 'dispari';
    }else{
       return 'pari';
    }
    
}

//scelte tra pari e dispari per utente e cpu
let userChoice = '';
let cpuChoice = '';


//numeri utente e cpu
let userNum;

//la cpu avrà un numero generato randomicamente tra 1 e 5
let cpuNum = randomNumGen(1,5);
console.log(cpuNum);

//variabile per la somma dei due numeri
let totalSum = 0;

//controllo per l'utente - potrà inserire soltanto pari o dispari nel prompt
do{
    userChoice = prompt('Pari o dispari?').toLowerCase();
    
}while( !isNaN(userChoice) || (userChoice !='pari' && userChoice !='dispari') )

//controllo per l'utente - potrà inserire soltanto numeri compresi tra 1 e 5
do{
    userNum = parseInt(prompt('Inserisci un numero da 1 a 5'));
    
}while( isNaN(userNum) || (userNum < 1 || userNum > 5))


//se l'utente sceglie pari, la cpu diventerà dispari e viceversa
if(userChoice == 'pari'){
    cpuChoice = 'dispari';
}else{
    cpuChoice = 'pari';
}

//output delle scelte
console.log(`L'utente ha scelto ${userChoice}`);
console.log(`La cpu sarà quindi ${cpuChoice}`);

//somma dei numeri scelti dall'utente e dalla CPU + output 
totalSum = sum(userNum, cpuNum)
console.log(`La somma dei numeri è ${totalSum}.`);

//se la somma dei numeri restituisce una stringa pari o dispari ed è uguale a quella dell'utente allora ha vinto, altrimenti vince la CPU
if (oddOrEven(totalSum) == userChoice){
    console.log(`Vince l'utente in quanto ${totalSum} è ${oddOrEven(totalSum)}`);
}else{
    console.log(`Vince la CPU in quanto ${totalSum} è ${oddOrEven(totalSum)}`);
}
