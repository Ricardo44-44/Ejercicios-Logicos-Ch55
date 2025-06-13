/*
Escribe un programa que pida 10 números. Usando operadores lógicos y cualquier otra función/estructura de JavaScript que hayas visto antes, determina y muestra el más alto de esos números.



*/

/*
let counter = 0;

const higNumber = [];
  
alert("Acontinuacion ingresa 10 numeros para determinar cual es el mayor de ellos")
for (let i = 1;  i <= 10; i++){
  higNumber.push(prompt(`Ingresa el numero que deseas ${i}`))
}
  */
 let counter = 0;
const higNumber = [];

alert("A continuación, ingresa 10 números para determinar cuál es el mayor de ellos.");

for (let i = 0; i < 10; i++) {
  const input = prompt(`Ingresa el número ${i + 1}:`);
  const number =(input);

  if ((number)) {
    higNumber.push(number);
  } else {
    alert("Por favor, ingresa un número válido.");
    i--; // Decrementa el contador para repetir la entrada
  }
}

let maxNumber = higNumber[0]; // Inicializa el primer número como el máximo

for (let i = 1; i < higNumber.length; i++) {
  if (higNumber[i] > maxNumber) {
    maxNumber = higNumber[i];
  }
}

console.log(`El número mayor es: ${maxNumber}`);
