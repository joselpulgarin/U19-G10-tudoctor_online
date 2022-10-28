const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    numDocumento : {type : String, required : true},
    nombre : {type : String, required : true},
    apellido : {type : String, required : true},
    email : {type : String, required : true},
    telefono : {type : String, required : true},
    fecNac : {type : Date, required : true},
    password : {type : String}    
});

module.exports = mongoose.model('usuarios', UsuarioSchema);



