const mongoose = require('mongoose');
mongoose.set('debug');
mongoose.connect('mongodb://localhost/inventory-api', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.Promise = global.Promise;
//console.log(mongoose)
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(' Sucessfully connected to local mongodb datase...')
})

module.exports.Inventory = require('./inventory')