const express = require('express')
const {students} = require('./data')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query); // return queries provided in the url.
    const { search, age } = req.query;
    let sortedStudents = [...students];
    if (search) {
        sortedStudents = sortedStudents.filter((student) => {
            return student.name.startsWith(search)
        })
    }

    if (age) {
        sortedStudents = sortedStudents.filter((student) => student.age === Number(age))
    }

    res.status(200).json(sortedStudents)
})

app.listen(5000, () => {
    console.log('Server is running at port 5000');
})