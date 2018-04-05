const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = express.Router();
const axios = require('axios');


app.use('/', express.static(path.join(__dirname, '../client/public')))

app.use('/api/btc', (req, res) => {
  let today = req.query.today;
  let lastMonth = req.query.lastMonth;
  axios.get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=${lastMonth}&end=${today}`
      )
    .then((response)=>{
      let data = response.data.bpi;
      let object = {
        dates: [],
        values: []
      }
      for (let key in data) {
        object.dates.push(key);
        object.values.push(data[key]);
      }
      res.send(object);
    })
    .catch((error)=>{
      console.log(error);
    })
});


app.listen(port, () => console.log(`Crypto listening on port ${port}!`))
