const filename = 'day-3/input.txt';

function textFileToArray() {

    var lines = require('fs').readFileSync(filename, 'utf-8')
        .split('\n')

    var myArray = lines.map(line => {
        return line.split('');
    });

    let rightPosition = 3;
    let treeCount = 0;
    for (let i = 1; i < myArray.length; i++) { // start at the second row

        // console.log(myArray[i][test]);

        // if (myArray[i][test] === '.') {
        //     console.log('O');
        // } else if (myArray[i][test] === '#') {
        //     console.log('X');
        //     treeCount++;
        // }

        if (myArray[i][rightPosition] === '#') {
            treeCount++;
        }

        rightPosition += 3;
    }
    console.log(treeCount);
};

textFileToArray();