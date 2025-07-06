const tableModel = require("../models/model")

exports.createTable=async (req,res)=>{
    try{
           const { name, surname } = req.body;

        const existing = await tableModel.findOne({ name });
        const existing2 = await tableModel.findOne({ surname });

        if (existing || existing2) {
            return res.status(409).json({
                msg: "This name and surname already exist. Duplicate data not allowed!",
            });
        }

        const createTable=new tableModel(req.body);
        await createTable.save();

        res.status(201).json({
            msg:"Table Created Successfully",
            data:createTable,
        })
    }
    catch(error){
        res.status(400).json({
            msg:"error due to",error,
        })
    }
}

exports.AllTableById=async (req,res)=>{
    try{
        const allbyid= await tableModel.find();

           res.status(200).json({
            msg:"All Table-list fetched  Successfully",
            data:allbyid,
        })

    }
      catch(error){
        res.status(400).json({
            msg:"error due to",error,
        })
    }
}
exports.TableById=async (req,res)=>{
    try{
        const tableByID= await tableModel.findById(req.params.id);

        if(!tableByID){
            res.status(400).json({
                msg:"Please provide Valid ID🤡🤡🤡"
            })
        }
        else{
           res.status(200).json({
            msg:"Table found Successfully",
            data:tableByID,
        })
    }
    
    }
      catch(error){
        res.status(400).json({
            msg:"error due to",error,
        })
    }
}
exports.TableByIdAndDelete=async (req,res)=>{
    try{
        const findDelete= await tableModel.findByIdAndDelete(req.params.id);

          
        if(!findDelete){
            res.status(400).json({
                msg:"Please provide Valid ID🤡🤡🤡"
            })
        }
        else{
           res.status(200).json({
            msg:"😎Table Deleted Successfully😎",
        })

    }
}
      catch(error){
        res.status(400).json({
            msg:"error due to",error,
        })
    }
}

exports.TableByIdAndUpdate=async (req,res)=>{
    try{
        const tableByIDAndUPdate= await tableModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!tableByIDAndUPdate){
            res.status(400).json({
                msg:"Please provide Valid ID🤡🤡🤡"
            })
        }
        else{
           res.status(200).json({
            msg:"😃Table Updated Successfully😃",
            data:tableByIDAndUPdate,
        })
        }

    
    }
      catch(error){
        res.status(400).json({
            msg:"error due to",error,
        })
    }
}


// 
// 1. 123
// 2.234
// 3.345
// ------
// 4.123 --> || 369
// 5.123
