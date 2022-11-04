const mongoose = require('mongoose');
const { Schema } = mongoose;

const EspecialidadSchema = new Schema({
    nombre : {type : String, required : true},
    descripcion : {type : String}
});

module.exports = mongoose.model('especialidades', EspecialidadSchema);



