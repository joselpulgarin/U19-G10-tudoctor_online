require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {mongoose} = require('./database');
const cors = require('cors')

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000)

//Middelwares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

//Global Variables

//Routes
app.use('/api/login',require('./routes/auth'));
app.use('/api/usuarios',require('./routes/user_routes'));
app.use('/api/medicos',require('./routes/medico_routes'));
app.use('/api/pacientes',require('./routes/paciente_routes'));
app.use('/api/especialidades',require('./routes/especialidad_routes'));
app.use('/api/perfiles',require('./routes/perfil_routes'));

//Static Files
app.use(express.static(path.join(__dirname,'public')))

//Server is listening
app.listen(app.get('port'), () => {
    console.log(`Servidor ejecutandose en ${app.get('port')}`)
})
