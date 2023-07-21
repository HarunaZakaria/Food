const express = require('express');
const app = express();
app.use(express.json());
const db = require('./db.js')
const Food = require("./models/foodModel");
const foodsRoute = require("./routes/foodsRoute");



app.use('api/foods/', foodsRoute);



app.get('/', (req, res) => {
  res.send('Hello Haruna!');
});
 

const port = process.env.PORT || 5000;

app.listen(port, () => 'server running on port');
