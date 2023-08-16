function showPrimes(n) {
    const primeSet = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primeSet.push(i);
        }
    }
    if (primeSet.length > 0){
        alert(`Prime numbers up to ${n}:\n${primeSet.join(', ')}`);
    }
    else{ alert(`Doesn't exit`)}
}

function isValidPositiveInteger(value) {
    str_input = prompt("Enter a positive integer");
    let n = Number(str_input);
    if (isNaN(n) || n < 0 || !Number.isInteger(n)){
        alert("Please Enter Positive Integer!")
        n = isValidPositiveInteger();
    }
    return n
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
n = isValidPositiveInteger();
showPrimes(n);