const sumAll = function(rangeStart, rangeEnd) {
    //validation
    if (typeof rangeStart !== "number" || typeof rangeEnd !== "number") return "ERROR";
    if (rangeStart <= 0 || rangeEnd <= 0) return "ERROR";
    if (Math.ceil(rangeStart) !== Math.floor(rangeStart || Math.ceil(rangeEnd) != Math.floor(rangeEnd))) return "ERROR";

    const start = (rangeStart < rangeEnd) ? rangeStart : rangeEnd;
    const end =  (rangeStart > rangeEnd) ? rangeStart : rangeEnd;

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
