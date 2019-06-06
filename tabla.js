import Tarea from "./Tarea.js"

export default class Tabla {
    constructor(tablaT) {
        this._tablaTareas = tablaT;
        this._tareasArray = [];
        this._initTables();

    }

    _initTables() {
        let lstareas = JSON.parse(localStorage.getItem("tareas"));
        if (lstareas === null) {
            return;
        }
        lstareas.forEach((e, index) => {
            e.fechaFin = new Date(e.fechaFin)
            this._showInTable(new Tarea(e));
        });
    }

    _cancelEdit(row, tarea) {
        row.cells[0].innerHTML = tarea.nombre;
        row.cells[1].innerHTML = tarea.getDateAsString();
        this._addEditDeleteToRow(row, tarea);
    }

    _saveEdit(row, tarea, nuevaTarea) {
        let pos = this._findtarea(tarea.email);
        this._tareasArray[pos] = nuevaTarea;
        localStorage.setItem('tareas', JSON.stringify(this._tareasArray));
        this._cancelEdit(row, new Tarea(nuevaTarea));
    }

    _showInTable(tarea) {
        let row = this._tablaTareas.insertRow(-1);

        let cellNombre = row.insertCell(0)
        let cellFechaFin = row.insertCell(1);
        let cellDias = row.insertCell(2);

        row.insertCell(3);
        row.insertCell(4);

        cellNombre.innerHTML = tarea.nombreA;
        cellFechaFin.innerHTML = tarea.getDateAsString();
        cellDias.innerHTML = tarea.getDias();

        this._addEditDeleteToRow(row)

        let objTarea = {
            nombre: tarea.nombre,
            fechaFin: tarea.fechaFin
        }
        this._tareasArray.push(objTarea);
    }



    addTarea(tarea) {

        this._showInTable(tarea);

        this._tareasArray.sort();
        localStorage.setItem("tareas", JSON.stringify(this._tareasArray.sort()));
        localStorage.setItem("tareas", JSON.stringify(this._tareasArray.sort()));
    }



}