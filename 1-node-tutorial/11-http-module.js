const http = require('http')
const server = createServer((req, res) => {
    // console.log(req); 
    if (req.url === '/') res.end('Welcome to the home page.')
    else if (req.url === '/about') res.end('About Section')
    else res.end(`<h1>Page Does not exist </h1>`)
})

server.listen(3000);