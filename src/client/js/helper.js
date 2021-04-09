const humanizeDuration = require('humanize-duration');

export const timeout = function (s) {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(
				new Error(`Request took too long! Timeout after ${s} second`)
			);
		}, s * 1000);
	});
};

// TODO Decide how to render h and m
export const shortEnglishHumanizer = humanizeDuration.humanizer({
	delimiter: ' ',
	spacer: '',
	language: 'shortEn',
	languages: {
		shortEn: {
			y: () => 'y',
			mo: () => 'mo',
			w: () => 'w',
			d: () => 'd',
			h: () => 'hr(s)',
			m: () => 'min(s)',
			s: () => 's',
			ms: () => 'ms',
		},
	},
});
