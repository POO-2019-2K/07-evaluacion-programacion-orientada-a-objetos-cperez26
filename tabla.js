import Tarea from "./tarea.js";

export default class Tabla {
  constructor(tablaL) {
    this._tablaL= tableL;
    this._tareas = [];
    this._initTables();
  }

  _initTables() {
    let lsTareas = JSON.parse(localStorage.getItem("tareas"));
    if(lsTareas === null){
      return;
    }
    lsTareas.forEach((e, index) => {
      e.fechaFin = new Date(e.fechaFin);
      this._showInTable(new Tarea(e));
    });
  }

  addTarea(tarea) {
      this._showInTable(tarea);
      localStorage.setItem("tareas", JSON.stringify(this._tareas));
  }

  _showInTable(tarea) {
    let row = this._tablaL.insertRow(-1);

    let cellNombre = row.insertCell(0);   
    let cellFechaFin = row.insertCell(1);
    let cellDias = row.insertCell(2);
    row.insertCell(3);

    cellNombre.appendChild(document.createTextNode(tarea.nombre));
    cellFechaFin.appendChild(document.createTextNode(tarea.getDateAsString()));
    cellDias.appendChild(document.createTextNode(tarea.getDias()));

    let objTarea = {
      nombre: tarea.nombre,
      fechaFin: tarea.fechaFin,
    };

    this._tareas.push(objTarea);
    this._addDeleteBtn(row, tarea);
  }
  
}