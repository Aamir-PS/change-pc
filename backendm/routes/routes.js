const express=require('express');
const { createTable, AllTableById, TableById, TableByIdAndDelete, TableByIdAndUpdate } = require('../Controllers/controller.js');

const router=express.Router();

router.post("/",createTable);
router.get("/",AllTableById);
router.get("/:id",TableById);
router.patch("/:id",TableByIdAndUpdate);
router.delete("/:id",TableByIdAndDelete);

module.exports=router;