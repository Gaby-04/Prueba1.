function Pokemon(nickname, tipo) {
    this.nickname = nickname;
    this.tipo = tipo; 
}

function Pokemon1(nickname, tipo, debilidad, ataques) {
    this.nickname = nickname;
    this.tipo = tipo;
    this.debilidad = debilidad; 
    this.ataques = ataques; 
}



function TipoFuego(nickname, tipo){
    Pokemon.call(this, nickname, tipo); 
}

function TipoAgua(nickname, tipo, debilidad, ataques){
    Pokemon1.call(this, nickname, tipo, debilidad, ataques); 
     
}

function TipoNormal(nickname, tipo, debilidad, ataques){
   Pokemon1.call(this, nickname, tipo, debilidad, ataques); 
  
}

function TipoPlanta(nickname, tipo, debilidad, ataques){
    Pokemon1.call(this, nickname, tipo, debilidad, ataques); 
   
 }






TipoFuego.prototype = Object.create(Pokemon.prototype);
TipoAgua.prototype = Object.create(Pokemon1.prototype);
TipoNormal.prototype = Object.create(Pokemon1.prototype);
TipoPlanta.prototype = Object.create(Pokemon1.prototype);

TipoFuego.prototype.constructor = TipoFuego;
TipoAgua.prototype.constructor = TipoAgua;
TipoNormal.prototype.constructor = TipoNormal;
TipoPlanta.prototype.constructor = TipoPlanta;




console.log(TipoFuego.prototype);
console.log(TipoAgua.prototype);
console.log(TipoNormal.prototype);
console.log(TipoPlanta.prototype);

const charizard = new TipoFuego("charizard", "fuego");
const squirtle = new TipoAgua("squirtle", "agua","Planta, Eléctrico","Nublado, Burbuja,Lluvioso");
const tauros = new TipoNormal("tauros", "Normal","Lucha","Golpe Thrash, Derribo Take Down, Cabezazo Zen Zen Headbutt");
const Venusaur = new TipoPlanta("Venusaur", "Planta","Fuego, Hielo, Veneno, Volador, Bicho", "Gigadrenado, Bomba, Frenzy Plant exclusivo");




console.log(charizard);
console.log(squirtle);
console.log(tauros);
console.log(Venusaur);
