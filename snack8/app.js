/* Snack 8
Crea una funzione che simula un conto alla rovescia
*/

// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

function contoAllaRovescia(num){
  const timer = setInterval(() => {
    if(num > 0){
      console.log(num--);
    } else {
      console.log("Tempo scaduto!")
      clearInterval(timer);
    }
    }, 1000);
  }

contoAllaRovescia(5);