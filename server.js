const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('Calculadora Básica');
});

app.get('/suma',(req,res)=>{
    a=5;
    b=6;
    suma=a+b;
    res.send('La suma de '+a+' + '+b+' es igual a: '+suma);
});
app.get('/resta',(req,res)=>{
    a=5;
    b=6;
    resta=a-b;
    res.send('La resta de '+a+' - '+b+' es igual a: '+resta);
});
app.get('/multiplicacion',(req,res)=>{
    a=5;
    b=6;
    mult=a*b;
    res.send('La multiplicación de '+a+' * '+b+' es igual a: '+mult);
});
app.get('/division',(req,res)=>{
    a=5;
    b=6;
    division=a/b;
    res.send('La división de '+a+' / '+b+' es igual a: '+division);
});

app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

