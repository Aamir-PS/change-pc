const tableModel = require("../module/module");

exports.createTable = async (req, res) => {
    try{
        const createTable = new tableModel(req.body);
        await createTable.save();
        res.status(201).json({msg: "Table worck...", data:createTable})
    } catch(e){
        res.status(400).json({msg: 'error due to', e})
    }
};

exports.AlLTableById = async (req, res) => {
    try{
        const allbyid = await tableModel.find();
        res.status(200).json({msg: `All Table-list fetched Successfully`, data:allbyid,});
    } catch(e){
        res.status(400).json({msg: 'error due to', e});
    }
}
