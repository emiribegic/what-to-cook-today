import * as model from './model.js';
import searchForm from './searchForm';
import searchResultUI from './searchResultUI';
import recipeUI from './recipeUI';
import paginationUI from './paginationUI';

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

		// 5. Show pagination
		paginationUI.render(model.state);
		console.log(model.state, model.resultsPerPage());
	} catch (err) {
		console.error(err);
	}
};

const handlePage = function (goToPage) {
	// 1. Show new results
	recipeUI.render(model.resultsPerPage(goToPage));

	// 2. Show pagination based on user clicks
	paginationUI.render(model.state);
};

// PUBLISHER AND SUBSCRIBER PATTERN
export const init = function () {
	searchForm.addHandlerSearch(handleRecipe);
	paginationUI.addHandlerClick(handlePage);
};
