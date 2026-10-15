const fibonacci = function(n) {
    if(!(typeof(n) === 'number')) return "OOPS";
    if(!(n >= 0)) return "OOPS";
    if(n === 0) return 0;

    let arr = [1, 1];
    for (let i = 1; i < n; i++) {
        arr.push(arr[i - 1] + arr[i]);
    }
    return arr[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
