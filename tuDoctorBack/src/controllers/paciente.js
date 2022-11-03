const { response } = require("express");
const pacienteDb = require('../models/paciente');
const { hashSync, genSaltSync } = require('bcryptjs');

async function getPacientes(req = request, res = response) {
    const pacientes = await pacienteDb.find().populate("usuarioId");
    res.json(pacientes);
}

async function getPaciente(req = request, res = response) {
    const paciente = await pacienteDb.findById(req.params.id).populate("usuarioId");
    if (paciente){
        res.json(paciente);
    }else{
        res.status(500).json({ Error: 'Paciente no existe!' });
    }
}

async function savePaciente(req = request, res = response) {
    const paciente = req.body;
    const { usuarioId } = paciente;
    const usrEncontrado = await pacienteDb.findOne({ usuarioId });
    if (usrEncontrado) {
        res.status(500).json({ Error: 'paciente ya existe!' });
    } else {
        const mediDb = new pacienteDb(paciente);
        mediDb.save()
            .then(() => res.status(200).json({ msg: 'Paciente añadido!' }))
            .catch(err => res.status(400).json(`Error: ${err}`));
    }
}

async function updatePaciente(req = request, res = response) {
    const paciente = req.body;
    const usrDb = new pacienteDb(paciente);
    pacienteDb.findByIdAndUpdate(usrDb._id, usrDb)
        .then(() => res.status(200).json({ msg: 'Paciente Actualizado!' }))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

async function deletePaciente(req = request, res = response) {
    pacienteDb.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).json({ msg: 'Paciente Eliminado!' }))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

module.exports = { getPacientes, getPaciente, savePaciente, updatePaciente, deletePaciente }


