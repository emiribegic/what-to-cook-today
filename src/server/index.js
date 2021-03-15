const express = require('express');
const cors = require('cors');
const app = express();
const port = 8083;
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile('index.html', { root: '../../dist' }));

const base = 'https://api.edamam.com/search?';
const input = document.querySelector('.search__input').value;
const apiId = process.env.API_ID;
const apiKey = process.env.API_KEY;

app.get('/recipe', async () => {
	const res = await fetch(
		`${base}q=${input}&app_id=${apiId}&app_key=${apiKey}`
	);
	const json = await res.json();

	if (!res.ok) throw new Error(`${json.message}`);
	console.log(res, data);
});

app.listen(port, () => console.log(`Server running on localhost: ${port}`));
