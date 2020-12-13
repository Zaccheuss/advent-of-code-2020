
function run() {
  let groupAnswers = parseTextInputToArray();
  let test = groupAnswers.map( subArray => subArray.map( x => x.replace('\r', ''))); //Remove returns
  let test2 = test.map( subArray => subArray.join('').split('')); //Create an array of each letter of each group answer

  let count = 0;
  test2.forEach((answer) => {
    let testSet = new Set();
    answer.forEach((letter) => {
      testSet.add(letter); //Add each letter of each group to a set
    })
    count += testSet.size; //The length of the set shows how many questions were answered yes
  });

  console.log(count);
}

function parseTextInputToArray() {
  const filename = 'E:/Zac/workspace/advent-of-code-2020/src/day-6/input.txt';

  let groups = require('fs').readFileSync(filename, 'utf-8')
    .split('\r\n\r\n'); //Split on double return
  
  return groups.map((group) => {
    return group.split('\n');
  });
}

run();