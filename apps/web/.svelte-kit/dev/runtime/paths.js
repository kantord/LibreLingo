/** @type {string} */
let base = '';

/** @type {string} */
let assets = '';

/** @param {{ base: string, assets: string }} paths */
function set_paths(paths) {
	base = paths.base;
	assets = paths.assets || base;
}

export { assets, base, set_paths };
