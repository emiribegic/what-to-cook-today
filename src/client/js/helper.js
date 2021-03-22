// TODO Set timeout here or client side? If here is fine, can i create helper.js for server???, logs in terminal, not console
export const timeout = function (s) {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(
				new Error(`Request took too long! Timeout after ${s} second`)
			);
		}, s * 1000);
	});
};
