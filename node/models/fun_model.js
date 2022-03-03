const {ModeloPelicula} = require('./models');

//La función para mostrar todas las instancias
// select * from table 

const getAllMovies = async(req,res)=>{
 try{
  const Peliculas = await ModeloPelicula.findAll();
  res.json(Peliculas);
 } catch(error){
  res.json({message: 'No se encontraron instancias'})
 }
}

//La función para Mostrar solo 1 instancia
// sql : select * from table where id_pelicula = 1;

const getOneMovie = async(req,res)=>{
 try{
  const Pelicula_unica = await ModeloPelicula.findAll({where: {id: req.params.id}});
  res.json(Pelicula_unica);
 } catch(error){
  res.json({mensaje: "No se encontró la instancia")
 }
}





// La función para crear un regristro

// La función para Actualizar un registro


// La función para eliminar un registro (=> ModeloPelicula)