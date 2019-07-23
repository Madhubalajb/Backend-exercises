const env = String(process.env.NODE_ENV)
if (env != 'production') {
    require('dotenv').config()
}

const express = require("express")
const cors = require("cors")
const personRoute = require('./routes/persons')
const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use('/api/persons', personRoute)

//const morgan = require("morgan")
//app.use(morgan(':method :url :status :response-time ms - :body - :res[content-length] - :req[content-length]'))
// morgan.token('body', (request, response) => {
//     return JSON.stringify(request.body) })

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})