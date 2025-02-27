export default class cl_mEmpleado{
    constructor({nombre,sexo}){
        this._nombre=nombre;
        this._sexo=sexo;
    }
    set nombre(nombre){
        this._nombre= nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set sexo(sexo){
        this._sexo= sexo.toUpperCase();
        if(this._sexo!='M' && this._sexo!='F'){
            this._sexo='M';
        }
    }
    get sexo(){
        return this._sexo;
    }
}