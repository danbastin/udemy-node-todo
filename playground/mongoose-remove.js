const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/db/models/todo');
const {User} = require('./../server/db/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// }, (e) => {
//   console.log('failed');
// });

//Todo.findOneAndRemove()

Todo.findByIdAndRemove('5aa1e52c545a7b741d45bca0').then((res) => {
  console.log(res);
})
