// Consegna
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// 1) stampo i numeri da 1 a 100
// let n = 1;
// for (n; n <= 100; n++){
//     console.log("nuovo numero:"+n)
// }



// 2) i numeri che sono multipli di tre stampo fizz (operatore modulo: % = formula: n % 3 == 0(vuol dire se n è multiplo di tre il risultato dell'operazione sarà 0))
// let n = 1;
// for (n; n <= 100; n++){
//     if (n % 3 == 0){
//         console.log("fizz");
//     } else {
//         console.log(n);
//     }
// }



// 3) i numeri che sono multipli di cinque stampo buzz (operatore modulo: % formula: n % 5 == 0)
// let n = 1;
// for (n; n <= 100; n++){
//     if (n % 3 == 0){
//         console.log("fizz");
//     } else if (n % 5 == 0) {
//         console.log("buzz")
//     } else {
//         console.log(n);
//     }
// }



// 4) i numeri che sono sia multipli di tre che di cinque stampo fizzbuzz (operatore modulo: % formula: n % 3 == 0 && n % 5 == 0)
// let n = 1;
// for (n; n <= 100; n++){
//     if (n % 3 == 0 && n % 5 == 0) {
//         console.log("fizzbuzz");
//     } else if (n % 3 == 0) {
//         console.log("fizz");
//     } else if (n % 5 == 0) {
//         console.log("buzz");
//     }  else {
//         console.log(n);
//     }
// }



// BONUS 1:
// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// let n = 1;
// for (n; n <= 100; n++){
//     if (n % 3 == 0 && n % 5 == 0) {
//         let n = "fizzbuzz"
//         let printN = document.getElementById("fizzbuzz-container");
//         printN.innerHTML = printN.innerHTML + `
//         <p>${n}</p>
//         `;
//     } else if (n % 3 == 0) {
//         let n = "fizz"
//         let printN = document.getElementById("fizzbuzz-container");
//         printN.innerHTML = printN.innerHTML + `
//         <p>${n}</p>
//         `;
//     } else if (n % 5 == 0) {
//         let n = "buzz"
//         let printN = document.getElementById("fizzbuzz-container");
//         printN.innerHTML = printN.innerHTML + `
//         <p>${n}</p>
//         `;
//     }  else {
//         let printN = document.getElementById("fizzbuzz-container");
//         printN.innerHTML = printN.innerHTML + `
//         <p>${n}</p>
//         `;
//     }
// }

// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
let n = 1;
for (n; n <= 100; n++){
    if (n % 3 == 0 && n % 5 == 0) {
        let n = "FizzBuzz"
        let printN = document.getElementById("fizzbuzz-container");
        printN.innerHTML = printN.innerHTML + `
        <div class="box box-fizz-buzz">
            <span class="line-h">${n}</span>
        </div>
        `;
    } else if (n % 3 == 0) {
        let n = "Fizz"
        let printN = document.getElementById("fizzbuzz-container");
        printN.innerHTML = printN.innerHTML + `
        <div class="box box-fizz">
            <span class="line-h">${n}</span>
        </div>
        `;
    } else if (n % 5 == 0) {
        let n = "buzz"
        let printN = document.getElementById("fizzbuzz-container");
        printN.innerHTML = printN.innerHTML + `
        <div class="box box-buzz">
            <span class="line-h">${n}</span>
        </div>
        `;
    }  else {
        let printN = document.getElementById("fizzbuzz-container");
        printN.innerHTML = printN.innerHTML + `
        <div class="box box-number">
            <span class="line-h">${n}</span>
        </div>
        `;
    }
}

