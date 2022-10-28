const  {hashSync , genSaltSync} = require('bcryptjs');
const express = require('express');
const router = express.Router();
const usuarioDb = require('../models/user');
const { verificarToken } = require('../middleware/seguridad');
const {getUsuarios, getUsuario, saveUsuario, updateUsuario, deleteUsuario} = require('../controllers/user');

router.get('/',[verificarToken], getUsuarios);

router.get('/:id',[verificarToken], getUsuario);

router.post('/',[verificarToken], saveUsuario);

router.put('/',[verificarToken], updateUsuario);

router.delete('/:id',[verificarToken], deleteUsuario);


module.exports = router;