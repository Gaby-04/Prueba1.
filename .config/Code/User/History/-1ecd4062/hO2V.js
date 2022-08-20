function libro(titulo,autor,numerodepag,leido){ 
this.tutulo = titulo;
this.autor = autor;
this.numerodepag = numerodepag;
this.leido = leido;
this.informacionlibro= ()=>{ 
    return {
        titulo: titulo,
        autor: autor,
        numerodepag: numerodepag,
        estado: leido,
  }
}
}

const libro = new libro ("hola");

console.log(libro);