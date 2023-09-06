const express = require('express')
const app = express()

const logger = require('./logger')
const authorize = require('./authorize')
// app.use -> usage of middleware when we need to call the middleware in every route.\
// when our middleware is been exported from other module.

// app.use(logger) // Placing of middleware matters as if we place it after
// the get of home url, then it will not work for the home page.

// app.use('/api', logger) // Specifies for which url the middleware should work.

// Using more than 1 middleware:
app.use([logger, authorize])

app.get('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1>')
})

// app.use(logger)
app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/products', (req, res) => {
    res.send('Products page')
}) 

app.get('/products/:productID', (req, res) => {
    const productID = req.params.productID
    console.log(req.params);
    res.status(200).send(`Product Id : ${Number(productID)}`)
})

app.listen(5000, () => {
    console.log('Server is listening at port 5000');
})