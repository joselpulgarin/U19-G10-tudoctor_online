const { response } = require("express");
const usuarioDb = require('../models/user');
const { hashSync, genSaltSync } = require('bcryptjs');

async function getUsuarios(req = request, res = response) {
    const usuarios = await usuarioDb.find();
    res.json(usuarios);
}

async function getUsuario(req = request, res = response) {
    console.log(req.params.id);
    const usuario = await usuarioDb.findById(req.params.id);
    res.json(usuario);
}

async function saveUsuario(req = request, res = response) {
    const usuario = req.body;
    const { numDocumento } = usuario;
    const usrEncontrado = await usuarioDb.findOne({ numDocumento });
    if (usrEncontrado) {
        res.status(500).json({ Error: 'Usuario ya existe!' });
    } else {
        const usrDb = new usuarioDb(usuario);
        usrDb.password = hashSync(usrDb.password, genSaltSync(10));
        usrDb.save()
            .then(() => res.status(200).json({ msg: 'Usuario añadido!' }))
            .catch(err => res.status(400).json(`Error: ${err}`));
    }
}

async function updateUsuario(req = request, res = response) {
    const usuario = req.body;
    const usrDb = new usuarioDb(usuario);
    usrDb.password = hashSync(usrDb.password, genSaltSync(10));
    usuarioDb.findByIdAndUpdate(usrDb._id, usrDb)
        .then(() => res.status(200).json({ msg: 'Usuario Actualizado!' }))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

async function deleteUsuario(req = request, res = response) {
    usuarioDb.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).json({ msg: 'Usuario Eliminado!' }))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

module.exports = { getUsuarios, getUsuario, saveUsuario, updateUsuario, deleteUsuario }


