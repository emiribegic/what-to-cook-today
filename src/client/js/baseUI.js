import icons from '@tabler/icons/tabler-sprite.svg';

export default class BaseUI {
	_data;

	render(data) {
		this._data = data;

		const markup = this._generateMarkup();
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	_clear() {
		this._parentElement.innerHTML = '';
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
      <div class="error">
        <span>${message}</span>
      </div>
    `;
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}
}
