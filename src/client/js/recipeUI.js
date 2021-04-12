import icons from '@tabler/icons/tabler-sprite.svg';
import BaseUI from './baseUI';

import { shortEnglishHumanizer } from './helper';
// TODO Delete later
// console.log(icons);

class RecipeUI extends BaseUI {
	_parentElement = document.querySelector('.recipe');

	_generateMarkup() {
		return !this._data ||
			(Array.isArray(this._data) && this._data.length === 0)
			? (this._parentElement.innerHTML = '')
			: this._data.map(this._generateRecipeCard).join('');
	}

	_generateRecipeCard(result) {
		return `
			<ul class="recipe__container">
				<li class="recipe__card">
					<a class="link recipe__link" href="${result.url} "target="_blank">
						<img class="recipe__img" src="${result.img}" alt="${result.title}">
						<h2 class="recipe__title">${result.title}</h2>
						<div class="recipe__meta">
							<div class="recipe__info">
								<svg width="24" height="24">
									<use xlink:href="${icons}#tabler-flame"/>
								</svg>
								<span class="calories">${result.calories.toFixed(0)} calories</span>
							</div>
							<div class="recipe__info">
								<svg width="24" height="24">
									<use xlink:href="${icons}#tabler-clock"/>
								</svg>
								<span class="time">${
									result.time > 0
										? shortEnglishHumanizer(
												result.time * 60 * 1000
										  )
										: 'Not mentioned'
								}</span>
							</div>
							<div class="recipe__info">
								<svg width="24" height="24">
									<use xlink:href="${icons}#tabler-user"/>
								</svg>
								<span class="publisher">${result.publisher}</span>
							</div>
							<div class="recipe__info">
								<ul class="tags">
									${result.tags
										.slice(0, 5)
										.map(label => {
											return `<li class="tag">${label}</li>`;
										})
										.join('')}
								</ul>
							</div>
						</div>
					</a>
				</li>
			</ul>
		`;
	}
}

export default new RecipeUI();
