import * as model from './model.js';
import recipeUI from './updateUI';

export const handleRecipe = async () => {
	try {
		recipeUI.showSpinner();
		await model.fetchRecipe();
		recipeUI.render(model.state.recipe);
	} catch (err) {
		console.error(err);
	}
};
