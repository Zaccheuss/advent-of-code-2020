const SPECIAL_COLOR = 'shiny gold'

const luggageArray = createArrayFromInput();

function createArrayFromInput() {
  const filename = 'E:/Zac/workspace/advent-of-code-2020/src/day-7/input.txt';
  const splitInput = require('fs').readFileSync(filename, 'utf-8').split('\r\n');

  output = [];

  splitInput.map(element => {
    let luggage = {}
    luggage.color = element.substring(0, element.indexOf('bags')).trim();
    luggage.contains = [];
    element
      .substring(element.indexOf('contain') + 'contain'.length) //cut off the first part of the string
      .replace(/bags\.|bags|bag\.|bag/gi, '') //remove bags from the string
      .split(' , ') //make an array of each internal bag
      .map(x => x.trim()) //remove whitespace for each array element
      .filter(bag => !bag.includes('no other')) //remove bags that have no internal bags
      .forEach(bag => { //create a new object for each bag and add it to the main lugagge object
        luggage.contains.push({
          quantity: Number(bag.charAt(0)),
          color: bag.substring(2)
        })
      });
      console.log(luggage);
    output.push(luggage);
  });

  return output;
}

function getBagColorsThatContainGold() {
  const colorSet = new Set();
  luggageArray.forEach((luggage) => {
    if (luggage.contains.some(bag => bag.color === SPECIAL_COLOR)) {
      colorSet.add(luggage.color);
    }
  });
  return colorSet;
}

function getBagColorsThatContainBagsThatContainGold() {
  const colorSet = getBagColorsThatContainGold();
  luggageArray.forEach((luggage) => {
    if (luggage.contains.some(bag => colorSet.has(bag.color))) {
      colorSet.add(luggage.color);
    }
  });
  return colorSet;
}

function getBagColorsThatContainBagsThatContainGold2() {
  const colorSet = getBagColorsThatContainBagsThatContainGold();
  luggageArray.forEach((luggage) => {
    if (luggage.contains.some(bag => colorSet.has(bag.color))) {
      colorSet.add(luggage.color);
    }
  });
  return colorSet;
}

function getBagColorsThatContainBagsThatContainGold3() {
  const colorSet = getBagColorsThatContainBagsThatContainGold2();
  luggageArray.forEach((luggage) => {
    if (luggage.contains.some(bag => colorSet.has(bag.color))) {
      colorSet.add(luggage.color);
    }
  });
  return colorSet;
}

function getBagColorsThatContainBagsThatContainGold4() {
  const colorSet = getBagColorsThatContainBagsThatContainGold3();
  luggageArray.forEach((luggage) => {
    if (luggage.contains.some(bag => colorSet.has(bag.color))) {
      colorSet.add(luggage.color);
    }
  });
  return colorSet;
}

function getBagColorsThatContainBagsThatContainGold5() {
  const colorSet = getBagColorsThatContainBagsThatContainGold4();
  luggageArray.forEach((luggage) => {
    if (luggage.contains.some(bag => colorSet.has(bag.color))) {
      colorSet.add(luggage.color);
    }
  });
  return colorSet;
}

function getBagColorsThatContainBagsThatContainGold6() {
  const colorSet = getBagColorsThatContainBagsThatContainGold5();
  luggageArray.forEach((luggage) => {
    if (luggage.contains.some(bag => colorSet.has(bag.color))) {
      colorSet.add(luggage.color);
    }
  });
  return colorSet;
}

function getBagColorsThatContainBagsThatContainGold7() {
  const colorSet = getBagColorsThatContainBagsThatContainGold6();
  luggageArray.forEach((luggage) => {
    if (luggage.contains.some(bag => colorSet.has(bag.color))) {
      colorSet.add(luggage.color);
    }
  });
  return colorSet;
}

console.log(getBagColorsThatContainGold());
console.log(getBagColorsThatContainBagsThatContainGold());
console.log(getBagColorsThatContainBagsThatContainGold2());
console.log(getBagColorsThatContainBagsThatContainGold3());
console.log(getBagColorsThatContainBagsThatContainGold4());
console.log(getBagColorsThatContainBagsThatContainGold5());
console.log(getBagColorsThatContainBagsThatContainGold6());
console.log(getBagColorsThatContainBagsThatContainGold7().size);