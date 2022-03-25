const reverseString = function (string) {
    const chars = string.split("");
    let newString = "";

    for (i = 0; i < string.length; i++) {
        let letter = chars.pop();
        newString += letter;
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
