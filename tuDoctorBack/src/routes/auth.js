const express = require('express');
const router = express.Router();
const { sign } = require('jsonwebtoken');
const usuarioDb = require('../models/user')

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    console.log(email + ' : ' + password);

    //Validacion de usuario Password
    const usuario = await usuarioDb.findOne({ email });
    if (usuario && password === usuario.password) {

        sign({ id: usuario._id }, "C4G10-tud0ct0r0nlin3", (error, token) => {
            if (error) {
                res.status(500).json({ msg: 'Error al generar el token' });
            } else {
                res.status(500).json({ auth: true, token });
            }
        });
    } else {
        res.status(500).json({ msg: 'Usuario o contraseña incorrectos' });
    }
})

module.exports = router; 
