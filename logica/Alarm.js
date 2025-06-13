/*

Escribe un programa que le pida al usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que esos segundos hayan pasado en tiempo real.Ejemplo de resultado: "Es hora de dormir después de 10 segundos".
 
*/

const segundos = parseInt(prompt("¿Cuántos segundos deseas esperar antes de la alarma?"));
const mensaje = prompt("¿Qué mensaje deseas mostrar cuando suene la alarma?");

if (!isNaN(segundos) && segundos > 0) {
  setTimeout(() => {
    alert(`¡Es hora de dormir! Han pasado ${segundos} segundos.`);
    console.log(`Alarma activada: ${mensaje}`);
  }, segundos * 1000);
} else {
  alert("Por favor, ingresa un número válido de segundos.");
}
