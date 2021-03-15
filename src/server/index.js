const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8083;
const fetch = require('node-fetch');
const url = 'https://api.edamam.com/search?';
let input = [];
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile('index.html', { root: '../../dist' }));

app.post('/recipe', async (req, res) => {
	// Receive input data from client side, make API call and send fetched data to client side
	try {
		input = req.body.keyword;
		const resRecipe = await fetch(
			`${url}q=${input}&app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&from=0&to=3`
		);
		const jsonRecipe = await resRecipe.json();
		if (!resRecipe.ok) throw new Error(`${jsonRecipe.message}`);
		res.send(jsonRecipe);
	} catch (err) {
		console.error(err);
	}
});

app.listen(port, () => console.log(`Server running on localhost: ${port}`));
