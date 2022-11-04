const mongoose = require('mongoose');
const { Schema } = mongoose;

const PacienteSchema = new Schema({
   tipoAfiliacion : {
      type: String,
      enum: ["PARTICULAR", "CONVENIO", "BENEFICIARIO", "EMPLEADO"],
      default: "PARTICULAR",
      required : true
    }  ,
   fecAfiliacion : {type : Date, required : true},
   fecRetiro : {type : Date},
   estado: {
      type: String,
      enum: ["ACTIVO", "RETIRADO", "SUSPENDIDO"],
      default: "ACTIVO",
      required : true
    } ,
   usuarioId: {
      type: Schema.Types.ObjectId,
      ref: 'usuarios',
      required: true
   }
});

module.exports = mongoose.model('pacientes', PacienteSchema);