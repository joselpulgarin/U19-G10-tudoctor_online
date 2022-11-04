const express = require('express');
const router = express.Router();
const especialidadDb = require('../models/especialidad');
const { verificarToken } = require('../middleware/seguridad');
const {getEspecialidades, getEspecialidad, saveEspecialidad, updateEspecialidad, deleteEspecialidad } = require('../controllers/especialidad');

router.get('/',[verificarToken], getEspecialidades);

router.get('/:id',[verificarToken], getEspecialidad);

router.post('/',[verificarToken], saveEspecialidad);

router.put('/',[verificarToken], updateEspecialidad);

router.delete('/:id',[verificarToken], deleteEspecialidad);


module.exports = router;