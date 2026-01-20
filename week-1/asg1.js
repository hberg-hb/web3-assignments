const crypto = require('crypto')

function hashPrefixWithZero(prefix) {
    let input = 0;
    while(true){
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return { inputStr, hash }
        }
        input++
    }
}

const result = hashPrefixWithZero('00');
console.log(result);