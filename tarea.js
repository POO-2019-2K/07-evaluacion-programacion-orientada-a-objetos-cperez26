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

  getDateAsString() {
    let fecha =
      this._fechaFin.getDate() +
      "/" +
      this._months[this._fechaFin.getMonth()] +
      "/" +
      this._fehcaFin.getFullYear();
    return fecha;
  }
  
  getDias() {
    let oneDay = 24 * 60 * 60 * 1000;
    let oneYear = oneDay * 365;
    let differenceMs = new Date() - this._fechaFin;
    let dias = Math.trunc(differenceMs / oneYear);
  
    return dias;
  }
}