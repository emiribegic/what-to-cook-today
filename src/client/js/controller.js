import * as model from './model.js';
import recipeUI from './updateUI';
import searchForm from './formHandler';

const handleRecipe = async () => {
	try {
		const input = searchForm.getQuery();
		if (!input) return;

		recipeUI.showSpinner();
		await model.fetchRecipe(input);
		recipeUI.render(model.state, model.resultsPerPage());
		console.log(model.state, model.resultsPerPage());
	} catch (err) {
		console.error(err);
	}
};

// PUBLISHER AND SUBSCRIBER PATTERN
export const init = function () {
	searchForm.addHandlerSearch(handleRecipe);
};
