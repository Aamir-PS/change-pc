const mongoose = require('mongoose')
const tableSchema = mongoose.Schema({name: {
name: {
    required: true,
    type: String
},
surname:{
    required: true,
    type: String
}
}}, {timestamps: true})
const tableModel = mongoose.model('tableModel', tableSchema);

module.exports = tableModel;