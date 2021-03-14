const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile('dist/index.html'));

app.listen(port, () => {
	console.log(`Server running on localhost: ${port}`);
});
