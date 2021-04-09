import { timeout } from './helper';
import { API_URL, TIMEOUT_SEC, RECIPES_PER_PAGE } from './config';

export const state = {
	searchResults: {},
	recipes: [],
	page: 1,
	recipesPerPage: RECIPES_PER_PAGE,
};

export const fetchRecipe = async input => {
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

		// TODO Currently logs the error msg but with return no msg will be logged
		// if (!json.hits[0]) return;
		state.searchResults = {
			keyword: json.q,
			count: json.count,
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
	} catch (err) {
		console.error(err);
	}
};

export const resultsPerPage = function (page = state.page) {
	state.page = page;
	const start = (page - 1) * state.recipesPerPage; // 0
	const end = page * state.recipesPerPage; // 10
	return state.recipes.slice(start, end); // 0-9, 10-19...
};
