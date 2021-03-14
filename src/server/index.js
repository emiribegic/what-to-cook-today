const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port = 8081;
app.listen(port, () => {
	console.log(`Server running on localhost: ${port}`);
});
