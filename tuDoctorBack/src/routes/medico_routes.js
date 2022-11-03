const express = require('express');
const router = express.Router();
const medicoDb = require('../models/medico');
const { verificarToken } = require('../middleware/seguridad');
const {getMedicos, getMedico, saveMedico, updateMedico, deleteMedico} = require('../controllers/medico');

router.get('/',[verificarToken], getMedicos);

router.get('/:id',[verificarToken], getMedico);

router.post('/',[verificarToken], saveMedico);

router.put('/',[verificarToken], updateMedico);

router.delete('/:id',[verificarToken], deleteMedico);


module.exports = router;