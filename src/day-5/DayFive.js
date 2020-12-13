function run() {
    const inputArry = parseTextInputToArray();

    let maxSeatId = 0;
    let minSeatId = 99999999;
    let allSeats = [];

    inputArry.forEach((ticket) => {
        let rowArray = ticket.substring(0, 7).split('');
        let colArray = ticket.substring(7).split('');

        let seatId = getSeatId(findRow(rowArray), findColumn(colArray));
        if (seatId > maxSeatId) {
            maxSeatId = seatId;
        }
        if (seatId < minSeatId) {
            minSeatId = seatId;
        }
        
        allSeats.push(seatId);
        console.log(maxSeatId);
    });

    // Create array from minSeatId to maxSeatId to compare with allSeats
    let allNumbers = [...Array(maxSeatId + 1).keys()].slice(minSeatId);

    // https://stackoverflow.com/questions/40537972/compare-2-arrays-and-show-unmatched-elements-from-array-1
    // compare both arrays to find the seat that is in allNumbers but not in allSeats
    let leftoverNumber = allNumbers.filter(function(n){return !this.has(n)}, new Set(allSeats));
    console.log(leftoverNumber);
}

function findRow(input) {
    let maxRow = 127;
    let minRow = 0;

    input.forEach((element) => {
        let span = maxRow - minRow;
        if (element === 'F') {
            maxRow = maxRow - Math.ceil(span / 2);
        } else {
            minRow = minRow + Math.ceil(span / 2);
        }
    });

    return maxRow;
}

function findColumn(input) {
    let maxCol = 7;
    let maxRow = 0;

    input.forEach((element) => {
        let span = maxCol - maxRow;
        if (element === 'L') {
            maxCol = maxCol - Math.ceil(span / 2);
        } else {
            maxRow = maxRow + Math.ceil(span / 2);
        }
    });

    return maxCol;
}

function getSeatId(row, column) {
    return row * 8 + column;
}

function parseTextInputToArray() {
    const filename = 'day-5/input.txt';

    const lines = require('fs').readFileSync(filename, 'utf-8')
        .split('\r\n')

    return lines;
}

run();