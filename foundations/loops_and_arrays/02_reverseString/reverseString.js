const reverseString = function(str) {
    let arr = [];
    for (i = str.length - 1; i >= 0; i--) {
        arr.push(str.charAt(i));
    }
    return arr.join('');;
};

// Do not edit below this line
module.exports = reverseString;
