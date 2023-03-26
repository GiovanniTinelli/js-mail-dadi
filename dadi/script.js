/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

1  faccio const per numero giocatore e computer in una const da 1 a 6
2  crare la condizione 
3  stampo vincitore il vincitore
 */

const giocatore = Math.ceil(Math.random() * 6);
const computer = Math.ceil(Math.random() * 6);

console.log(giocatore, computer);

let message;

if(giocatore > computer){
  message = 'Vince giocatore'
}else if(giocatore < computer ){
  message = 'Vince computer'
}else{
  message = 'PARI!'
}

console.log(message);
//STAMPO RISULTATO
document.getElementById('vincitore').innerHTML = message
