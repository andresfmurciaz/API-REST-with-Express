//usamos commonjs
const express = require('express');
const movies = require('./movies.json');
const app = express();
//quitamos la cabecera de express
app.disable('x-powered-by');

app.get('/',(req,res)=>{
    res.send({message:'hello everyone'});

})
// si el puerto 1234 esta disponible se conecta aeste , si no se conecta al puerto que este disponible
const PORT = process.env.PORT ?? 1234

//mostramos el puerto en el que se esta ejecutando el servidor
app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`);
})


app.get('/movies',(req,res)=>{
//obtenemos el genero de la url
    const {genre} = req.query;
    //si el genero existe filtramos las peliculas que tengan ese genero
    if(genre){
        
         const filteredMovies = movies.filter(
        
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
         )   
    return res.json(filteredMovies);
        }
        //si no existe el genero retornamos todas las peliculas

        res.json(movies);
})



app.get('/movies/:id',(req,res)=>{
//obtenemos el id de la url
    const {id} = req.params;
//buscamos la pelicula en ele json , con el id que se paso por parametro
    const movie = movies.find(movie=>movie.id === id);
//si la pelicula existe la retornamos
    if(movie) return res.json(movie);
    //si no existe retornamos un error
    res.status(404).json({error:'Movie not found'});
})


