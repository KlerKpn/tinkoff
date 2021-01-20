function funk (param) { 
    let arr = param.split('')
    while (arr[arr.length -1] == 1){
        arr.splice(arr.length -1 , 1)
    }
    arr = arr.reduce((sum, el) =>{
        el = Number.parseFloat(el)
        return el == 1 ? sum + el : sum + 0
    },0)
    return arr
}

let readline = require('readline'); 
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
});
rl.prompt();
rl.on('line', (input) => {
  input = input.toLowerCase();
  console.log(funk(input));
  rl.close();
});

// console.log(funk('11211311'))
// 4