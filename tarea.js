export default class Tarea {
    constructor(tarea) {
      this._nombre = tarea.nombre.toUpperCase();
      this._fechaFin = tarea.fechaFin;
      this._months = [
        "Ene", "Feb",
        "Mar", "Abr",
        "May", "Jun",
        "Jul", "Ago",
        "Sep", "Oct",
        "Nov", "Dic"
      ];
    }

  get nombre() {
    return this._nombre;
  }

  get fechaFin() {
    return this._fechaFin;
  }

}