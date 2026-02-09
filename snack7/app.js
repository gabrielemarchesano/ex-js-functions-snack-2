/* Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
*/

//Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

const eseguiEferma = (messaggio, start, stop) => {  

  setTimeout(() => {
    const stampaMessaggio = setInterval(() => {
        console.log(messaggio);
      }, 1000);

    setTimeout(() => {
      clearInterval(stampaMessaggio)
    }, stop);
  }, start);

}


eseguiEferma("ciao", 3000, 10000);