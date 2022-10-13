const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/prueba_jp';

mongoose.connect(URI)
.then(db => console.log('Conectado a la BD'))
.catch(err => console.error(err));

module.exports = mongoose;
