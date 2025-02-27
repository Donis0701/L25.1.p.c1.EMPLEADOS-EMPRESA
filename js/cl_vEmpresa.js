import cl_mEmpleado from "./cl_mEmpleado.js";
import cl_vEmpleado from "./cl_vEmpleado.js";
export default class cl_vEmpresa {
    constructor() {
        this.controlador = null;
        this.salida = document.getElementById('mainForm_salida');
        this.vEmpleado = new cl_vEmpleado();
        this.vEmpleado.btProcesar.onclick = () => this.controlador.procesarEmpleado();
    }
    procesarEmpleado() {
        this.mEmpleado = new cl_mEmpleado({ 
             nombre: this.vEmpleado.nombre,
             sexo: this.vEmpleado.sexo });
        return this.mEmpleado;
    }
    reporteEmpresa(totalHombres, porcentajeMujeres) {
        this.salida.innerHTML = `Cantidad de hombres que trabajan en la empresa: ${totalHombres}<br>
        Porcentaje de mujeres que trabajan en la empresa: ${porcentajeMujeres}%`;

    }
}