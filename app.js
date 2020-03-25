const config = require('./utils/config')
const personsRouter = require('./controllers/persons')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
console.log(config.SECRET)
console.log(`Connecting to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => {
        console.log(`Connected to MongoDB`)
    })
    .catch(error => {
        console.log(`Error in connection to MongoDB- ${error}`)
    })

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())

app.use('/api/persons', personsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

module.exports = app