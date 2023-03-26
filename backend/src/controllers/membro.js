const MembroModel = require('../models/membro');

async function read(req, res){

    const {id} = req.params;
    const obj = id ? {_id: id} : null;
    const membro = await MembroModel.find(obj);
    res.send(membro);

    return res.status(200);
}

async function insert(req, res){

    const {nome, cargo, tempoDeCP2} = req.body;

    const membro = new MembroModel({nome, cargo, tempoDeCP2});

    await membro.save();

    return res.status(201).send(membro);

}

module.exports = {read, insert};