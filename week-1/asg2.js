// input string starts with 100xdevs;
// so, its impossible to get a hash with prefix of '100xdevs' since hash can have a prefix starting with [0 1 2 3 4 5 6 7 8 9 a b c d e f] except these there is no prefix can be there in the hash while using sha-256.
// not to get input string starts with any 

const crypto = require('crypto');

function getAnyPrefix(cstip, prefix){
    let input = 0
    while(true){
        let inputStr = `${cstip}` + input.toString()
        let hash =  crypto.createHash('sha256').update(inputStr).digest('hex')
        if(hash.startsWith(prefix)){
            return {inputStr, hash}
        }
        input++
    }
}

const result = getAnyPrefix('pawan', '000');
console.log(result);