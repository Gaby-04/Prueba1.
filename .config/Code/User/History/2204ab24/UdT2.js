function Pokemon(nombre, tipo) {
    this.nickname = nickname;
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