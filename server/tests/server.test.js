const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../db/models/todo');

const todos = [{
  _id: new ObjectID(),
  text: 'First one'
}, {
  text: 'Second one'
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {

  it('create new todo', (done) => {
    var text = 'test';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  })


  it('Don\'t create todo with invalid body', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });

  });

});

describe('GET /todos', () => {

  it('get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });

});

describe('GET /todos/:id', ()=> {

  it('fails on invalid id', (done) => {
    var testId = new ObjectID().toString();
    testId += '11';
    request(app)
      .get(`/todos/${testId}`)
      .expect(404)
      .end(done);
  });

  it('fails on id not found', (done) => {
    const testId = new ObjectID().toString();

    request(app)
      .get(`/todos/${testId}`)
      .expect(404)
      .end(done);
  });

  it('finds by id', (done) => {
    const id = todos[0]._id.toString();

    request(app)
      .get(`/todos/${id}`)
      .expect(200)
      .expect((res) => {
        expect(res.body._id).toBe(id);
      })
      .end(done);
  })

});