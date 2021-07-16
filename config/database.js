const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect('mongodb://localhost/animalCrossing', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

db.on('connected', () => {
    console.log(`Sending you those groovey vibes from ${db.host}:${db.port}`)
})