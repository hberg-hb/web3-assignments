const crypto = require('crypto')

function findTheNonce(customIp, hexPrefix){
    let input = 0;
    while(true){
        let inputStr = `${customIp}` + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(hexPrefix)){
            return {inputStr, hash}
        }
        input++;
    }
}

const result = findTheNonce('harkirat => Raman | Rs 100', '00000');
const result2 = findTheNonce('Ram => Ankit | Rs 10', '00000');
console.log(result);
console.log(result2);