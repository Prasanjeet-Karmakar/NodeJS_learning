const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware. 
app.use(express.static('./public')) // Without this middleware we face the same issue as node
// This will use static components from public folder.

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './index.html'))
//      adding to static assets
//      SSR
// })


app.all('*', (req, res) => {
    res.status(400).end('Resource not found')
})

app.listen(5000, () => {
    console.log(`Server is listening at 5000`);
})