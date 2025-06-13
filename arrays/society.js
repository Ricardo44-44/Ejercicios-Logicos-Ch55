/*

Find the name of a secret society based on the first letter of each member's name.
 

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.

1- Recibimos un array que tienen nombres
 1.1.- estos nombres empiezan en mayusculas
 2.- utilizar un ciclo para recorrer el array
 3. Obtener la primera letra de cada nombre utilizando la notacion de corchetes
 4. Pegar la inicial de cada nombre
 n. Retornar el nombre de la sociedad secreta basado en el primera letra de cada nombre



*/

// aqui solo estamos pidiendo que se vea la letra numero 3 que es la t, recuerda que se inicia en 0,1,2,3
/*let nombre = "Zeltzin";
console.log(nombre[3]);*/

const secretName = function (namesArray){
 let sociatyName = "";
 const sortedNames = namesArray.toSorted ();//toSorted te ordena alfabeticamente
 sortedNames.forEach((name)=> sociatyName = sociatyName + name[0]);
 return sociatyName;



}
console.log( secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));



