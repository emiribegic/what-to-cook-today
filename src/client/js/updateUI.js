import icons from '@tabler/icons/tabler-sprite.svg';
console.log(icons);

const main = document.querySelector('main');
const resultSection = document.querySelector('.result');
const recipeSection = document.querySelector('.recipe');

const showSpinner = el => {
	const spinnerHtml = `
		<div class="spinner">
      <svg>
        <use href="${icons}#tabler-loader"></use>
      </svg>
    </div>
	`;
	el.innerHTML = '';
	el.insertAdjacentHTML('afterbegin', spinnerHtml);
};

const renderRecipes = (result = {}) => {
	// const main = document.querySelector('main');
	// const resultSection = document.querySelector('.result');
	// const recipeSection = document.querySelector('.recipe');
	let resultHtml = '';
	let recipeHtml = '';

	if (resultSection && recipeSection) {
		resultSection.innerHTML = '';
		recipeSection.innerHTML = '';
	}

	resultHtml = `
		<span>${result.count} results for "${result.q}"</span>
	`;

	recipeHtml =
		result.count > 0
			? `
    <ul class="recipe__container">
      <li class="recipe__card">
        <a class="link recipe__link" href="${result.hits[0].recipe.url}">
          <img class="recipe__img" src="${result.hits[0].recipe.image}" alt="${
					result.hits[0].recipe.label
			  }">
          <h2 class="recipe__title">${result.hits[0].recipe.label}</h2>
          <div class="recipe__meta">
						<div class="recipe__info">
							<svg width="24" height="24">
								<use xlink:href="${icons}#tabler-flame"/>
							</svg>
            	<span class="calories">${result.hits[0].recipe.calories.toFixed(
					0
				)}calories</span>
						</div>
						<div class="recipe__info">
							<svg width="24" height="24">
								<use xlink:href="${icons}#tabler-clock"/>
							</svg>
							<span class="time">${result.hits[0].recipe.totalTime}mins</span>
						</div>
						<div class="recipe__info">
							<svg width="24" height="24">
								<use xlink:href="${icons}#tabler-user"/>
							</svg>
            	<span class="publisher">${result.hits[0].recipe.source}</span>
						</div>
						<div class="recipe__info">
            	<ul class="tags">
								${result.hits[0].recipe.healthLabels
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
  `
			: `
		<span>Oops… Try again!</span>
	`;

	resultSection.insertAdjacentHTML('afterbegin', resultHtml);
	recipeSection.insertAdjacentHTML('afterbegin', recipeHtml);
};

export { main, resultSection, recipeSection, showSpinner, renderRecipes };
