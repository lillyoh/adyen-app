const express = require('express');
const path = require('path');
const dotenv = require('dotenv')
const { uuid } = require('uuid');
const { Client, Config, CheckoutAPI } = require("@adyen/api-library");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/public')))

dotenv.config();

const config = new Config();
config.apiKey = process.env.REACT_APP_API_KEY;
const client = new Client({config, environment: 'TEST'});
const checkout = new CheckoutAPI(client);

app.get('/', (req, res) => {
  res.send('test')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
