const express = require('express');
const router = express.Router()
const villagerControl = require('../controllers/villager')


router.get("/movein", villagerControl.moveVillager)
router.get("/:name", villagerControl.findOneVillager)
router.post("/", villagerControl.addVillager)

module.exports = router;