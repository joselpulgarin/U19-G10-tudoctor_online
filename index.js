const mongoose = require("mongoose");

// 1. Conexión
mongoose
.connect("mongodb://localhost:27017")
.then( () => { console.log("Se conecto a la base de datos") })
.catch(()=> {console.log ("Problema")} );

// 2. Definir un schema
const usuario = {
    numDocumento: String,
    
}