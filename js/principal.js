/*Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
(F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad
de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa.
Se dispone de los siguientes datos de varios empleados: (nombre, sexo) (Mary, ‘F’),
(José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’)
Cantidad de hombres que trabajan en la empresa: 3
Porcentaje de mujeres que trabajan en la empresa: 25%*/
import cl_mEmpresa from "./cl_mEmpresa.js";
import cl_vEmpresa from "./cl_vEmpresa.js";
import cl_controlador from "./cl_controlador.js";
export default class cl_principal {
    constructor(){
        let modelo = new cl_mEmpresa;
        let vista = new cl_vEmpresa;
        let controlador = new cl_controlador(modelo,vista);
        vista.controlador = controlador;
    }
}