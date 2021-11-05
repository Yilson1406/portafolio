export class Projects {
  titulo:string;
  descripcion:string;
  ruta:string;
  foto:string;
  constructor(titulo:string ='',descripcion:string='',ruta:string='',foto:string ='') {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.ruta = ruta;
    this.foto = foto
  }
}
