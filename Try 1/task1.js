let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});
rl.prompt();
rl.on('line', (input) => {
  input = input.toLowerCase();
  console.log(luck(input));
  rl.close();
});

function luck(str) {
  // const arr = []
  // for (let el = 0; el < str.length; el++) {
  //   arr.push(str[el])
  //   if (arr.length === str.length) {
  //     arr.reverse().forEach(i => {
  //       console.log(i)
  //     })
  //     return ''
  //   }
  // }

  let arr = str.split(' ')
  let arr2 = arr.sort().slice(2)
  arr = arr.reverse().slice(2).reduce((sum, el)=>sum * el)
  arr2 = arr2.reduce((sum, el)=>sum * el)
  let result = arr2 + arr
  return result.toString()
}

// 7 2 3 4 
// 34
