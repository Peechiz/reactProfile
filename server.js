const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')


// app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))

const api = require('./api/users');
app.use('/api', api);

const port = process.env.port || '9001'
app.listen(port, ()=> {
  console.log(`Server up at: ${port}`);
})

module.exports = app;
