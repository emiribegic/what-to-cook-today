class SearchForm {
	_parentElement = document.querySelector('.search__form');

	getQuery() {
		const input = this._parentElement.querySelector('.search__bar').value;
		this._clearInput();
		return input;
	}

	_clearInput() {
		this._parentElement.querySelector('.search__bar').value = '';
	}

	hideKeyboard() {
		document.activeElement.blur();
		const inputs = document.querySelectorAll('input');
		inputs.forEach(i => i.blur());
	}

	addHandlerSearch(handler) {
		this._parentElement.addEventListener('submit', function (e) {
			e.preventDefault();
			this.hideKeyboard();
			handler();
		});
	}
}

export default new SearchForm();
