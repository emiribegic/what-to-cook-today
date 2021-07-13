import icons from '../../img/symbol-defs.svg';

class RenderIcons {
	_parentForm = document.querySelector('.search__btn');
	_parentSns = document.querySelector('.footer__contact');
	_sns = [
		{ href: 'mailto:emiri.begic@gmail.com', name: 'mail' },
		{ href: 'https://github.com/emiribegic', name: 'github' },
		{ href: 'https://www.linkedin.com/in/emiribegic', name: 'linkedin' },
		{ href: 'https://twitter.com/EmiliaLala6', name: 'twitter' },
	];

	render() {
		const markupForm = this._generateFormIcon();
		this._parentForm.insertAdjacentHTML('afterbegin', markupForm);
		const markupSns = this._generateSnsIcons();
		this._parentSns.insertAdjacentHTML('afterbegin', markupSns);
	}

	addHandlerIcons(handler) {
		window.addEventListener('load', function () {
			handler();
		});
	}

	_generateFormIcon() {
		return `
			<svg class="icon icon-search">
				<use xlink:href="${icons}#icon-search" />
			</svg>
		`;
	}

	_generateSnsIcons() {
		return this._sns.map(this._generateSnsList).join('');
	}

	_generateSnsList(snsData) {
		return `
			<li class="footer__sns">
				<a class="link footer__link " href="${snsData.href}" target="_blank">
					<svg class="icon icon-sns icon-${snsData.name}">
						<use xlink:href="${icons}#icon-${snsData.name}" />
					</svg>
				</a>
			</li>
		`;
	}
}

export default new RenderIcons();
