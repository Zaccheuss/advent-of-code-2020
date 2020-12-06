const dayOne = require('../src/day-1/DayOne');

describe("Day One Tests", () => {
  test("Two entries equal 40000", () => {
    expect(dayOne([2000, 20])).toEqual(40000);
  });
  test("Two seperated entries equal 40000", () => {
    expect(dayOne([2000, 10, 20])).toEqual(40000);
  });
  test("Sample case passes", () => {
    expect(dayOne([1721, 979, 366, 299, 675, 1456])).toEqual(514579);
  });
});