require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {mongoose} = require('./database');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000)

//Middelwares
app.use(morgan('dev'));
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Global Variables

//Routes
app.use('/api/login',require('./routes/auth'));
app.use('/api/usuarios',require('./routes/user_routes'));
app.use('/api/medicos',require('./routes/medico_routes'));
app.use('/api/pacientes',require('./routes/paciente_routes'));
app.use('/api/especialidades',require('./routes/especialidad_routes'));

//Static Files
app.use(express.static(path.join(__dirname,'public')))

//Server is listening
app.listen(app.get('port'), () => {
    console.log(`Servidor ejecutandose en ${app.get('port')}`)
})
