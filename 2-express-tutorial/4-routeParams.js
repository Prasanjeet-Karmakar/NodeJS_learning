// Fetching api (JSON data)
const express = require('express')
const {students} = require('./data')
const app = express()
app.get('/', (req, res) => {
    // res.status(200).json([{name: 'connor'}, {name: 'alex'}])
    res.send('<h1>Home Page</h1><a href="/api/products/">Products</a>')
})

// app.get('/api/products', (req, res) => {
//     const newStudents = students.map(student => {
//         const { name, grade } = student;
//         return { name, grade }
//     })

//     res.json(newStudents)
// })

app.get('/api/products/:productID', (req, res) => {
    // console.log(req)
    console.log(req.params); // return always in string therefore change acc to the req type.
    const { productID } = req.params;
    const resStudent = students.find((student) => student.id === Number(productID))
    if(resStudent === undefined) res.status(404).send('Product does not exist')
    res.json(resStudent)
})

app.listen(5000, () => {
    console.log(`Server is listening at port 5000`);
})

