const renderRecipes = (result = {}) => {
	const main = document.querySelector('main');
	const resultSection = document.querySelector('.result');
	const recipeSection = document.querySelector('.recipe');
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
          <img class="recipe__img" src="${result.hits[0].recipe.image}" alt="${result.hits[0].recipe.label}">
          <h2 class="recipe__title">${result.hits[0].recipe.label}</h2>
          <div class="recipe__meta">
            <span class="time">${result.hits[0].recipe.totalTime}mins</span>
            <span class="publisher">by ${result.hits[0].recipe.source}</span>
            <ul class="tags">
              <li class="tag">${result.hits[0].recipe.healthLabels[0]}</li>
              <li class="tag">${result.hits[0].recipe.healthLabels[1]}</li>
              <li class="tag">${result.hits[0].recipe.healthLabels[2]}</li>
            </ul>
          </div>
        </a>
      </li>
    </ul>
  `
			: `
		<span>Maybe typo? Please try again 😎🔍</span>
	`;

	resultSection.insertAdjacentHTML('afterbegin', resultHtml);
	recipeSection.insertAdjacentHTML('afterbegin', recipeHtml);
};

export { renderRecipes };
