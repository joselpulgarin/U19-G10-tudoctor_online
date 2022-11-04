const { response } = require("express");
const medicoDb = require('../models/medico');
const usuarioDb = require('../models/user');
const { hashSync, genSaltSync } = require('bcryptjs');

async function getMedicos(req = request, res = response) {
    const medicos = await medicoDb.find().populate("usuarioId").populate("especialidad");
    res.json(medicos);
}

async function getMedico(req = request, res = response) {
    const medico = await medicoDb.findById(req.params.id).populate("usuarioId").populate("especialidad");
    if (medico){
        res.json(medico);
    }else{
        res.status(500).json({ Error: 'Medico no existe!' });
    }
}

async function saveMedico(req = request, res = response) {
    const medico = req.body;
    const { usuarioId } = medico;
    const usrEncontrado = await medicoDb.findOne({ usuarioId });
    if (usrEncontrado) {
        res.status(500).json({ Error: 'Medico ya existe!' });
    } else {
        const mediDb = new medicoDb(medico);
        mediDb.save()
            .then(() => res.status(200).json({ msg: 'Medico añadido!' }))
            .catch(err => res.status(400).json(`Error: ${err}`));
    }
}

async function updateMedico(req = request, res = response) {
    const medico = req.body;
    const usrDb = new medicoDb(medico);
    medicoDb.findByIdAndUpdate(usrDb._id, usrDb)
        .then(() => res.status(200).json({ msg: 'Medico Actualizado!' }))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

async function deleteMedico(req = request, res = response) {
    medicoDb.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).json({ msg: 'Medico Eliminado!' }))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

module.exports = { getMedicos, getMedico, saveMedico, updateMedico, deleteMedico }


