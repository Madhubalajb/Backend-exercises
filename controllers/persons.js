const expenseRouter = require('express').router()
const Person = require("../models/Person")

router.get('/', async (request, response) => {
    try {
        const persons = await Person.find()
        response.json(persons)
    } 
    catch (error) {
        response.status(500).json({message: error}) //Internal server error
    }  
})

router.get('/:id', getPerson, (request, response) => {
    response.json(response.person)
})

router.post('/', async (request, response) => {
    const person = new Person({
        name: request.body.name,
        number: request.body.number
    })
    try {
        const newPerson = await person.save()
        response.status(201).json(newPerson) //Created
    }
    catch(error) {
        response.status(400).json({message: error}) //Bad Request
    }
})

router.delete('/:id', getPerson, async(request, response) => {
    try {
        await response.person.remove()
        response.json({message: 'Deleted Person'})
    }
    catch(error) {
        response.status(500).json({message: error}) //Internal server error
    }
})

router.put('/:id', getPerson, async (request, response) => {
    if(request.body.name != null) 
        response.person.name = request.body.name
    if(request.body.number != null)
        response.person.number = request.body.number
    try {
        const updatedPerson = await response.person.save()
        response.json(updatedPerson) 
    }
    catch(error) {
        response.status(400).json({message: error})
    }
})

async function getPerson(request, response, next) {
    let person
    try {
        person = await Person.findById(request.params.id)
        if(person == null)
            return response.status(404).json({message: 'Cannot find person'}) //Not Found
    }
    catch(error) {
        return response.status(500).json({message: error})
    }
    response.person = person
    next()
}

module.exports = expenseRouter