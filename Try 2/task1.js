var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let price = 0;
rl.on('close', () => { console.log(price); process.exit(0); });

rl.on('line', function (data) {
    data = data.split(' ');
    const abonentPlata = parseInt(data[0]) // абонент плата
    const baseTrafic = parseInt(data[1]) // polucahet trafica
    const mbBeforePrice = parseInt(data[2])
    const total = parseInt(data[3])

    if (total > baseTrafic) {
        const count =total - baseTrafic
        price += abonentPlata + (mbBeforePrice * count)
    } else {
        price = abonentPlata
    }
})

//ok