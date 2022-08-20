/*function persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.saludar = function(){
        return "hola,mundo!";
    }

}

const personita = new persona("Diego", "Herrera");
const personita2 = new persona("juan","quintanilla");
console.log(Object.values(personita));
console.log(persona.prototype);


function Estudiante(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

Estudiante.prototype = persona.prototype
miEstudiante = new Estudiante("Jorgito", "Perez");

Estudiante.prototype.despedida = function() {
    return "nos vemos!";
}

*/
//let miPersona = new Persona("Jorge","Hernandez")

function Pokemon(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
}

function TipoFuego(nombre, apellido){
    Pokemon.call(this, nombre, apellido);

}

TipoFuego.prototype = Object.create(Pokemon.prototype);
TipoFuego.prototype.constructor = TipoFuego;

console.log(TipoFuego.prototype);

const charizard = new TipoFuego("charizard", "fuego");
console.log(charizard);