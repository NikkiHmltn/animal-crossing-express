const mongoose = require('mongoose')
require("./models/Villager")
let Villager = mongoose.model("Villager")

const db = mongoose.connection

mongoose.connect('mongodb://localhost/animalCrossing', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

db.on('connected', () => {
    console.log(`Sending you those groovey vibes from ${db.host}:${db.port}`)
})

const villagerRory = new Villager({
    name: "Rory",
    species: "Lion",
    birhtday: "August 7th",
    personality: "Jock",
    img: "https://static.wikia.nocookie.net/animalcrossing/images/d/db/Rory_NH.png"
})

const villagerPashmina = new Villager({
    name: "Pashmina",
    species: "Goat",
    birthday: "December 26th",
    personality: "Uchi",
    img: "https://static.wikia.nocookie.net/animalcrossing/images/3/3e/Pashmina_NH.png"
})

villagerRory.save((err) => {
    if(err) console.log(err)
    else console.log("Rory saved!")
})

villagerPashmina.save((err) => {
    if(err) console.log(err)
    else console.log("Pashmina saved!")
})