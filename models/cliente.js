const mongoose = require("mongoose");

// 2. Definir un esquema

const clienteSchema = mongoose.Schema({
    tipoDocumento: String,
    numeroDocumento: String,
    nombre: String,
    apellido: String,
    email: String,
    telefonoContacto: String,
    password: String
})

// 3. Crear el modelo

const ClienteModel = mongoose.model( "cliente", clienteSchema )