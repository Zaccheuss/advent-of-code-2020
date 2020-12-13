function run() {
    const inputArry = parseTextInputToArray();

    let maxSeatId = 0;

    inputArry.forEach((ticket) => {
        let rowArray = ticket.substring(0, 7).split('');
        let colArray = ticket.substring(7).split('');

        let seatId = getSeatId(findRow(rowArray), findColumn(colArray));
        if (seatId > maxSeatId) {
            maxSeatId = seatId;
        }
        console.log(maxSeatId);
    });

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