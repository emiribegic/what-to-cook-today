import * as model from './model.js';
import searchForm from './view/searchForm';
import searchResultUI from './view/searchResultUI';
import recipeUI from './view/recipeUI';
import paginationUI from './view/paginationUI';
import renderIcons from './view/renderIcons';

// Load icons
const loadIcons = function () {
	renderIcons.render();
};

const handleRecipe = async () => {
	try {
		// 1. Get user input
		const input = searchForm.getQuery();
		if (!input) return;

		// 2. Show spinner while fetching data
		searchResultUI.showSearching();
		recipeUI.showSpinner();
		await model.fetchRecipe(input);

		// 3. Show hit counts
		searchResultUI.render(model.state);

		// 4. Show 10 results
		recipeUI.render(model.getResultsPerPage());

		// 5. Show pagination
		paginationUI.render(model.state);
	} catch (err) {
		console.error(err);
		searchResultUI.showError();
		recipeUI.showError('Connection refused: failed to load recipe data');
	}
};

const handlePage = function (goToPage) {
	// 1. Show new results
	recipeUI.render(model.getResultsPerPage(goToPage));

	// 2. Show pagination based on user clicks
	paginationUI.scrollToTop();
	paginationUI.render(model.state);
};

// PUBLISHER AND SUBSCRIBER PATTERN
export const init = function () {
	renderIcons.addHandlerIcons(loadIcons);
	searchForm.addHandlerSearch(handleRecipe);
	paginationUI.addHandlerClick(handlePage);
};
