//Tenemos que definir 1 modelo porque solo hay una entidad.

//Se tienen que definir tantos modelos como entidades existan + sus relaciones n a n. (En algunos casos).


const {Sequelize, DataTypes} = require('sequelize');
const {database} = require('../database/db');

//console.log(database);

// generar una instancia del modelo. 

const ModeloPelicula = database.define('Pelicula',{
 title: {type: DataTypes.STRING},
 content: {type: DataTypes.STRING}
})

//console.log(ModeloPelicula);
//console.log(typeof(ModeloPelicula));


module.exports.ModeloPelicula = ModeloPelicula 



/*
En sql :
create table database.tabla(
  name varchar...
)

*/
