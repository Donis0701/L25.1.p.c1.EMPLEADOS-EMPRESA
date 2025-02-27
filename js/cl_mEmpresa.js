export default class cl_mEmpresa{
    constructor(){
        this.cntHombres=0;
        this.cntMujeres=0;
        this.cntEmpleados=0;
    }
    procesarEmpleado(empleado){
        this.cntEmpleados++;
        if(empleado.sexo=='M'){
            this.cntHombres++;
        }else{
            this.cntMujeres++;
        }
    }
    totalHombres(){
        return this.cntHombres;
    }
    porcentajeMujeres(){
        return (this.cntMujeres*100)/this.cntEmpleados;
    }
}