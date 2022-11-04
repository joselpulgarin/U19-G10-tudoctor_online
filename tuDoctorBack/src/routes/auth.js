const express = require('express');
const router = express.Router();
const { sign } = require('jsonwebtoken');
const usuarioDb = require('../models/user')
const  {compareSync} = require('bcryptjs');

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    //Validacion de usuario Password
    const usuario = await usuarioDb.findOne({ email });
    if (usuario &&  compareSync(password, usuario.password) ) {
        sign({ id: usuario._id }, process.env.CLAVE_SECRETA , (error, token) => {
            if (error) {
                res.status(500).json({ msg: 'Error al generar el token' });
            } else {
                res.status(200).json({ auth: true, token });
            }
        });
    } else {
        res.status(500).json({ msg: 'Usuario o contraseña incorrectos' });
    }
})

module.exports = router; 
