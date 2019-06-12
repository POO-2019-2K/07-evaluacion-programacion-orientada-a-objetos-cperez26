import Tarea from "./tarea.js";
import Tabla from "./tabla.js";

class Main {
    constructor() {
        this._agenda = new Tarea(document.querySelector("#agenda"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let numero = document.querySelector("#numero").value;
            let tarea = document.querySelector("#nombre").value;
            let sFinal = document.querySelector("#fecha").value;
            sFinal = sFinal.split('-');


            let final = new Date(sFinal[0], sFinal[1], sFinal[2]);


            let objTareas = {
                num: numero,
                tarea: tarea,
                final: final,
            }

            let tareas = new Tabla(objTareas);
            
            this._agenda.addEmployees(tareas);
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