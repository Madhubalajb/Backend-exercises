const express = require('express')
const router = express.Router()
const Person = require("../models/person")

//Getting all persons
router.get('/', async (request, response) => {
    try {
        const persons = await Person.find()
        response.json(persons)
    } 
    catch (error) {
        response.status(500).json({message: error})
    }  
})

//Getting specific person
router.get('/:id', getPerson, (request, response) => {
    response.json(response.person)
})

//Creating a perosn
router.post('/', async (request, response) => {
    const person = new Person({
        name: request.body.name,
        number: request.body.number
    })
    try {
        const newPerson = await Person.save()
        response.status(201).json(newPerson)
    }
    catch(error) {
        response.status(400).json({message: error})
    }
})

//Deleting a person
router.delete('/:id', getPerson, async(request, response) => {
    try {
        await response.person.remove()
        response.json({message: 'Deleted Person'})
    }
    catch(error) {
        response.status(500).json({message: error})
    }
})

//Updating a person
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
            return response.status(404).json({message: 'Cannot find person'})
    }
    catch(error) {
        return response.status(500).json({message: error})
    }
    response.person = person
    next()
}

module.exports = router