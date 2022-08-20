function persona(nombre, apellido){
    this.nombre=nombre;
    this.apellido=apellido;
    this.saludar = function(){
        return "hola, mundo!";
    }

}

const personita = new persona("Diego", "Herrera");
const personita2 = new persona("juan","quintanilla");
console.log(Object.values(personita));
console.log(persona.prototype);

