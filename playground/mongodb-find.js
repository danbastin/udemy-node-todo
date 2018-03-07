const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todo-api', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongo DB');
  }
  console.log('Connected to Mongo Server');
  const db = client.db('todo-api');

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Urs').find({name: 'Dan'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, null, 2));
  }, (err) => {
    console.log('Couldn\'t retrieve users', err);
  })

  // client.close();
});