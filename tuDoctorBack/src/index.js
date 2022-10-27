const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {mongoose} = require('./database');

//Initializations
const app = express()

//Settings
app.set('port', process.env.PORT || 3000)

//Middelwares
app.use(morgan('dev'));
app.use(express.json());

//Global Variables

//Routes
app.use('/api/usuarios',require('./routes/user_routes'));
app.use('/api/login',require('./routes/auth'));

//Static Files
app.use(express.static(path.join(__dirname,'public')))

//Server is listening
app.listen(app.get('port'), () => {
    console.log(`Servidor ejecutandose en ${app.get('port')}`)
})
