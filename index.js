const mongoose = require("mongoose");

// 1. Conexión
mongoose
.connect("mongodb://localhost:27017/saludweb")
.then( () => { console.log("Se conecto a la base de datos") })
.catch(()=> {console.log ("Problema")} );

// 2. Definir un esquema
const usuario = {
    tipoDocumento: String,
    numeroDocumento: String,
    nombre: String,
    apellido: String,
    email: String,
    telefonoContacto: String,
    password: String
}

const clienteSchema = mongoose.Schema(Clientes)

// 3. Crear el modelo

const ClienteModel = mongoose.model( "cliente", clienteSchema )

//Implementar el caso de uso

const cliente1 = {
    tipoDocumento: "CC",
    numeroDocumento: "123",
    nombre: "pepe",
    apellido: "Ejemlpo",
    email: "ejemplo@pepito.com",
    telefonoContacto: "310",
    password: "00000"
}

ClienteModel.create(cliente1)
    .then((respuesta)=>{
        console.log('Se inserto el cliente' + respuesta.nombre)
    } )
    .catch(()=>{console.log ("Problema al insertar cliente")})
