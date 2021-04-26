import { timeout } from './helper';
import { TIMEOUT_SEC, RECIPES_PER_PAGE } from './config';

export const state = {
	searchResults: {},
	recipes: [],
	page: 1,
	recipesPerPage: RECIPES_PER_PAGE,
};

export const fetchRecipe = async input => {
	// Send input data to server side
	const res = await Promise.race([
		fetch('/recipe', {
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

		state.searchResults = {
			keyword: json.q,
			count: json.hits.length,
		};

		state.recipes = json.hits.map(rec => {
			return {
				url: rec.recipe.url,
				img: rec.recipe.image,
				title: rec.recipe.label,
				calories: rec.recipe.calories,
				time: rec.recipe.totalTime,
				publisher: rec.recipe.source,
				tags: rec.recipe.healthLabels,
			};
		});

		state.page = 1; // Reset page to 1 whenever new search
	} catch (err) {
		console.error(err);
		throw err;
	}
};

export const getResultsPerPage = function (page = state.page) {
	state.page = page;
	const start = (page - 1) * state.recipesPerPage; // 0
	const end = page * state.recipesPerPage; // 10
	return state.recipes.slice(start, end); // 0-9, 10-19...
};
