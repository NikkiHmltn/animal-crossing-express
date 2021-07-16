const Villager = require('../models/villager');

let index = (req, res) => {
    Villager.find({}, (err, foundVillagers) => {
        console.log(foundVillagers)
        if(err) console.log(err)
        else {
        res.render('index', {
            villagers: foundVillagers
        })
        }
    })
}



module.exports = {
    index
}