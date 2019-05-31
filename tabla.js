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
  
  _addDeleteBtn(row, tarea){ 
    let btnDelete = document.createElement("input");
    btnDelete.type = "button";
    btnDelete.value = "Borrar";
    row.cells[3].innerHTML = "";
    btnDelete.className = "btnDelete";
    row.cells[3].appendChild(btnDelete);
    btnDelete.addEventListener("click", () => {
        this._deleteRow(tarea);
    }); 
  }

  _deleteRow(tarea){
      this._tareas = JSON.parse(localStorage.getItem("tareas"));
      this._tareas.forEach((e, index) => {
          if(e.nombre = tarea.nombre) {
              this._tareas.splice(index, 1);
          }
      })
      location.reload();
      localStorage.setItem("tareas", JSON.stringify(this._tareas));
  }

  _compararTiempo(x, y) {
    if (x.fechaFin > y.fechaFin) {
      return 1;
    }

    if (x.fechaFin < y.fechaFin) {
      return -1;
    }
    return 0;
  }

  mostrarTiempo() {
    this._tareas.sort(this._compararTiempo);
    location.reload();
    localStorage.setItem("tareas", JSON.stringify(this._tareas));
  }
}