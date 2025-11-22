const Vehiculo = require('./vehiculo')

class Moto extends Vehiculo{
    constructor(marca,modelo,capacidad,potencia){
        super(marca,modelo,capacidad)
        this.potencia=potencia
        
    }
    arrancar(){
        return `la moto esta arrancando `
    }
    descripcion(){
        return `moto ${this.getMarca()}, Modelo: ${this.getModelo()}, capacidad: ${this.getCapacidad()} Y POTENCIA: ${this.potencia} `
    }
    registrar(){
        return `Cmoto registrado exitosamente:
          Marca: ${this.getMarca()}
         Modelo: ${this.getModelo()}
         Capacidad: ${this.getCapacidad()}
         Tipo de carga: ${this.potencia}`;
    }
}
module.exports=Moto