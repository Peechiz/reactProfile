const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

const api = require('./api/users');
app.use('/api', api);

const port = process.env.port || '9001'
app.listen(port, ()=> {
  console.log(`Server up at: ${port}`);
})

module.exports = app;
