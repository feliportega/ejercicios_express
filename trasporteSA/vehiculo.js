

class Vehiculo{
    #marca
    #modelo
    #capacidad
    constructor(marca,modelo,capacidad){
        this.#marca=marca;
        this.#modelo=modelo
        this.#capacidad=capacidad
    }
    getMarca(){return this.#marca}
    getModelo(){return this.#modelo}
    getCapacidad(){return this.#capacidad}

    arrancar(){
        return `el vehiculo esta arrancando`
    }

    registrar(){
        return `vehiculo registrado`
    }

}
module.exports=Vehiculo