const express = require('express');
const router = express.Router();
const usuarioDb = require('../models/user')

router.get('/', async (req, res) => {
    const usuarios = await usuarioDb.find();
    res.json(usuarios);
})

router.get('/:id', async (req, res) => {
  const usuario = await usuarioDb.findById(req.params.id);
  res.json(usuario);
})


router.post('/', async (req, res) => {
    const usuario = req.body;
    const usrDb = new usuarioDb(usuario);
    console.log(usrDb);
    usrDb.save()
  .then(() => res.status(200).json({msg : 'Usuario añadido!'}))
  .catch(err => res.status(400).json(`Error: ${err}`));
})

router.put('/', async (req, res) => {
  const usuario = req.body;
  const usrDb = new usuarioDb(usuario);
  console.log(usrDb);
  usuarioDb.findByIdAndUpdate(usrDb._id, usrDb)
.then(() => res.status(200).json({msg : 'Usuario Actualizado!'}))
.catch(err => res.status(400).json(`Error: ${err}`));
})

router.delete('/:id', async (req, res) => {
  usuarioDb.findByIdAndRemove(req.params.id)
.then(() => res.status(200).json({msg : 'Usuario Eliminado!'}))
.catch(err => res.status(400).json(`Error: ${err}`));
})


module.exports = router;