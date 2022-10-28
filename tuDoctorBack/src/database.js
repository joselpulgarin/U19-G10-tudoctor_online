const mongoose = require('mongoose');

mongoose.connect(process.env.DB_MONGO)
.then(db => console.log('Conectado a la BD'))
.catch(err => console.error(err));

module.exports = mongoose;
