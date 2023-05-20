const list = [-52, 56, 30, 29, -54, 0, -110];

// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
DNAtoRNA = (dna) => dna.replaceAll("T", "U");

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = function (list) {
    list.sort(function (a, b) {
        return a - b;
    });
    return list[0];
}

const max = function (list) {
    list.sort(function (a, b) {
        return b - a;
    });
    return list[0];
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    return toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
warnTheSheep = (queue) => {
    const indexWolfReverse = queue.reverse().indexOf("wolf");
    return indexWolfReverse === 0 ? "Pls go away and stop eating my sheep" : "Oi! Sheep number " + indexWolfReverse + "! You are about to be eaten by a wolf!";
}