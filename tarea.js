
export default class Tarea {
  constructor(tarea) {
      this._nombre = tarea.nombre;
      this._fechaFin = tarea.fechaFin;
  }

  get nombre() {
      return this._nombre;
  }

  get fechaFin() {
      return this._fechaFin;
  }

  getDateAsString() {
      let d = this._fechaFin.getDate() 
      + "/" + 
      this._fechaFin.getMonth() 
      + "/" + 
      this._fechaFin.getFullYear();
      return d;
  }

  getDias() {
      let oneDay = (24 * 60 * 60 * 1000);

      let differenceMs = Math.abs(new Date() - this._fechaFin);
      return Math.round(differenceMs / oneDay);
  }
}