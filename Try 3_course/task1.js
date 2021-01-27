var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', () => { console.log(getNum(other, numbers)); process.exit(0) })

let other = []
let numbers = []
function getNum(other, numbers) {
    let steps = parseInt(other[1])
    const arr = numbers.map(el => parseInt(el)).sort()
    console.log('arr, ', arr)
    let j = 0
    while (steps > 0) {

        // if (arr[arr.length - 1].toString().length > 1) {
        //     if (arr[arr.length - 1].toString()[0] < 9) {
        //         arr[arr.length - 1] = parseInt([arr.length - 1].toString()[0] = 9)
        //     }
            // for (let i in arr[arr.length - 1 - j].toString()) {
            //     if (arr[arr.length - 1 - j][i] < 9) {
            //         console.log('kek')
            //         arr[arr.length - 1 - j][i] = 9
            //         steps--
            //     }
            // }
            // if (arr[arr.length - 1].toString() < 9) {
            //     console.log(2)
            //     i = 9
            //     steps--
            // }
        
        



        if (arr[j] < 9) {
            arr[j] = 9
            steps--
        }

        if (j > numbers.length) {
            steps = 0
        }

        j++
    }
    console.log(arr)
    const arr1 = arr.reduce((acc, el) => {
        return acc += el
    })
    const arr2 = numbers.reduce((acc, el) => {
        return acc += parseInt(el)
    }, 0)
    console.log(arr1, arr2)
    return arr1 - arr2
}


let step = 0
rl.on('line', function (data) {
    data = data.split(' ')
    if (step < 1) {
        other = data
        step++
        return
    }
    numbers = data
})
