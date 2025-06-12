let counter = 0;

const username = prompt ("Hola ingresa tu nombre de usuario: ");
const age = prompt("Ahora ingresa tu edad: ");
const favoriteMovies = [];

//Vamos a pedir 5 peliculas

alert("Acontinuacion te vamos a pedir tus 5 peliculas favoritas")
for (let i = 1;  i <= 5; i++){
  favoriteMovies.push (prompt(`Ingresa la pelicula numero ${i}`))

// equivalente a "Ingresa la pelicula" + i + ":"

}

console.log(`Hola soy ${username} tengo ${age} años y mis peliculas favoritas son:`);

// para antes de la condicion se dbe poner un contador 

while (counter < favoriteMovies.length){
  console.log(`Mi pelicula favorita numero ${counter + 1} es ${favoriteMovies[counter]}`);
  counter++;
}


