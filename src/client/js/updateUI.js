import icons from '@tabler/icons/tabler-sprite.svg';
console.log(icons);

// TODO Webpack not working with private class filed

class RecipeUI {
	#resultEl = document.querySelector('.result');
	#recipeEl = document.querySelector('.recipe');
	#data;

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

	showSpinner = function () {
		const spinnerHtml = `
			<div class="spinner">
				<svg>
					<use href="${icons}#tabler-loader"></use>
				</svg>
			</div>
		`;
		this.#clear();
		this.#recipeEl.insertAdjacentHTML('afterbegin', spinnerHtml);
	};

	#generateResultHtml() {
		// let resultHtml = '';
		// let recipeHtml = '';

		return `
			<span>${this.#data.count} results for "${this.#data.keyword}"</span>
		`;
	}

	#generateRecipeHtml() {
		return this.#data.count > 0
			? `
			<ul class="recipe__container">
				<li class="recipe__card">
					<a class="link recipe__link" href="${this.#data.url}">
						<img class="recipe__img" src="${this.#data.img}" alt="${this.#data.title}">
						<h2 class="recipe__title">${this.#data.title}</h2>
						<div class="recipe__meta">
							<div class="recipe__info">
								<svg width="24" height="24">
									<use xlink:href="${icons}#tabler-flame"/>
								</svg>
								<span class="calories">${this.#data.calories.toFixed(0)}calories</span>
							</div>
							<div class="recipe__info">
								<svg width="24" height="24">
									<use xlink:href="${icons}#tabler-clock"/>
								</svg>
								<span class="time">${this.#data.time}mins</span>
							</div>
							<div class="recipe__info">
								<svg width="24" height="24">
									<use xlink:href="${icons}#tabler-user"/>
								</svg>
								<span class="publisher">${this.#data.publisher}</span>
							</div>
							<div class="recipe__info">
								<ul class="tags">
									${this.#data.tags
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
	}
}

export default new RecipeUI();

// const renderRecipes = (result = {}) => {
// 	let resultHtml = '';
// 	let recipeHtml = '';

// 	resultHtml = `
// 		<span>${result.count} results for "${result.keyword}"</span>
// 	`;

// 	recipeHtml =
// 		result.count > 0
// 			? `
//     <ul class="recipe__container">
//       <li class="recipe__card">
//         <a class="link recipe__link" href="${result.url}">
//           <img class="recipe__img" src="${result.img}" alt="${result.title}">
//           <h2 class="recipe__title">${result.title}</h2>
//           <div class="recipe__meta">
// 						<div class="recipe__info">
// 							<svg width="24" height="24">
// 								<use xlink:href="${icons}#tabler-flame"/>
// 							</svg>
//             	<span class="calories">${result.calories.toFixed(0)}calories</span>
// 						</div>
// 						<div class="recipe__info">
// 							<svg width="24" height="24">
// 								<use xlink:href="${icons}#tabler-clock"/>
// 							</svg>
// 							<span class="time">${result.time}mins</span>
// 						</div>
// 						<div class="recipe__info">
// 							<svg width="24" height="24">
// 								<use xlink:href="${icons}#tabler-user"/>
// 							</svg>
//             	<span class="publisher">${result.publisher}</span>
// 						</div>
// 						<div class="recipe__info">
//             	<ul class="tags">
// 								${result.tags
// 									.slice(0, 5)
// 									.map(label => {
// 										return `<li class="tag">${label}</li>`;
// 									})
// 									.join('')}
//             	</ul>
// 						</div>
//           </div>
//         </a>
//       </li>
//     </ul>
//   `
// 			: `
// 		<span>Oops… Try again!</span>
// 	`;

// 	// if (resultSection && recipeSection) {
// 	resultSection.innerHTML = '';
// 	// showSpinner(recipeSection);
// 	recipeSection.innerHTML = '';

// 	resultSection.insertAdjacentHTML('afterbegin', resultHtml);
// 	recipeSection.insertAdjacentHTML('afterbegin', recipeHtml);
// };

// export { main, resultSection, recipeSection, showSpinner, renderRecipes };
