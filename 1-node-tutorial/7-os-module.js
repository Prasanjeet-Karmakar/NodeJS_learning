const os = require('os')
console.log(os.hostname())
console.log(os.userInfo()); // Returns objects with the details.
console.log(os.uptime() / (60 * 60));

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);
