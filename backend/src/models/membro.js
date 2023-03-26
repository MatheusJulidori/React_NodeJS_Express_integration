const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    nome: String,
    cargo: String,
    tempoDeCP2: Number
});

const Model = mongoose.model('Membro', schema);

module.exports = Model;