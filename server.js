const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const profile = require('./controllers/profile');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const setrank = require('./controllers/setrank');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : 'facerecog'
  }
});

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {res.send(database.users);});
app.get('/profile/:id', profile.getProfile(db));
app.post('/signin',signin.processSignIn(db, bcrypt));
app.post('/register', register.processRegister(db, bcrypt));
app.put('/rankup', setrank.increaseRank(db));
app.put('/rankreset', setrank.resetRank(db));
app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)});

app.listen(process.env.PORT || 3000,()=>{
	console.log(`app is running on port ${process.env.PORT}`)
});