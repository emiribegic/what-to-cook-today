const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.listen(port, () => {
	console.log(`Server running on localhost: ${port}`);
});
