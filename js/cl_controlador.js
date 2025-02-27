export default class cl_controlador {
    constructor(modelo,vista){
        this.modelo = modelo;
        this.vista = vista;       
    }
    procesarEmpleado(){
        this.modelo.procesarEmpleado(this.vista.procesarEmpleado());
        this.vista.reporteEmpresa(this.modelo.totalHombres(),this.modelo.porcentajeMujeres());
    }
}