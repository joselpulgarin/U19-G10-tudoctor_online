const { response } = require("express");
const perfilDb = require('../models/perfil');
const usuarioDb = require('../models/user');
const { hashSync, genSaltSync } = require('bcryptjs');

async function getPerfiles(req = request, res = response) {
    const perfils = await perfilDb.find();
    res.json(perfils);
}

async function getPerfil(req = request, res = response) {
    const perfil = await perfilDb.findById(req.params.id);
    if (perfil){
        res.json(perfil);
    }else{
        res.status(500).json({ Error: 'Perfil no existe!' });
    }
}

async function savePerfil(req = request, res = response) {
    const perfil = req.body;
    console.log(perfil);
    const { nombrePerfil } = perfil;
    const usrEncontrado = await perfilDb.findOne({ nombrePerfil });
    if (usrEncontrado) {
        res.status(500).json({ Error: 'Perfil ya existe!' });
    } else {
        const mediDb = new perfilDb(perfil);
        mediDb.save()
            .then(() => res.status(200).json({ msg: 'Perfil añadido!' }))
            .catch(err => res.status(400).json(`Error: ${err}`));
    }
}

async function updatePerfil(req = request, res = response) {
    const perfil = req.body;
    const usrDb = new perfilDb(perfil);
    perfilDb.findByIdAndUpdate(usrDb._id, usrDb)
        .then(() => res.status(200).json({ msg: 'Perfil Actualizado!' }))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

async function deletePerfil(req = request, res = response) {
    perfilDb.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).json({ msg: 'Perfil Eliminado!' }))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

module.exports = { getPerfiles, getPerfil, savePerfil, updatePerfil, deletePerfil }


