import {
	main,
	resultSection,
	recipeSection,
	showSpinner,
	renderRecipes,
} from './updateUI';

const state = {
	recipe: {},
};

const searchRecipe = async e => {
	e.preventDefault();

	const input = document.querySelector('.search__bar').value;
	let json;

	// Show spinner
	showSpinner(recipeSection);

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
		json = await res.json();
		// console.log(json);
		const { recipe } = json.hits[0];
		state.recipe = {
			keyword: json.q,
			count: json.count,
			url: recipe.url,
			img: recipe.image,
			title: recipe.label,
			calories: recipe.calories,
			time: recipe.totalTime,
			publisher: recipe.source,
			tags: recipe.healthLabels,
		};
		console.log(state.recipe);
	} catch (err) {
		console.error(err);
	}

	renderRecipes(state.recipe);
};

export { state, searchRecipe };
