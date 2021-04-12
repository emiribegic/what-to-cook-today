import BaseUI from './baseUI';

class SearchResultUI extends BaseUI {
	_parentElement = document.querySelector('.result__count');
	_errorMessage = 'Oops, we could not find any recipes, please try again!';

	_generateMarkup() {
		return !this._data.searchResults.count
			? `
			<span>${this._errorMessage}</span>
		`
			: `
		<span>${
			this._data.searchResults.count <= 100
				? this._data.searchResults.count
				: 100
		} results for "${this._data.searchResults.keyword}"</span>
	`;
	}
}

export default new SearchResultUI();
