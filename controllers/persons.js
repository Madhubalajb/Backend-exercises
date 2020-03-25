const personsRouter = require('express').Router()
const Person = require("../models/person")
const User = require('../models/User')
const jwt = require('jsonwebtoken')

personsRouter.get('/', async (request, response) => {
    try {
        const persons = await Person.find({}).populate('user', {username: 1, name: 1})

        //populating user -- 'user' is the field in User model.
        
        response.json(persons)
    } 
    catch (error) {
        response.status(500).json({message: error}) //Internal server error
    }  
})

personsRouter.get('/:id', getPerson, (request, response) => {
    response.json(response.person)
})

personsRouter.post('/', async (request, response) => {
    const body = request.body

    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if(!request.token || !decodedToken.id) {
        return response.status(401).json({message: 'Token missing or Invalid'})
    }

    const user = await User.findById(decodedToken.id)

    const person = new Person({
        name: body.name,
        number: body.number
    })
    try {
        const newPerson = await person.save()
        user.persons = user.persons.concat(newPerson._id)
        await user.save()   
        response.status(201).json(newPerson) //Created
    }
    catch(error) {
        response.status(400).json({message: error}) //Bad Request
    }
})

personsRouter.delete('/:id', getPerson, async(request, response) => {
    try {
        await response.person.remove()
        response.json({message: 'Deleted Person'})
    }
    catch(error) {
        response.status(500).json({message: error}) //Internal server error
    }
})

personsRouter.put('/:id', getPerson, async (request, response) => {
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
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    let person
    try {
        const user = await User.findById(decodedToken.id)
        person = await Person.findById(request.params.id)

        if(person.user.toString() === user.id.toString()) {
            response.person = person
        }
        else
            return response.status(404).json({message: 'Cannot find person'}) //Not Found
    }
    catch(error) {
        next(error)
    }
    next()
}

module.exports = personsRouter