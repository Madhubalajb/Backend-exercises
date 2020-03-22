const bcrypt = require('bcryptjs')
const userRouter = require('express').Router()
const User = require('../models/User')

userRouter.get('/', async (request, response) => {
    const users = await User.find({})

    response.json(users.map(user => user.toJSON()))
})

userRouter.post('/', async (request, response) => {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const newUser = new User({
        username: body.username,
        name: body.name,
        passwordHash
    })

    const savedUser = await newUser.save()
    response.status(201).json(savedUser)
})

module.exports = userRouter