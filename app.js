const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/TodoDB'
const app = express()
mongoose.connect(url, {useNewUrlParser:true}) 
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})
app.use(express.json())

const noteRouter = require('./routes/notes')
app.use('/notes',noteRouter)

app.listen(9000, () => {
    console.log('Server started')
})