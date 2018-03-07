const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todo-api', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongo DB');
  }
  console.log('Connected to Mongo Server');
  const db = client.db('todo-api');

  db.collection('Todos').findOneAndUpdate({text: 'Something to do'}, { $set: {completed: true}}, { returnOriginal: false })
  .then((res) => {
    console.log(res);
  });

  // client.close();
});