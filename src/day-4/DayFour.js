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

function checkValidity(pp) {
    // abstact equality operator will match undefined and null in this case
    if (pp.byr == null ||
        pp.iyr == null ||
        pp.eyr == null ||
        pp.hgt == null ||
        pp.hcl == null ||
        pp.ecl == null ||
        pp.pid == null) { return false; }

    if (!(pp.byr >= 1920 && pp.byr <= 2002)) { return false; }
    if (!(pp.iyr >= 2010 && pp.iyr <= 2020)) { return false; }
    if (!(pp.eyr >= 2020 && pp.eyr <= 2030)) { return false; }
    
    let unitlessHeight = pp.hgt.match(/\d+/)[0];
    if (pp.hgt.includes('cm')) { 
        if (!(unitlessHeight >= 150 && unitlessHeight <= 193)) { return false; }
    } else { //height is in inches
        if (!(unitlessHeight >= 59 && unitlessHeight <= 76)) { return false; }
    }

    if (pp.hcl.match(/^#[0-9a-f]+$/) === null) { return false; }
    
    let validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
    if (!validEyeColors.includes(pp.ecl)) { return false; }
    if (!(pp.pid.toString().length === 9)) { return false; }

    return true;
}

convertTextInputToArray();
