module.exports = { convertTextToPassport };

const filename = 'day-4/input.txt';

function convertTextInputToArray() {
    let lines = require('fs').readFileSync(filename, 'utf-8')
        .split('\r\n\r\n') //split when ther are two returns

    let veryCoolArray = lines.map(line => {
        return line.split(/\s+/); //split on any whitespace character
    });

    let validCount = 0;
    veryCoolArray.forEach((element) => {
        if (dayFour(element)) {
            validCount++;
        }
    });

    console.log(validCount);
}

function dayFour(input) {
    let passport = convertTextToPassport(input);
    return checkValidity(passport);
}

function convertTextToPassport(input) {
    let splitArray = input.map((element) => {
        return element.split(':');
    });
    return Object.fromEntries(splitArray);
}

function checkValidity(passport) {
    // abstact equality operator will match undefined and null in this case
    if (passport.byr == null ||
        passport.iyr == null ||
        passport.eyr == null ||
        passport.hgt == null ||
        passport.hcl == null ||
        passport.ecl == null ||
        passport.pid == null) { return false; }
    return true;
}

convertTextInputToArray();
