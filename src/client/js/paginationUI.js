import icons from '@tabler/icons/tabler-sprite.svg';
import BaseUI from './baseUI';

class PaginationUI extends BaseUI {
	_parentElement = document.querySelector('.result__pagination');

	addHandlerClick(handler) {
		this._parentElement.addEventListener('click', function (e) {
			e.preventDefault();
			const btn = e.target.closest('.btn--page');
			if (!btn) return;

			const goToPage = +btn.dataset.goto;
			handler(goToPage);
		});
	}

	_generateMarkup() {
		const curPage = this._data.page;
		const numPage = Math.ceil(
			this._data.recipes.length / this._data.recipesPerPage
		);

		// Page 1 and there are other pages
		if (curPage === 1 && numPage > 1) {
			return `
        <span>Page ${curPage} of ${numPage}</span>
        <button data-goto="${curPage + 1}" class="btn btn--page btn--next">
          <svg class="icon" width="24" height="24">
						<use xlink:href="${icons}#tabler-chevron-right"/>
					</svg>
        </button>
      `;
		}

		// Last page
		if (curPage === numPage && numPage > 1) {
			return `
        <button data-goto="${curPage - 1}" class="btn btn--page btn--prev">
          <svg class="icon" width="24" height="24">
						<use xlink:href="${icons}#tabler-chevron-left"/>
					</svg>
        </button>
        <span>Page ${curPage} of ${numPage}</span>
      `;
		}

		// Others
		if (curPage < numPage) {
			return `
        <button data-goto="${curPage - 1}" class="btn btn--page btn--prev">
          <svg class="icon" width="24" height="24">
						<use xlink:href="${icons}#tabler-chevron-left"/>
					</svg>
        </button>
        <span>Page ${curPage} of ${numPage}</span>
        <button data-goto="${curPage + 1}" class="btn btn--page btn--next">
          <svg class="icon" width="24" height="24">
						<use xlink:href="${icons}#tabler-chevron-right"/>
					</svg>
        </button>
      `;
		}

		// Page 1 and there are no other pages
		return '';
	}
}

export default new PaginationUI();
