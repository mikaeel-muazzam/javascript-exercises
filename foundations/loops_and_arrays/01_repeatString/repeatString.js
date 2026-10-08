const repeatString = function(string, num) {
    let repeatedString = string;
    if (num > 0) {
        for (let i = 0; i < num - 1; i++) {
            repeatedString += string;
        }
        return repeatedString;
    } else if (num < 0) {
        return "ERROR"
    }
    return "";
};

// Do not edit below this line
module.exports = repeatString;
