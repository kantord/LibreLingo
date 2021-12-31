/** @type {import('./router').Router?} */
let router;

/** @param {import('./router').Router?} _ */
function init(_) {
	router = _;
}

export { init, router };
