function baget(str){
    arr = str.split(' ')
    let len = arr.length
    arr = arr.reduce((sum, el, index, arr) =>{
        el = Number.parseFloat(el)
        return sum + el
    },0) 
    return Math.floor(arr/len) 
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
  console.log(baget(input));
  rl.close();
});

// console.log(baget('10 1 3'));