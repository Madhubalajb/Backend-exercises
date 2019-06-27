const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const app = express()
const PORT = 3001

app.use(bodyParser.json())
app.use(morgan('tiny'))

let persons = [
    {
        id: 1,
        name: "Madhubala",
        number: "8907834567"
    },
    {
        id: 2,
        name: "Jayavarshini",
        number: "8345671234"
    },
    {
        id: 3,
        name: "Bharathi",
        number: "9345671234"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Phone Book</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    }
    else {
        response.status(404).end()
    }
})

app.get('/info', (request, response) => {
    const maxId = persons.length
    const date = new Date()
    response.send(`<p>Phonebook has info for ${maxId} people <br> ${date} </p>`)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    const filter = persons.some(person => person.name === body.name)
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
    if (filter) {
        return response.status(400).json({
            error: "Name should be unique"
        })
    }
    const person = {
        id: persons.length + 1,
        name: body.name,
        number: body.number
    }
    persons = persons.concat(person)
    response.json(person)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})