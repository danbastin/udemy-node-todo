const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todo-api', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongo DB');
  }
  console.log('Connected to Mongo Server');
  const db = client.db('todo-api');

  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Todos').deleteOne({text: 'Something to do'}).then((res) => {
  //   console.log(res);
  // });

  // client.close();
});