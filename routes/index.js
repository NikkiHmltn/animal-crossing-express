const express = require("express")
const router = express.Router()
const indexControl = require("../controllers/index")

router.get("/", indexControl.index)

module.exports = router