const mongoose = require('mongoose');
const { Schema } = mongoose;

const PerfilSchema = new Schema({
    nombrePerfil : {type : String, required : true},
    estadoPerfil : {type : Number, required : true }
});

module.exports = mongoose.model('perfiles', PerfilSchema);
