import { router as router$1 } from '../internal/singletons.js';
import { g as get_base_uri } from '../chunks/utils.js';

const router = /** @type {import('../client/router').Router} */ (router$1);

/**
 * @param {string} name
 */
function guard(name) {
	return () => {
		throw new Error(`Cannot call ${name}(...) on the server`);
	};
}

const goto = import.meta.env.SSR ? guard('goto') : goto_;
const invalidate = import.meta.env.SSR ? guard('invalidate') : invalidate_;
const prefetch = import.meta.env.SSR ? guard('prefetch') : prefetch_;
const prefetchRoutes = import.meta.env.SSR ? guard('prefetchRoutes') : prefetchRoutes_;

/**
 * @type {import('$app/navigation').goto}
 */
async function goto_(href, opts) {
	return router.goto(href, opts, []);
}

/**
 * @type {import('$app/navigation').invalidate}
 */
async function invalidate_(resource) {
	const { href } = new URL(resource, location.href);
	return router.renderer.invalidate(href);
}

/**
 * @type {import('$app/navigation').prefetch}
 */
function prefetch_(href) {
	return router.prefetch(new URL(href, get_base_uri(document)));
}

/**
 * @type {import('$app/navigation').prefetchRoutes}
 */
async function prefetchRoutes_(pathnames) {
	const matching = pathnames
		? router.routes.filter((route) => pathnames.some((pathname) => route[0].test(pathname)))
		: router.routes;

	const promises = matching.map((r) => Promise.all(r[1].map((load) => load())));

	await Promise.all(promises);
}

export { goto, invalidate, prefetch, prefetchRoutes };
