import { renderRecipes } from './updateUI';

const searchRecipe = async e => {
	e.preventDefault();

	const input = document.querySelector('.search__bar').value;

	// Send input data to server side
	const res = await fetch('http://localhost:8083/recipe', {
		method: 'POST',
		credentials: 'same-origin',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ keyword: input }),
	});

	// Receieve fetched data from server side
	try {
		const json = await res.json();
		console.log(json);
		renderRecipes(json);
	} catch (err) {
		console.error(err);
	}
};

export { searchRecipe };