function Pokemon(nickname, tipo) {
    this.nickname = nickname;
    this.tipo = tipo;
    this.debilidad = debilidad; 
}

function TipoFuego(nickname, tipo, debilidad){
    Pokemon.call(this, nickname, tipo,); 
}

function TipoAgua(nickname, tipo){

}

TipoFuego.prototype = Object.create(Pokemon.prototype);
TipoFuego.prototype.constructor = TipoFuego;

console.log(TipoFuego.prototype);

const charizard = new TipoFuego("charizard", "fuego");
console.log(charizard);