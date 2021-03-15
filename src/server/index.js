const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8083;
const fetch = require('node-fetch');
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile('index.html', { root: '../../dist' }));

app.listen(port, () => console.log(`Server running on localhost: ${port}`));
