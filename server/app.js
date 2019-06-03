const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser,  (req, res) => {
    res.send('welcome, ' + req.body.username)
});

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser,  (req, res) => {
    // create user in req.body
});

//GET root
app.get('/',jsonParser,(req, res) => {
    res.send({
        hi: req.query.hasOwnProperty('hi' ) ? req.query.hi : 'Roy',
    });
});

module.exports = {
    app
};
