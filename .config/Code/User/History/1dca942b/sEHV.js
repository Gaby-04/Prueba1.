function persona(nombre, apellido){
    this.nombre=nombre;
    this.apellido=apellido;
    this.saludar = function(){
        return "hola, mundo!";
    }

}

const personita = new persona("Diego", "Herrera");

console.log(Object.values(personita));
console.log(persona.prototype);