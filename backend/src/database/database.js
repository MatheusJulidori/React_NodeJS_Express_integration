const mongoose = require('mongoose');

function connect(){
    mongoose.connect('mongodb+srv://cp2Dev:70ttM6FF3DRbnAyN@cp2.841pc0w.mongodb.net/?retryWrites=true&w=majority')

    const db = mongoose.connection;

    db.once('open', () => {
        console.log('Connected to MongoDB');
    });

    db.on('error', (err) => {
        console.log('Error: ' + err);
    });

}

module.exports = { connect };
