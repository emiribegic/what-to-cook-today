import icons from '@tabler/icons/tabler-sprite.svg';
console.log(icons);

class RecipeUI {
	#resultEl = document.querySelector('.result');
	#recipeEl = document.querySelector('.recipe');
	#data;
	#errorMessage = 'Oops, we could not find recipes, please try again!';

	#clear() {
		this.#resultEl.innerHTML = '';
		this.#recipeEl.innerHTML = '';
	}

	render(data) {
		this.#data = data;
		const resultHtml = this.#generateResultHtml();
		const recipeHtml = this.#generateRecipeHtml();
		this.#clear();
		this.#resultEl.insertAdjacentHTML('afterbegin', resultHtml);
		this.#recipeEl.insertAdjacentHTML('afterbegin', recipeHtml);
	}

	showSpinner() {
		const spinnerHtml = `
			<div class="spinner">
				<svg>
					<use href="${icons}#tabler-loader"></use>
				</svg>
			</div>
		`;
		this.#clear();
		this.#recipeEl.insertAdjacentHTML('afterbegin', spinnerHtml);
	}

	#generateResultHtml() {
		return !this.#data.searchResults.count
			? `
			<span>${this.#errorMessage}</span>
		`
			: `
		<span>${this.#data.searchResults.count} results for "${
					this.#data.searchResults.keyword
			  }"</span>
	`;
	}

	#generateRecipeHtml() {
		console.log(this.#data.recipes);
		return !this.#data.searchResults.count
			? (this.#recipeEl.innerHTML = '')
			: this.#data.recipes.map(this.#generateRecipeCard).join('');
	}

	#generateRecipeCard(result) {
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
								<span class="calories">${result.calories.toFixed(0)}calories</span>
							</div>
							<div class="recipe__info">
								<svg width="24" height="24">
									<use xlink:href="${icons}#tabler-clock"/>
								</svg>
								<span class="time">${result.time}mins</span>
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
