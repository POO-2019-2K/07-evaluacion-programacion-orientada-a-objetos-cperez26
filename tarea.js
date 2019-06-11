export default class Tarea {
    constructor(tareas) {
        this._numero = tareas.numero;
        this._tarea =  tareas.tarea;
        this._fechaFin = tareas.fechaFin;
        this._months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
        ];
    }

    get numero(){
        return this._numero;
    }

    get tarea(){
        return this._tarea;
    }
    

    getDateAsString(){
        let fecha = this._fechaFin.getDate()+ "/" + this._months[this._fechaFin.getMonth()] + "/" + this._fechaFin.getFullYear();
        return fecha;
    }

    get fechaFin(){
        return this._fechaFin;
    }

    getDias() {
        let oneDay= (24*60*60*1000);
        let differenceMs = Math.abs(new Date() - this._fechaFin);
        return Math.round(differenceMs / oneDay);
        }

}