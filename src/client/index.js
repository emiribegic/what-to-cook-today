// SASS file
import './styles/main.scss';

// JS files
import { searchRecipe } from './js/controller';

document.querySelector('.search__btn').addEventListener('click', searchRecipe);
