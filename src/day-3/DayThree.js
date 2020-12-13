const filename = 'day-3/input.txt';

function textFileToArray() {

    var lines = require('fs').readFileSync(filename, 'utf-8')
        .split('\n')

    var treeArray = lines.map(line => {
        return line.split('');
    });

    console.log(countHitTrees(treeArray, 1, 1));
    console.log(countHitTrees(treeArray, 3, 1));
    console.log(countHitTrees(treeArray, 5, 1));
    console.log(countHitTrees(treeArray, 7, 1));
    console.log(countHitTrees(treeArray, 1, 2));
    //multiply these all together to get: 3510149120
};

function countHitTrees(treeArray, rightDiff, downDiff) {
    let treesHit = 0;
    let rightPosition = rightDiff;
    for (let i = downDiff; i < treeArray.length; i += downDiff) { // start at the second row
        if (treeArray[i][rightPosition] === '#') {
            treesHit++;
        }
        rightPosition += rightDiff;
    }
    return treesHit;
}

textFileToArray();