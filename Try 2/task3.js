var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;
let stepLine = 0

rl.on('close', () => { console.log(total - 1); process.exit(0); });

let peoples
let time

let stages = []

let target

rl.on('line', function (data) {
    if (stepLine === 0) {
        data = data.split(' ');
        peoples = parseInt(data[0])
        time = parseInt(data[1])
        stepLine = 1
        return
    }
    if (stepLine === 1) {
        stages = data.split(' ')
        stages = stages.map(el => parseInt(el))
        stepLine = 2
        return
    }
    if (stepLine === 2) {
        data = data.split(' ');
        target = parseInt(data[0])
        let sum = 0
        if (stages[target - 1] < time) {
            total += stages[target - 1]
            for (let i = 0; i < stages.length; i++) {
                if (i > target - 1) {
                    sum = parseInt(stages[i])
                    total += sum - total
                }
            }
            return
        } else {
            let arr1 = stages.slice(0, target - 1)
            let arr2 = stages.slice(target)
            const len = arr2.length
            total = stages[target - 1]
            total = total - arr1[0]
            total += arr2[len -1]
            return
        }
    }

})
