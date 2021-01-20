var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;
rl.on('close', () => { console.log(total); process.exit(0); });

rl.on('line', function (data) {
    data = data.split(' ');
    const peoples = parseInt(data[0]) 
    total = Math.ceil(peoples/2)
})
