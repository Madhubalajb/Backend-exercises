require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT
const Person = require("./models/person")

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(cors())

//const morgan = require("morgan")
//app.use(morgan(':method :url :status :response-time ms - :body - :res[content-length] - :req[content-length]'))
// morgan.token('body', (request, response) => {
//     return JSON.stringify(request.body)
// })

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons.map(person => person.toJSON()))
    })
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person =>{
        response.json(person.toJSON())
    })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    //const filter = persons.some(person => person.name === body.name)
    if (!body.name) {
        return response.status(400).json({
            error: "Name is missing"
        })
    }
    if (!body.number) {
        return response.status(400).json({
            error: "Number is missing"
        })
    }
    // if (filter) {
    //     return response.status(400).json({
    //         error: "Name should be unique"
    //     })
    // }
    const person = new Person({
        name: body.name,
        number: body.number
    })
    person.save().then(savedPerson => {
        response.json(savedPerson.toJSON())
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})