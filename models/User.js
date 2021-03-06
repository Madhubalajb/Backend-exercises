const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 5
    },
    passwordHash: {
        type: String,
        required: true,
        minLength: 5
    },
    persons: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Person'
        }
    ]
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User