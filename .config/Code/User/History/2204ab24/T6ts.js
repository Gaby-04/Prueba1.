function Pokemon(nickname, tipo) {
    this.nickname = nickname;
    this.tipo = tipo;
}

function TipoFuego(nickname, tipo){
    Pokemon.call(this, nickname, tipo);
    
}

TipoFuego.prototype = Object.create(Pokemon.prototype);
TipoFuego.prototype.constructor = TipoFuego;

console.log(TipoFuego.prototype);

const charizard = new TipoFuego("charizard", "fuego");
console.log(charizard);