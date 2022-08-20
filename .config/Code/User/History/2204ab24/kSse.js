function Pokemon(nickname, tipo) {
    this.nickname = nickname;
    this.tipo = tipo;
    this.debilidad = debilidad; 
}

function TipoFuego(nickname, tipo, debilidad){
    Pokemon.call(this, nickname, tipo, debilidad); 
}

function TipoAgua(nickname, tipo, debilidad){
    Pokemon.call(this, nickname, tipo, debilidad); 
}

function TipoNormal(nickname, tipo, debilidad){
   Pokemon.call(this, nickname, tipo, debilidad); 
}

TipoFuego.prototype = Object.create(Pokemon.prototype);
TipoAgua.prototype = Object.create(Pokemon.prototype);
TipoNormal.prototype = Object.create(Pokemon.prototype);

TipoFuego.prototype.constructor = TipoFuego;
TipoAgua.prototype.constructor = TipoAgua;
TipoNormal.prototype.constructor = TipoNormal;



console.log(TipoFuego.prototype);
console.log(TipoAgua.prototype);
console.log(TipoNormal.prototype);

const charizard = new TipoFuego("charizard", "fuego");
console.log(charizard);