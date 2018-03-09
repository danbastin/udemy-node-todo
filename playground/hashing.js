const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '123');
console.log(token);

var decode = jwt.verify(token, '123');
console.log(decode);






// var message = 'Shade me up';
// var hash = SHA256(message).toString();

// console.log(`Message ${message}`);
// console.log(`Encrypted ${hash}`);

// var data = {
//   id: 4
// };

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();

// if (resultHash === token.hash) {
//   console.log('Data not changed');
// } else {
//   console.log('data changed');
// }