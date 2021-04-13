import icons from '@tabler/icons/tabler-sprite.svg';
// TODO Delete later
// console.log(icons);

export default class BaseUI {
	_data;

	render(data) {
		if (!data || (Array.isArray(data) && data.length === 0))
			return this.showError();

		this._data = data;

		const markup = this._generateMarkup();
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	_clear() {
		this._parentElement.innerHTML = '';
	}

	showSearching() {
		const markup = `
      <span>Searching...</span>
    `;
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	showSpinner() {
		const markup = `
			<div class="spinner">
				<svg>
					<use href="${icons}#tabler-loader"></use>
				</svg>
			</div>
		`;
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	showError(message = this._errorMessage) {
		const markup = `
      <span class="error">${message}</span>
    `;
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}
}
