
const Moto = require('./moto')
const Camion = require('./camion')
const Automovil = require('./automovil')
const express = require('express')
const app = express()
const port = 3000

const moto1 = new Moto('Honda','Predator',2,7000)

const camion1 = new Camion('Suzuki','giant',7,"Plataforma")

const automovil1 = new Automovil('Nissan','Frontier',4,4)

app.get('/des',(req,res)=>{
    res.send(moto1.descripcion())
})

app.get('/arran',(req,res)=>{
    res.send(camion1.arrancar())
})

app.get('/reg',(req,res)=>{
    res.send(automovil1.registrar())
})



app.listen(port, () => console.log(`servidor corriendo en http://localhost:${port}`))    