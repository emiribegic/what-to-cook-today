import icons from '../img/symbol-defs.svg';
import BaseUI from './baseUI';

class RecipeUI extends BaseUI {
	////////////////////////////
	_parentElement = document.querySelector('.footer__nav');
	_sns = [
		'mailto:emiri.begic@gmail.com',
		'https://github.com/emiribegic',
		'https://www.linkedin.com/in/emiribegic',
		'https://twitter.com/EmiliaLala6',
	];

	_generateSNSList() {
		return `
			<ul class="footer__contact">
				<li class="footer__sns">
						<a class="link footer__link " href="mailto:emiri.begic@gmail.com"></a>
				</li>
				<li class="footer__sns">
						<a class="link footer__link" href="https://github.com/emiribegic" target="_blank"></a>
				</li>
				<li class="footer__sns">
						<a class="link footer__link" href="https://www.linkedin.com/in/emiribegic" target="_blank"></a>
				</li>
				<li class="footer__sns">
						<a class="link footer__link" href="https://twitter.com/EmiliaLala6" target="_blank"></a>
				</li>
			</ul>
		`;
	}

	////////////////////////////

	_generateMarkup() {
		return this._data.map(this._generateRecipeCard).join('');
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
								<svg class="icon icon-calories">
									<use xlink:href="${icons}#icon-calories" />
								</svg>
								<span class="recipe__calories">${result.calories.toFixed(0)} kcal</span>
							</div>
							<div class="recipe__info">
								<svg class="icon icon-time">
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
								<svg class="icon icon-author">
									<use xlink:href="${icons}#icon-author" />
								</svg>
								<span class="recipe__publisher">${result.publisher}</span>
							</div>
							<div class="recipe__info">
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
			</ul>
		`;
	}
}

export default new RecipeUI();

// class RecipeUI extends BaseUI {
// 	_parentElement = document.querySelector('.recipe__result');
// 	_errorMessage = 'Oops, we could not find any recipes, please try again!';

// 	_generateMarkup() {
// 		return this._data.map(this._generateRecipeCard).join('');
// 	}

// 	_generateRecipeCard(result) {
// 		return `
// 			<ul class="recipe__container">
// 				<li class="recipe__card">
// 					<a class="link recipe__link" href="${result.url} "target="_blank">
// 						<img class="recipe__img" src="${result.img}" alt="${result.title}">
// 						<h2 class="recipe__title">${result.title}</h2>
// 						<div class="recipe__meta">
// 							<div class="recipe__info">
// 								<svg class="icon icon-calories">
// 									<use xlink:href="${icons}#icon-calories" />
// 								</svg>
// 								<span class="recipe__calories">${result.calories.toFixed(0)} kcal</span>
// 							</div>
// 							<div class="recipe__info">
// 								<svg class="icon icon-time">
// 									<use xlink:href="${icons}#icon-time" />
// 								</svg>
// 								<span class="recipe__time">${
// 									result.time > 0
// 										? shortEnglishHumanizer(
// 												result.time * 60 * 1000
// 										  )
// 										: 'Not mentioned'
// 								}</span>
// 							</div>
// 							<div class="recipe__info">
// 								<svg class="icon icon-author">
// 									<use xlink:href="${icons}#icon-author" />
// 								</svg>
// 								<span class="recipe__publisher">${result.publisher}</span>
// 							</div>
// 							<div class="recipe__info">
// 								<ul class="recipe__tags">
// 									${result.tags
// 										.slice(0, 5)
// 										.map(label => {
// 											return `<li class="recipe__tag">${label}</li>`;
// 										})
// 										.join('')}
// 								</ul>
// 							</div>
// 						</div>
// 					</a>
// 				</li>
// 			</ul>
// 		`;
// 	}
// }

// export default new RecipeUI();
