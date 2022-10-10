//  Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

function fizzBuzz() {
  let numbers = document.getElementById("numbers");

  for (i = 1; i <= 100; i++) {
    let div = document.createElement("div");

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");

      div.className = "fizzBuzz";
      div.innerHTML = i + " FizzBuzz";

      numbers.append(div);
    } else if (i % 5 === 0) {
      console.log("buzz");

      div.className = "buzz";
      div.innerHTML = i + " Buzz";

      numbers.append(div);
    } else if (i % 3 === 0) {
      console.log("Fizz");

      div.className = "fizz";
      div.innerHTML = i + " Fizz";

      numbers.append(div);
    } else {
      console.log(i);

      div.innerHTML = i;

      numbers.append(div);
    }
  }
}
fizzBuzz();
