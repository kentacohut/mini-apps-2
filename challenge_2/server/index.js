const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

app.use('/', express.static(path.join(__dirname, 'build')));

app.get('/app', (req, res) => {
  console.log('het');
  res.send('hey')
})

app.listen(port, () => console.log(`Checkout listening on port ${port}!`));