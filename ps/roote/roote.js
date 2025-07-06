const express = require('express');
const { createTable, AlLTableById } = require("../controller/controllar");
const router = express.Router();
router.post("/", createTable);
router.get("/", AlLTableById);
module.exports = router

// AlLTableById