var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('close', () => { console.log(count(dishes)); process.exit(0); });

let dishes = []
function count() {
    first = dishes.shift()
    let tiket = 0
    let price = 0;
    dishes.forEach(el => {
        if (el > 100) {
            tiket++
        }
    })
    array = dishes.filter(el => el < 101)
    let big = dishes.filter(el => el > 100)
    while (tiket > 0) {
        current = Math.max.apply(null, array)
        array = array.filter(el => el !== current)
        tiket = tiket - 1
    }

    array.forEach(el => {
        price += el
    });
    big.forEach(el => {
        price += el
    });
    return price
}
rl.on('line', function (data) {
    data = data.split(' ');
    dishes.push(parseInt(data[0]))
})

