const express = require('express');
const router = express.Router();
const especialidadDb = require('../models/especialidad');
const { verificarToken } = require('../middleware/seguridad');
const {getEspecialidades, getEspecialidad, saveEspecialidad, updateEspecialidad, deleteEspecialidad } = require('../controllers/especialidad');

//router.get('/',[verificarToken], getEspecialidades);
router.get('/', getEspecialidades);

//router.get('/:id',[verificarToken], getEspecialidad);
router.get('/:id', getEspecialidad);

//router.post('/',[verificarToken], saveEspecialidad);
router.post('/', saveEspecialidad);

//router.put('/',[verificarToken], updateEspecialidad);
router.put('/', updateEspecialidad);

//router.delete('/:id',[verificarToken], deleteEspecialidad);
router.delete('/:id', deleteEspecialidad);


module.exports = router;