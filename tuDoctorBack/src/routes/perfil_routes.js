const express = require('express');
const router = express.Router();
const perfilDb = require('../models/perfil');
const { verificarToken } = require('../middleware/seguridad');
const {getPerfiles, getPerfil, savePerfil, updatePerfil, deletePerfil } = require('../controllers/perfil');

router.get('/',[verificarToken], getPerfiles);

router.get('/:id',[verificarToken], getPerfil);

router.post('/',[verificarToken], savePerfil);

router.put('/',[verificarToken], updatePerfil);

router.delete('/:id',[verificarToken], deletePerfil);


module.exports = router;