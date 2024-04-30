function checkEven(n) {
    if(n % 2 !== 0) return false
    else return true
}

function checkMultiple10(n) {
    if(n === 0) return true
    else if(n % 10 === 0) return true
    else return false
}

function checkPrime(n) {
    nAsStr = n.toString()
    
    if(nAsStr[0] === '-') return false // check if it's negative
    else if(n === 1) return false
    else if(checkEven(n) && n !== 2) return false // check if it's multiple of 2
    else if(n % 3 === 0 && n !== 3)  return false // check if it's multiple of 3
    else if(n % 5 === 0 && n !== 5) return false  // check if it's multiple of 5
    else if(n % 7 === 0 && n !== 7) return false // check if it's multiple of 7
    else if(n % 11 === 0 && n !== 11) return false // check if it's multiple of 11
    else if(n % 13 === 0 && n !== 13) return false // check if it's multiple of 13
    else if(n % 17 === 0 && n !== 17) return false // check if it's multiple of 17
    else if(n % 31 === 0 && n !== 31) return false // check if it's multiple of 31
    else if(n % 53 === 0 && n !== 53) return false // check if it's multiple of 53
    else if(n % 76 === 0 && n !== 76) return false // check if it's multiple of 76
    else if(n % 743 === 0 && n !== 743) return false // check if it's multiple of 743
    else return true
}

function testNumber(n) {
    if(checkEven(n)) console.log('The number is even')
    if(checkMultiple10(n)) console.log('The number is multiple of 10')
    if(checkPrime(n)) console.log('The number is prime')
}

testNumber(3869)