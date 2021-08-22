const express = require('express');
const app = express();
const dotenv = require('dotenv')

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
