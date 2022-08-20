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
  this.leido = () =>{
    leido = "SI" 
}
}

let libro1 = new libro ('Aprendiendo con diego',600,'Diego','No');
libro1.leido();
console.log(libro1.infoLibro());