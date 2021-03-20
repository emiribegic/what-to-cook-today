import 'core-js/stable';
import 'regenerator-runtime/runtime';

// SASS file
import './styles/main.scss';

// JS files
import { handleRecipe } from './js/controller';

// TODO Where to put e.preventDefault()?
document.querySelector('.search__btn').addEventListener('click', e => {
	e.preventDefault();
	handleRecipe();
});
