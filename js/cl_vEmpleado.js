export default class cl_vEmpleado{
    constructor(){
        this.inNombre = document.getElementById('empleadoForm_inNombre');
        this.inSexo = document.getElementById('empleadoForm_inSexo');
        this.btProcesar = document.getElementById('empleadoForm_btProcesar');
    }
    get nombre(){
        return this.inNombre.value;
    }
    get sexo(){
        return this.inSexo.value;
    }
}