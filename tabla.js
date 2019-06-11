import Tarea from "./tarea.js"

export default class Tabla {
    constructor(tableAgenda) {
        this._tableAgenda = tableAgenda;
        this._acti = [];
        this._initTables2();
    }

    _initTables2() {
        let acti = JSON.parse(localStorage.getItem("tareas"));
        if (!acti) {
            return;
        }
        acti.forEach((tareas, index) => {
            console.log(tareas);
            tareas.final = new Date(tareas.final);
            this._addContacto(new Tarea(tareas));
        });
    }

    _cancelEdit(row, tareas) {
        row.cells[0].innerHTML = tareas.numero;
        row.cells[1].innerHTML = tareas.tarea;
        row.cells[2].innerHTML = tareas.getDateAsString();
        row.cells[3].innerHTML = tareas.getDias();
        this._addEditDeleteToRow(row, tareas);
    }

    _saveEdit(row, tareas, newTarea) {
        let pos = this._findId(tareas.numero);
        this._actividades[pos] = newTarea;
        localStorage.setItem('taller', JSON.stringify(this._actividades));
        this._cancelEdit(row, new Registros(newTarea));
    }

    _editRow(row, tareas) {
        let iNum = document.createElement('input');
        iNum.type = 'text';
        iNum.value = tareas.numero;

        let iTarea = document.createElement('input');
        iTarea.type = 'text';
        iTarea.value = tareas.tarea;

        let iDate = document.createElement('input');
        iDate.type = 'date';
        iDate.value = tareas.getDateAsString();

        let btnSave = document.createElement('input');
        btnSave.type = 'button';
        btnSave.value = 'Grabar';
        btnSave.className = "btn btn-success";
        btnSave.addEventListener('click', () => {
            let newTarea = {
                numero: iNumero.value,
                tarea: iTarea.value,
                Fechafin: iDate.value,
            };

            this._saveEdit(row, tareas, newTarea);
        });

        let btnCancel = document.createElement('input');
        btnCancel.type = 'button';
        btnCancel.value = 'Cancelar';
        btnCancel.className = "btn btn-danger";
        btnCancel.addEventListener('click', () => {
            this._cancelEdit(row, tareas);
        });

        row.cells[0].innerHTML = '';
        row.cells[0].appendChild(iNumero);
        row.cells[1].innerHTML = '';
        row.cells[1].appendChild(iTarea);
        row.cells[2].innerHTML = '';
        row.cells[2].appendChild(iDate);
        row.cells[4].innerHTML = '';
        row.cells[4].appendChild(btnSave);
        row.cells[5].innerHTML = '';
        row.cells[5].appendChild(btnCancel);
    }

    _addEditDeleteToRow(row, tareas) {
        let btnEdit = document.createElement("input");
        btnEdit.type = "button";
        btnEdit.value = 'Editar';
        btnEdit.className = 'btn btn-success';
        btnEdit.addEventListener('click', () => {
            this._editRow(row, tareas);
        });

        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = 'Eliminar';
        btnDelete.className = 'btn btn-danger';

        row.cells[4].innerHTML = '';
        row.cells[4].appendChild(btnEdit);
        row.cells[5].innerHTML = '';
        row.cells[5].appendChild(btnDelete);
        btnDelete.addEventListener('click', () => {
            this._actividades.splice(tareas, 1);
            row.innerHTML = "";
            localStorage.setItem("tareas", JSON.stringify(this._actividades));
            return;
        });
    }

    _addContacto(tareas) {
        let row = this._tableAgenda.insertRow(-1);
        let cellnumero = row.insertCell(0);
        let cellTarea = row.insertCell(1);
        let cellfechaFin = row.insertCell(2);
        let cellDiferencia = row.insertCell(3);
        row.insertCell(4);
        row.insertCell(5);


        cellnum.innerHTML = tareas.numero;
        cellTarea.innerHTML = tareas.tarea;
        cellfinal.innerHTML = tareas.getDateAsString();
        cellDif.innerHTML = tareas.getDias();
        this._addEditDeleteToRow(row, tareas);


        let objTareas = {
            num: tareas.numero,
            tarea: tareas.tarea,
            fechaFin: tareas.fechaFin,
        }
        this._actividades.push(objTareas);
    }

    ordenarAlfabeticamente(a, b) {
        if (a.tarea < b.tarea) {
            return -1;
        }
        if (a.tarea > b.tarea) {
            return 1;
        }
        return 0;
    }
    _alfabeticamente() {
        this._actividades.sort(this._alfabeticamente);
    }
    mostrarAlfabeticamente() {
        this._actividades.sort(this._alfabeticamente);
        localStorage.setItem("tareas", JSON.stringify(this._actividades));
        location.reload();
    }

    _numericamente(a, b) {
        if (a.final < b.final) {
            return -1;
        }
        if (a.final > b.final) {
            return 1;
        }
        return 0;
    }
    _nume() {
        this._actividades.sort(this._numericamente);
    }
    mostrarNumericamente() {
        this._actividades.sort(this._numericamente);
        localStorage.setItem("actividades", JSON.stringify(this._actividades));
        location.reload();
    }


    _findId(id) {
        let found = -1

        this._actividades.forEach((tareas, index) => {
            if (tareas.numero === id) {
                found = index;
                return;
            }
        });
        return found;
    }


    addEmployees(tareas) {
        this._addContacto(tareas);
        localStorage.setItem("tareas", JSON.stringify(this._actividades));
        console.log(localStorage.getItem("tareas"));
    }
}