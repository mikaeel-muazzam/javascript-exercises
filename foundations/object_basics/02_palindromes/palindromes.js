const palindromes = function (candidate) {
    const candidateChars = candidate.split("")
    .filter(char => !(char === ',' || char === '.' || char === ' ' || char === '!'))
    .map(char => char.toLowerCase());

    let reversedChars = candidateChars.slice();
    reversedChars.reverse();
    
    return candidateChars.every((val, index) => val === reversedChars[index]);
};

// Do not edit below this line
module.exports = palindromes;
