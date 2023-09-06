// readFile and writeFile reads and writes the whole file while stream does not.
// 
const { createReadStream } = require('fs')

const stream = createReadStream('./content/largeFileSync.txt', {highWaterMark: 10000})
// Reads data in chunks of data. 
// default 64kb buffer but we can control it.
stream.on('data', (result) => {
    console.log(result);
})