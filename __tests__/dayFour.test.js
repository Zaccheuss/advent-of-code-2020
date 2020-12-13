const dayFour = require('../src/day-4/DayFour');

describe("Day Four Tests", () => {
  test("test", () => {
    expect(dayFour.convertTextToPassport()).toEqual(true);
  });
});