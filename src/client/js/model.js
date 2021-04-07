import { timeout } from './helper';
import { API_URL } from './config';
import { TIMEOUT_SEC } from './config';

export const state = {
	searchResults: {},
	recipes: [],
};

export const fetchRecipe = async input => {
	// const input = document.querySelector('.search__bar').value;

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
		console.log(json);

		// TODO Currently logs the error msg but with return no msg will be logged
		// if (!json.hits[0]) return;
		// const { recipe } = json.hits[0];
		state.searchResults = {
			keyword: json.q,
			count: json.count,
		};
		// 	url: recipe.url,
		// 	img: recipe.image,
		// 	title: recipe.label,
		// 	calories: recipe.calories,
		// 	time: recipe.totalTime,
		// 	publisher: recipe.source,
		// 	tags: recipe.healthLabels,
		// };
		// console.log(state.recipe);

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
