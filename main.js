import Tarea from "./tarea.js";
import Tabla from "./tabla.js";

class Main {
    constructor() {
        this._agenda = new Tarea(document.querySelector("#agenda"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            if (form.checkValidity() === true) {
            let numero = document.querySelector("#numero").value;
            let nombre = document.querySelector("#nombre").value;
            let sFinal = document.querySelector("#fecha").value;
            sFinal = sFinal.split('-');


            let fechaFin = new Date(sFinal[0], sFinal[1]-1, sFinal[2]);


            let objTareas = {
                numero: numero,
                nombre: nombre,
                fechaFin: fechaFin
            }


            let tareas = new Tabla(objTareas);

            this._agenda.addEmployees(tareas);
            
        }
        form.classList.add("was-validated");
        });
        document.querySelector("#btnNombre").addEventListener("click", () => {
            this._agenda.mostrarAlfabeticamente();
        });
        document.querySelector("#btnDias").addEventListener("click", () => {
            this._agenda.mostrarNumericamente();
        });

    }


}

new Main();