const Villager = require('../models/villager')

let moveVillager = (req, res) => {
    res.render("addVillager")
}


let findOneVillager = (req, res) => {
    Villager.findOne({name: req.params.name}, (err, oneVillager) => {
        res.render('villagerDetails', {
            villager: oneVillager
        })
    })
}

let addVillager = (req, res) => {
    let singleVillager = new Villager(req.body)
    singleVillager.save((err) => {
        if(err) console.log(err)
        res.redirect("/")
    })
}  

module.exports = {
    findOneVillager,
    moveVillager,
    addVillager,
}