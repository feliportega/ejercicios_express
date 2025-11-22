const Vehiculo = require("./vehiculo")


class Camion extends Vehiculo{
    constructor(marca,modelo,capacidad,tipoCarga){
        super(marca,modelo,capacidad)
        this.tipoCarga=tipoCarga
        
    }
    arrancar(){
        return `el camion esta arrancando                                                                                                                                            `
    }
    descripcion(){
        return `Camion ${this.getMarca()}, Modelo: ${this.getModelo()}, capacidad: ${this.getCapacidad()} Y tipo decarga: ${this.tipoCarga} `
    }
    registrar(){  
         return `Camión registrado exitosamente:
          Marca: ${this.getMarca()}
         Modelo: ${this.getModelo()}
         Capacidad: ${this.getCapacidad()}
         Tipo de carga: ${this.tipoCarga}`;
    }
}
module.exports=Camion