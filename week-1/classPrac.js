// example on how to generate hash of SHA256

const crypto = require('crypto');
const input = 'pk6862';
const hash = crypto.createHash('sha256').update(input).digest('hex');
console.log(hash);