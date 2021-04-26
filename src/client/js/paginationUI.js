import icons from '../img/symbol-defs.svg';
import BaseUI from './baseUI';

class PaginationUI extends BaseUI {
	_parentElement = document.querySelector('.recipe__pagination');

	addHandlerClick(handler) {
		this._parentElement.addEventListener('click', function (e) {
			e.preventDefault();
			const btn = e.target.closest('.recipe__btn');
			if (!btn) return;

			const goToPage = +btn.dataset.goto;
			handler(goToPage);
		});
	}

	scrollToTop() {
		const recipeSec = document.querySelector('.recipe');
		recipeSec.scrollIntoView();
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
        <button data-goto="${
			curPage + 1
		}" class="btn recipe__btn recipe__btn--next">
          <svg class="icon icon-next">
						<use xlink:href="${icons}#icon-next" />
					</svg>
        </button>
      `;
		}

		// Last page
		if (curPage === numPage && numPage > 1) {
			return `
        <button data-goto="${
			curPage - 1
		}" class="btn recipe__btn recipe__btn--prev">
          <svg class="icon icon-previous">
						<use xlink:href="${icons}#icon-previous" />
					</svg>
        </button>
        <span>Page ${curPage} of ${numPage}</span>
      `;
		}

		// Others
		if (curPage < numPage) {
			return `
        <button data-goto="${
			curPage - 1
		}" class="btn recipe__btn recipe__btn--prev">
          <svg class="icon icon-previous">
            <use xlink:href="${icons}#icon-previous" />
          </svg>
        </button>
        <span>Page ${curPage} of ${numPage}</span>
        <button data-goto="${
			curPage + 1
		}" class="btn recipe__btn recipe__btn--next">
          <svg class="icon icon-next">
            <use xlink:href="${icons}#icon-next" />
          </svg>
        </button>
      `;
		}

		// Page 1 and there are no other pages
		return '';
	}
}

export default new PaginationUI();
