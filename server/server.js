const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./db/models/todo');
const {User} = require('./db/models/user');


const app = express();
const port = process.env.PORT || 3000;

//set port for heroku or 3000 if local

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {

  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send();
  }

  Todo.findById(req.params.id).then((todo) => {
    if (todo) {
      res.status(200).send(todo);
    } else {
      res.status(404).send();
    }
  }).catch((e) => res.status(400).send());

});


app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};