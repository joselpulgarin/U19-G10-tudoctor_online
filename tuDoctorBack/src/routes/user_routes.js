const  {hashSync , genSaltSync} = require('bcryptjs');
const express = require('express');
const router = express.Router();
const usuarioDb = require('../models/user');
const { verificarToken } = require('../middleware/seguridad');
const {getUsuarios, getUsuario, saveUsuario, updateUsuario, deleteUsuario} = require('../controllers/user');

router.get('/', getUsuarios);

router.get('/:id', getUsuario);

router.post('/', saveUsuario);

router.put('/', updateUsuario);

router.delete('/:id', deleteUsuario);


module.exports = router;