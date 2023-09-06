const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    const fileStream = fs.createReadStream('./content/largeFileSync.txt', 'utf-8');
    fileStream.on('open', () => {
        fileStream.pipe(response)
    })
    fileStream.on('error', (err) => {
        response.end(err)
    })
})

server.listen(3000)
