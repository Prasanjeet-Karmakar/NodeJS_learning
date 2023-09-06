const express = require('express')
const app = express()

// Middleware -> functions that execute during the request.
// It can access to both request and response.
// Middleware are everywhere in express.
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    next() // To pass to next middleware or you can just res.send()
}

app.get('/', logger, (req, res) => {
    res.status(200).send('Hello world')
})

app.get('/about', logger, (req, res) => {
    res.send('About page')
})

app.listen(5000, () => {
    console.log('Server is listening at port 5000');
})