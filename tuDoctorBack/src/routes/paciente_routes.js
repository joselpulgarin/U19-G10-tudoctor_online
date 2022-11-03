const express = require('express');
const router = express.Router();
const pacienteDb = require('../models/paciente');
const { verificarToken } = require('../middleware/seguridad');
const {getPacientes, getPaciente, savePaciente, updatePaciente, deletePaciente } = require('../controllers/paciente');

//router.get('/',[verificarToken], getPacientes);
router.get('/', getPacientes);

//router.get('/:id',[verificarToken], getPaciente);
router.get('/:id', getPaciente);

//router.post('/',[verificarToken], savePaciente);
router.post('/', savePaciente);

//router.put('/',[verificarToken], updatePaciente);
router.put('/', updatePaciente);

//router.delete('/:id',[verificarToken], deletePaciente);
router.delete('/:id', deletePaciente);


module.exports = router;