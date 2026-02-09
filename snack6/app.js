/* Snack 6
Crea un contatore automatico con setInterval
*/

// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

const creaContatoreAutomatico = (intervallo) => {
  let contatore = 0;
  return setInterval(() => {
    contatore++;
    console.log(contatore);
  }, intervallo);
}

//creaContatoreAutomatico(1000);