//usamos commonjs
const express = require('express');

const app = express();
//quitamos la cabecera de express
app.disable('x-powered-by');

app.get('/',(req,res)=>{
    res.send('hello everyone, my name is andres and mi last name is murcia , this is a test the server in express');

})
// si el puerto 1234 esta disponible se conecta aeste , si no se conecta al puerto que este disponible
const PORT = process.env.PORT ?? 1234

//mostramos el puerto en el que se esta ejecutando el servidor
app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`);
})
