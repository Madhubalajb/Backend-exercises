const mongoose = require('mongoose')

const password = process.argv[2]
const url = `mongodb+srv://Madhubala:${password}@cluster0-v1oiw.mongodb.net/phonebook?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true })
const personSchema = new mongoose.Schema({
    name: String,
    number: Number
})
const Person = mongoose.model('Person', personSchema)

if(process.argv.length < 3) {
    console.log("give password as argument")
    process.exit(1)
}

if(process.argv.length === 3) {
    Person.find({}).then(result => {
        console.log("phonebook:")
        result.forEach(person => {
            console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
}

if(process.argv.length === 5) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })
    person.save().then(result => {
        console.log(`added ${result.name} number ${result.number} to phonebook`)
        mongoose.connection.close();
    })
}

