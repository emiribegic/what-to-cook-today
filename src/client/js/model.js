import { timeout } from './helper';
import { API_URL } from './config';
import { TIMEOUT_SEC } from './config';

export const state = {
	recipe: {},
};

export const fetchRecipe = async () => {
	// e.preventDefault();

	const input = document.querySelector('.search__bar').value;
	// let json;

	// Send input data to server side
	const res = await Promise.race([
		fetch(API_URL, {
			method: 'POST',
			credentials: 'same-origin',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ keyword: input }),
		}),
		timeout(TIMEOUT_SEC),
	]);

	// Receieve fetched data from server side
	try {
		const json = await res.json();
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

	// renderRecipes(state.recipe);
};
