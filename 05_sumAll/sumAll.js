function doCount(one, two) {
    let newNum = 0;
    for (let i = one; i <= two; i++) {
        newNum += i;
    }
    return newNum;
}

const sumAll = function (numOne, numTwo) {
    if (!Number.isInteger(numOne) || numOne < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(numTwo) || numTwo < 0) {
        return "ERROR";
    }

    if (numOne > numTwo) {
        return doCount(numTwo, numOne);
    } else {
        return doCount(numOne, numTwo);
    }
};

// Do not edit below this line
module.exports = sumAll;
