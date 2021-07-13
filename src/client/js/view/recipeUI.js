import icons from '../../img/symbol-defs.svg';
import BaseUI from './baseUI';

import { shortEnglishHumanizer } from '../helper';

class RecipeUI extends BaseUI {
	_parentElement = document.querySelector('.recipe__result');
	_errorMessage = 'Oops, we could not find any recipes, please try again!';

	_generateMarkup() {
		return this._data.map(this._generateRecipeCard).join('');
	}

	_generateRecipeCard(result) {
		return `
				<li class="recipe__card">
					<a class="link recipe__link" href="${result.url} "target="_blank">
						<img class="recipe__img" src="${result.img}" alt="${result.title}">
						<div class="recipe__meta">
							<h2 class="recipe__title">${result.title}</h2>
							<div class="recipe__info">
								<svg class="icon recipe__icon">
									<use xlink:href="${icons}#icon-calories" />
								</svg>
								<span class="recipe__calories">${result.calories.toFixed(0)} kcal</span>
							</div>
							<div class="recipe__info">
								<svg class="icon recipe__icon">
									<use xlink:href="${icons}#icon-time" />
								</svg>
								<span class="recipe__time">${
									result.time > 0
										? shortEnglishHumanizer(
												result.time * 60 * 1000
										  )
										: 'Not mentioned'
								}</span>
							</div>
							<div class="recipe__info">
								<svg class="icon recipe__icon">
									<use xlink:href="${icons}#icon-author" />
								</svg>
								<span class="recipe__publisher">${result.publisher}</span>
							</div>
							<div class="recipe__label">
								<ul class="recipe__tags">
									${result.tags
										.slice(0, 5)
										.map(label => {
											return `<li class="recipe__tag">${label}</li>`;
										})
										.join('')}
								</ul>
							</div>
						</div>
					</a>
				</li>
		`;
	}
}

export default new RecipeUI();
