const express = require("express")
const app = express()
const PORT = 3001

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})