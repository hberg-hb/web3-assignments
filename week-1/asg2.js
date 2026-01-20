// input string starts with 100xdevs;
// so, its impossible to get a hash with prefix of '100xdevs' since hash can have a prefix starting with [0 1 2 3 4 5 6 7 8 9 a b c d e f] except these there is no prefix can be there in the hash while using sha-256.
// so to get a hash of '100xdevs', see the code below.

const crypto = require('crypto');

function getAnyPrefix(customPrefix){
    let input = 0
    while(true){
        let inputStr = input.toString()
        let hash = `${customPrefix}` + crypto.createHash('sha256').update(inputStr).digest('hex')
        if(hash.startsWith(customPrefix)){
            return {inputStr, hash}
        }
        input++
    }
}

const result = getAnyPrefix('100xdevs');
console.log(result);