const { dayTwo, minLetters, maxLetters, getCriticalLetter, checkPassword } = require('../src/day-2/DayTwo');
const { dayTwoPartTwo } = require('../src/day-2/DayTwoPartTwo');

describe("Day Two Tests", () => {
  test("minimum password letters is correct", () => {
    expect(minLetters('1-3 a: abcde')).toEqual(1);
    expect(minLetters('1-3 b: cdefg')).toEqual(1);
    expect(minLetters('2-9 c: ccccccccc')).toEqual(2);
  });

  test("maximum password letters is correct", () => {
    expect(maxLetters('1-3 a: abcde')).toEqual(3);
    expect(maxLetters('1-3 b: cdefg')).toEqual(3);
    expect(maxLetters('2-9 c: ccccccccc')).toEqual(9);
  });

  test("critical letter is correct", () => {
    expect(getCriticalLetter('1-3 a: abcde')).toEqual('a');
    expect(getCriticalLetter('1-3 b: cdefg')).toEqual('b');
    expect(getCriticalLetter('2-9 c: ccccccccc')).toEqual('c');
  });

  test("can check if password is valid or not", () => {
    expect(dayTwo(['1-3 a: abcde'])).toEqual(1);
    expect(dayTwo(['1-3 b: cdefg'])).toEqual(0);
    expect(dayTwo(['2-9 c: ccccccccc'])).toEqual(1);
  });

  test("day two part two tests", () => {
    expect(dayTwoPartTwo(['1-3 a: abcde'])).toEqual(1);
    expect(dayTwoPartTwo(['1-3 b: cdefg'])).toEqual(0);
    expect(dayTwoPartTwo(['2-9 c: ccccccccc'])).toEqual(0);
    expect(dayTwoPartTwo(['2-9 c: ccccccccc', '1-3 b: cdefg', '1-3 a: abcde'])).toEqual(1);
  });

});