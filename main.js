var prezzo = 0.21;
var km = 1;

// domandare età e numero di km
var eta = prompt("Quanti anni hai?");
var distanza = prompt("Quanti km devi percorrere?");

// cpu calcola prezzo del viaggio

var totale = prezzo * distanza;


// cpu applica sconti

if (eta <= 18) {
  totale = (prezzo * distanza) - (totale * 20 / 100);
  document.write("Il prezzo è " + totale);
} else if (eta >= 65) {
  totale = (prezzo * distanza) - (totale * 40 / 100);
  document.write("Il prezzo è " + totale);
} else {
  document.write("Il prezzo è " + totale);
}



// si potevano usare anche tre if sostituendo l'ultimo con:

// if (eta > 18 && eta < 65) {
// document.write("Il prezzo è " + totale);
// }
