const { readFile, writeFile } = require('fs')
const util = require('util')

// const first = () => {
//     return new Promise((resolve, reject) => {
//         readFile('./content/first.txt', 'utf-8', (err, data) => {
//             if (err) {
//                 reject(arr)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }

// 1st way:
// first()
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))


// 2nd way:
// const getText = (pathText) => {
    //     return new Promise((res, rej) => {
        //         readFile(pathText, 'utf-8', (error, data) => {
            //             if (error) {
                //                 rej(error)
                //             }
                //             else {
                    //                 res(data)
                    //             }
                    //         })
                    //     })
                    // }
                    
                    // const getFile = async () => {
                        //     try {
                            //         const first = await getText('./content/first.txt')
                            //         const second = await getText('./content/second.txt')
                            //         console.log(`${first} ${second}`);
                            //     }
                            //     catch (error) {
                                //         console.log(error);
//     }
// }

// getFile()

// 3rd way.
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    const first = await readFilePromise('./content/first.txt', 'utf-8')
    const second = await readFilePromise('./content/second.txt', 'utf-8')
    console.log(`${first} ${second}`);
    await writeFilePromise('./content/writeFileAsync.txt', `This is the result: ${first} ${second}`)
}

start()
