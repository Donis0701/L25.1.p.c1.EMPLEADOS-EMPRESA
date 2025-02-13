/*Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
(F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad
de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa.
Se dispone de los siguientes datos de varios empleados: (nombre, sexo) (Mary, ‘F’),
(José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’)
Cantidad de hombres que trabajan en la empresa: 3
Porcentaje de mujeres que trabajan en la empresa: 25%*/
import cl_Empleado from "./cl_Empleado.js";
import cl_Empresa from "./cl_Empresa.js";

let empleado1=new cl_Empleado('Mary','F');
let empleado2=new cl_Empleado('Jose','M');
let empleado3=new cl_Empleado('Carlos','M');
let empleado4=new cl_Empleado('Pedro','M');

let empresa=new cl_Empresa();

empresa.procesarEmpleado(empleado1);
empresa.procesarEmpleado(empleado2);
empresa.procesarEmpleado(empleado3);
empresa.procesarEmpleado(empleado4);

let salida = document.getElementById("salida");
salida.innerHTML += `Cantidad de hombres que trabajan en la empresa: ${empresa.totalHombres()}<br>
Porcentaje de mujeres que trabajan en la empresa: ${empresa.porcentajeMujeres()}%`;