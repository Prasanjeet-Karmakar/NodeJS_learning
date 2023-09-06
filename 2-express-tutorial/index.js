const express = require('express')
const app = express()
// let { students } = require('./data')
// Routes for the application:
const students = require('./routes/students')
const auth = require('./routes/auth')

// static assets
// app.use(express.static('./2-express-tutorial/methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

// Using routers
// Routers helps to maintain the different routes from seperate files.
// It increases the code readiblity of main file.
app.use('/api/students', students)
app.use('/login', auth)

app.listen(5000, () => {
    console.log('Server is listening at port 5000');
})