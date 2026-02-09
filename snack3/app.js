/* Snack 3
Crea una funzione eseguiOperazione
*/

// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

function somma(num1, num2){
  return num1 + num2;
}

const sottrazione = (num1, num2) => num1 - num2;

const eseguiOperazione = (num1, num2, operatore) => operatore(num1, num2);

console.log(eseguiOperazione(1, 9, somma));
console.log(eseguiOperazione(1, 9, sottrazione));