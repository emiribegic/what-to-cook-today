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

	addHandlerSearch(handler) {
		this._parentElement.addEventListener('submit', function (e) {
			e.preventDefault();
			handler();
		});
	}
}

export default new SearchForm();
