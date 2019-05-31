import Tabla from "./tabla.js";
import Tarea from "./tarea.js";

class Main {
  constructor() {
    let tabla = new Tabla(
      document.querySelector("#table"),
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
        let form = document.querySelector("#form");
        form.classList.add("was-validated");

        if(form.checkValidity() === true) {
            let nombre = document.querySelector("#nombre").value;
            let sFechaFin = document.querySelector("#fecha").value;
            sFechaFin = sFechaFin.split("-");

            let fechaFin = new Date(sFechaFin[0], sFechaFin[1] - 1, sFechaFin[2]);

            let objTarea = {
                nombre,
                fechaFin
            };
            let tarea = new Tarea(objTarea);
            tabla.addContacto(tarea);
        }
        tabla.showTime();
    });

  }

}

let m = new Main();