const mongoose = require('mongoose');

const tableSCHEMA = mongoose.Schema({
    name :{
        required: true,
        type: String,
    },
    surname :{
        required: true,
        type: String,
    }
},{timestamps:true});

const tableModel=mongoose.model('tableModel',tableSCHEMA); //aa ek bul kari me model -> jagaye Model laykhu small jagaye kapital thay gayu

module.exports=tableModel;