const mongoose = require('mongoose');
const { Schema } = mongoose;

const MedicoSchema = new Schema({
    especialidad : {
        type: Schema.Types.ObjectId,
        ref: 'especialidades',
        required: true
     },
    tipoAtencion : {
        type: String,
        enum: ["VIRTUAL", "PRESENCIAL", "MIXTO"],
        default: "PRESENCIAL"
      }  ,
    tipoTurno :  {
        type: String,
        enum: ["COMPLETO", "MAÑANA", "TARDE", "NOCHE"],
        default: "COMPLETO"
      }  ,
   usuarioId: {
      type: Schema.Types.ObjectId,
      ref: 'usuarios',
      required: true
   }
});

module.exports = mongoose.model('medicos', MedicoSchema);