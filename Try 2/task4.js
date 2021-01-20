var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let price = 0;
rl.on('close', () => { console.log(price); process.exit(0); });

rl.on('line', function (data) {
    data = data.split(' ');
  
})

//null

// 10 5
// 3.0 2.5 1.0 2.5 1.0 1.5 3.0 1.5