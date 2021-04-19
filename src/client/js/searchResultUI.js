import BaseUI from './baseUI';

class SearchResultUI extends BaseUI {
	_parentElement = document.querySelector('.recipe__count');
	_errorMessage = '';

	_generateMarkup() {
		return `
			<span>${
				this._data.searchResults.count <= 100
					? this._data.searchResults.count
					: 100
			} results for "${this._data.searchResults.keyword}"</span>
	`;
	}
}

export default new SearchResultUI();
