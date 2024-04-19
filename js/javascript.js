// Consegna
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// 1) stampo i numeri da 1 a 100
let n = 1;
// for (n; n <= 100; n++){
//     console.log("nuovo numero:"+n)
// }



// 2) i numeri che sono multipli di tre stampo fizz (operatore modulo: % = formula: n % 3 == 0(vuol dire se n è multiplo di tre il risultato dell'operazione sarà 0))
// for (n; n <= 100; n++){
//     if (n % 3 == 0){
//         console.log("fizz");
//     } else {
//         console.log(n);
//     }
// }



// 3) i numeri che sono multipli di cinque stampo buzz (operatore modulo: % formula: n % 5 == 0)
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
for (n; n <= 100; n++){
    if (n % 3 == 0 && n % 5 == 0) {
        console.log("fizzbuzz")
    } else if (n % 3 == 0) {
        console.log("fizz");
    } else if (n % 5 == 0) {
        console.log("buzz")
    }  else {
        console.log(n);
    }
}