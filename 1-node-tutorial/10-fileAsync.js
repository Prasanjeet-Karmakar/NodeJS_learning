const { readFile, writeFile } = require('fs')

// Use Callback function since these are async calls.

// Callback hell -> promise is better option
readFile('./content/first.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(res); // Result buffer so require encoding as 2nd arg
    const first = res;
    readFile('./content/second.txt', 'utf-8', (err, res) => {
        if (err) {
            console.log(err);
        }
        
        const second = res;

        writeFile('./content/resAsync.txt', `Here is the result : ${first} ${second}`, (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(res);
        })
    })
})