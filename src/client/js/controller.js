import * as model from './model.js';
import searchForm from './searchForm';
import searchResultUI from './searchResultUI';
import recipeUI from './recipeUI';

const handleRecipe = async () => {
	try {
		// 1. Get user input
		const input = searchForm.getQuery();
		if (!input) return;

		// 2. Show spinner while fetching data
		recipeUI.showSpinner();
		await model.fetchRecipe(input);

		// 3. Show hit counts
		searchResultUI.render(model.state);

		// 4. Show 10 results
		recipeUI.render(model.resultsPerPage());
		console.log(model.state, model.resultsPerPage());
	} catch (err) {
		console.error(err);
	}
};

// PUBLISHER AND SUBSCRIBER PATTERN
export const init = function () {
	searchForm.addHandlerSearch(handleRecipe);
};
