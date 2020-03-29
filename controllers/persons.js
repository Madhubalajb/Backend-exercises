const personsRouter = require('express').Router()
const Person = require("../models/person")
const User = require('../models/User')
const jwt = require('jsonwebtoken')

personsRouter.get('/', async (request, response, next) => {
    try {
        const persons = await Person.find({}).populate('user', {username: 1, name: 1})

        //populating user -- 'user' is the field in User model.
        
        response.json(persons)
    } 
    catch (exception) {
        next(exception)
    }  
})

personsRouter.get('/:id', async (request, response, next) => {
    try {
        const person = await Person.findById(request.params.id)
        response.json(person)
    }
    catch (exception){
        next(exception)
    }
})

personsRouter.post('/', async(request, response, next) => {
    const body = request.body

    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if(!request.token || !decodedToken.id) {
        return response.status(401).json({message: 'Token missing or Invalid'})
    }

    const user = await User.findById(decodedToken.id)

    const person = new Person({
        name: body.name,
        number: body.number,
        user: user._id
    })
    try {
        const newPerson = await person.save()
        user.persons = user.persons.concat(newPerson._id)
        await user.save()   
        response.status(201).json(newPerson) //Created
    }
    catch (exception) {
        next(exception)
    }
})

personsRouter.delete('/:id', async(request, response, next) => {
    try {
        const decodedToken = jwt.verify(request.token, process.env.SECRET)

       if(!request.token || !decodedToken.id) {
            return response.status(401).json({message: 'Token missing or Invalid'})
        }

        const user = await User.findById(decodedToken.id)
        const person = await Person.findById(request.params.id)

       if(person.user.toString() === user.id.toString()) {
           await Person.findByIdAndRemove(request.params.id)
           response.status(201).end()
       }
       else {
           response.status(401).end()
       }
    }
    catch (exception) {
        next(exception)
    }
})

personsRouter.put('/:id', async(request, response, next) => {
    try {
        const body = request.body
        const decodedToken = jwt.verify(request.token, process.env.SECRET)
        if(!request.token || !decodedToken.id) {
            return response.status(401).json({message: 'Token missing or Invalid'})
        }

        const user = await User.findById(decodedToken.id)
        const person = await Person.findById(request.params.id)

       if(person.user.toString() === user.id.toString()) {
        
        const updatePerson = {
            name: body.name,
            number: body.number,
            user: user.id
        }
        const updatedPerson = await Person.findByIdAndUpdate(request.params.id, updatePerson, {
            new: true
        })
        response.status(201).json(updatedPerson) 
       }
    }
    catch (exception) {
        next(exception)
    }
})

module.exports = personsRouter