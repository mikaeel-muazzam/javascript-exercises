const removeFromArray = function(arr, ...unwanted) {
    unwanted.forEach((unwanted => {
        arr = arr.filter(item => item !== unwanted)
    }))
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
