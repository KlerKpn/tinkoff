var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = 0
rl.on('close', () => { console.log(total); process.exit(0) })



function cheker(arr) {
    const kek = arr.toString()
    let num = parseInt(kek[0])
    let newArr = []
    for (let i of kek) {
        newArr.push(parseInt(i))
    }
    const bol = newArr.every(x => num === x)
    return bol
}

function getNum(min, max) {
    let sum = []
    if (max.toString().length < 2) {
        for (let i = min; i < max + 1; i++) {
            sum.push(i)
        }
        total = sum.length
        return
    }

    for (let i = min; i < max + 1; i++) {
        if (cheker(i)) {
            total++
        }
    }

    return
}


rl.on('line', function (data) {
    data = data.split(' ')
    getNum(parseInt(data[0]), parseInt(data[1]))
})
