function isPowerOfTwo(n) {
    if (n === 1) return true;
    
    n = n / 2

    while ( n > 1 ) {
        n = n / 2 
    }
    return n === 1? true: false
};

console.log(isPowerOfTwo(16));
