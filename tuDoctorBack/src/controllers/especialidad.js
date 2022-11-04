const { response } = require("express");
const especialidadDb = require('../models/especialidad');
const usuarioDb = require('../models/user');
const { hashSync, genSaltSync } = require('bcryptjs');

async function getEspecialidades(req = request, res = response) {
    const especialidads = await especialidadDb.find();
    res.json(especialidads);
}

async function getEspecialidad(req = request, res = response) {
    const especialidad = await especialidadDb.findById(req.params.id);
    if (especialidad){
        res.json(especialidad);
    }else{
        res.status(500).json({ Error: 'Especialidad no existe!' });
    }
}

async function saveEspecialidad(req = request, res = response) {
    const especialidad = req.body;
    const { nombre } = especialidad;
    const usrEncontrado = await especialidadDb.findOne({ nombre });
    if (usrEncontrado) {
        res.status(500).json({ Error: 'Especialidad ya existe!' });
    } else {
        const mediDb = new especialidadDb(especialidad);
        mediDb.save()
            .then(() => res.status(200).json({ msg: 'Especialidad añadido!' }))
            .catch(err => res.status(400).json(`Error: ${err}`));
    }
}

async function updateEspecialidad(req = request, res = response) {
    const especialidad = req.body;
    const usrDb = new especialidadDb(especialidad);
    especialidadDb.findByIdAndUpdate(usrDb._id, usrDb)
        .then(() => res.status(200).json({ msg: 'Especialidad Actualizado!' }))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

async function deleteEspecialidad(req = request, res = response) {
    especialidadDb.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).json({ msg: 'Especialidad Eliminado!' }))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

module.exports = { getEspecialidades, getEspecialidad, saveEspecialidad, updateEspecialidad, deleteEspecialidad }


