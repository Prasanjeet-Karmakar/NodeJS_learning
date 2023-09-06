// Read Evaluate Print Loop (REPL)
// typing node in bash we can do scripting in terminal itself.
// But if we want the same functionality from our js file we use REPL

const repl = require('repl')

const local = repl.start();
console.log("Repl has started");

local.on('exit', () => {
    console.log('Exiting Repl');
    process.exit(0);
})