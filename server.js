const express = require("express")

const app = express()
const PORT = 3000
require('./config/database')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

const indexRouter = require('./routes/index')
const villagerRouter = require('./routes/villager')

app.use("/", indexRouter)
app.use("/villager", villagerRouter)

app.listen(PORT || 3000, () =>{
    console.log("Currently playing - KK Slider")
})