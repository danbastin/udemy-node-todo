const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todo-api', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongo DB');
  }
  console.log('Connected to Mongo Server');
  const db = client.db('todo-api');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, null, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Dan',
  //   age: 29,
  //   location: 'Salt Lake City'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to add User', err);
  //   }
  //   console.log(JSON.stringify(result.ops, null, 2));
  // });

  client.close();
});