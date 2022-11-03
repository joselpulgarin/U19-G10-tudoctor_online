const express = require('express');
const router = express.Router();
const pacienteDb = require('../models/paciente');
const { verificarToken } = require('../middleware/seguridad');
const {getPacientes, getPaciente, savePaciente, updatePaciente, deletePaciente } = require('../controllers/paciente');

router.get('/',[verificarToken], getPacientes);

router.get('/:id',[verificarToken], getPaciente);

router.post('/',[verificarToken], savePaciente);

router.put('/',[verificarToken], updatePaciente);

router.delete('/:id',[verificarToken], deletePaciente);


module.exports = router;