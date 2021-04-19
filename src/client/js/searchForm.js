import icons from '../img/symbol-defs.svg';

class SearchForm {
	_parentElement = document.querySelector('.search__form');
	btn = document.querySelector('.search__btn');

	showSearchIcon() {
		const icon = `
			<svg class="icon icon-search">
				<use xlink:href="${icons}#icon-search" />
			</svg>
		`;
		this.btn.insertAdjacentHTML('afterbegin', icon);
	}

	getQuery() {
		const input = this._parentElement.querySelector('.search__bar').value;
		this._clearInput();
		return input;
	}

	_clearInput() {
		this._parentElement.querySelector('.search__bar').value = '';
	}

	addHandlerIcon(handler) {
		window.addEventListener('load', function () {
			handler();
		});
	}

	addHandlerSearch(handler) {
		this._parentElement.addEventListener('submit', function (e) {
			e.preventDefault();
			handler();
		});
	}
}

export default new SearchForm();
