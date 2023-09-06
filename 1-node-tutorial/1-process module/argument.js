// Access the arguments which are passed during the calling of node ${filename}
console.log(process.argv.slice(2));

process.argv.forEach((arg, index) => {
    console.log(`${index} : ${arg}`);
})