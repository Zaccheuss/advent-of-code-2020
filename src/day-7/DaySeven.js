const SPECIAL_COLOR = 'shiny gold'

const luggageArray = createArrayFromInput();

function createArrayFromInput() {
  const filename = 'src/day-7/input.txt';
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
    output.push(luggage);
  });

  return output;
}

function getBagColorsThatContainGold(inputSet) {
  const outputSet = new Set();
  inputSet.forEach(x => outputSet.add(x));
  luggageArray.forEach((luggage) => {
    if (luggage.contains.some(bag => outputSet.has(bag.color))) {
      outputSet.add(luggage.color);
    }
  });

  if (outputSet.size === inputSet.size) {
    return outputSet.size - 1; //Subtract 1 because the special color shouldn't actually be included in the set
  } else {
    return getBagColorsThatContainGold(outputSet);
  }
}

console.log(getBagColorsThatContainGold(new Set().add(SPECIAL_COLOR)));