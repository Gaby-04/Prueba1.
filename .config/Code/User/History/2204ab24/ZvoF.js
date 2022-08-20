function Pokemon(nickname, tipo) {
    this.nickname = nickname;
    this.tipo = tipo; 
}

function Pokemon1(nickname, tipo, debilidad) {
    this.nickname = nickname;
    this.tipo = tipo;
    this.debilidad = debilidad; 
}

function Pokemon2(ataque1, ataque2,ataque3) {
    this.ataque1 = ataque1;
    this.ataque2 = ataque2;
    this.ataque3 = ataque3;
    
}



function TipoFuego(nickname, tipo){
    Pokemon.call(this, nickname, tipo); 
}

function TipoAgua(nickname, tipo, debilidad){
    Pokemon1.call(this, nickname, tipo, debilidad); 
     
}

function TipoNormal(nickname, tipo, debilidad){
   Pokemon1.call(this, nickname, tipo, debilidad); 
  
}

function TipoPlanta(nickname, tipo, debilidad){
    Pokemon1.call(this, nickname, tipo, debilidad); 
   
 }


 function TipoAgua1(nickname, tipo, debilidad){
    Pokemon1.call(this, nickname, tipo, debilidad); 
    Pokemon2.call(this, ataque1, ataque2, ataque3); 
}

function TipoNormal1(nickname, tipo, debilidad){
   Pokemon1.call(this, nickname, tipo, debilidad); 
   Pokemon2.call(this, ataque1, ataque2, ataque3); 
}

function TipoPlanta1(nickname, tipo, debilidad){
    Pokemon1.call(this, nickname, tipo, debilidad); 
    Pokemon2.call(this, ataque1, ataque2, ataque3); 
 }





TipoFuego.prototype = Object.create(Pokemon.prototype);
TipoAgua.prototype = Object.create(Pokemon1.prototype);
TipoNormal.prototype = Object.create(Pokemon1.prototype);
TipoPlanta.prototype = Object.create(Pokemon1.prototype);
TipoAgua1.prototype = Object.create(Pokemon2.prototype);
TipoNormal1.prototype = Object.create(Pokemon2.prototype);
TipoPlanta1.prototype = Object.create(Pokemon2.prototype);

TipoFuego.prototype.constructor = TipoFuego;
TipoAgua.prototype.constructor = TipoAgua;
TipoNormal.prototype.constructor = TipoNormal;
TipoPlanta.prototype.constructor = TipoPlanta;
TipoAgua1.prototype.constructor = TipoAgua1;
TipoNormal1.prototype.constructor = TipoNormal1;
TipoPlanta1.prototype.constructor = TipoPlanta1;



console.log(TipoFuego.prototype);
console.log(TipoAgua.prototype);
console.log(TipoNormal.prototype);
console.log(TipoPlanta.prototype);

const charizard = new TipoFuego("charizard", "fuego");
const squirtle = new TipoAgua("squirtle", "agua","Planta, Eléctrico");
const tauros = new TipoNormal("tauros", "Normal","Lucha");
const Venusaur = new TipoPlanta("Venusaur", "Planta","Fuego, Hielo, Veneno, Volador, Bicho");
const Seadra= new TipoAgua("Seadra", "agua","Planta, Eléctrico");
const Snorlax = new TipoNormal("Snorlax", "Normal","Lucha");
const Tangrowth = new TipoPlanta("Tangrowth", "Planta","Fuego, Hielo, Veneno, Volador, Bicho");



console.log(charizard);
console.log(squirtle);
console.log(tauros);
console.log(Venusaur);
console.log(Seadra);
console.log(Snorlax);
console.log(Tangrowth);