const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('./index.html')

// if the page consists of styling and js, then they are not functionable since
// only the html file is loaded.
// Each and every external is needed to be setup manually in node.
// This is where express comes into picture.
http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, 'GET', { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    }
    else if (req.url === '/about') {
        res.end('Welcome to the about page.')
    }
}).listen(3000);