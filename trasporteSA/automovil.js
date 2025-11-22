const Vehiculo = require("./vehiculo");


class Automovil extends Vehiculo{
    constructor(marca,modelo,capacidad,numeroEjes){
        super(marca,modelo,capacidad)
        this.numeroEjes=numeroEjes
        
    }
    arrancar(){
        return `el automovil esta arrancando `
    }
    descripcion(){
        return `Automovil ${this.getMarca()}, Modelo: ${this.getModelo()}, capacidad: ${this.getCapacidad()} Y numero de ejes: ${this.numeroEjes}} `
    }
    registrar(){
        return `Automovil registrado exitosamente:
          Marca: ${this.getMarca()}
         Modelo: ${this.getModelo()}
         Capacidad: ${this.getCapacidad()}
         Tipo de carga: ${this.numeroEjes}`;
    }
}
module.exports=Automovil