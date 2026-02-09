/* Snack 1
Crea una funzione che somma due numeri.
*/

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(num1, num2){
  return num1 + num2;
}
console.log(somma(1, 2));

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const sommaAnonima = function(num1, num2){
  return num1 + num2
}

console.log(sommaAnonima(1, 1))

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
const sommaArrow = (num1, num2) => { return num1 + num2 };

console.log(sommaArrow(3, 3));