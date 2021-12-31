const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../../../src/routes/__error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/sign-up-success.svelte"),
	() => import("../../../src/routes/dev-typography.svelte"),
	() => import("../../../src/routes/devtools.svelte"),
	() => import("../../../src/routes/license.svelte"),
	() => import("../../../src/routes/sign-up.svelte"),
	() => import("../../../src/routes/course/[courseName]/index.svelte"),
	() => import("../../../src/routes/course/[courseName]/skill/[id]/index.svelte"),
	() => import("../../../src/routes/course/[courseName]/skill/[id]/introduction.svelte"),
	() => import("../../../src/routes/about.svelte"),
	() => import("../../../src/routes/login.svelte"),
	() => import("../../../src/routes/tos.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/sign-up-success.svelte
	[/^\/sign-up-success\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/dev-typography.svelte
	[/^\/dev-typography\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/devtools.svelte
	[/^\/devtools\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/license.svelte
	[/^\/license\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/sign-up.svelte
	[/^\/sign-up\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/course/[courseName]/index.svelte
	[/^\/course\/([^/]+?)\/?$/, [c[0], c[8]], [c[1]], (m) => ({ courseName: d(m[1])})],

	// src/routes/course/[courseName]/skill/[id]/index.svelte
	[/^\/course\/([^/]+?)\/skill\/([^/]+?)\/?$/, [c[0], c[9]], [c[1]], (m) => ({ courseName: d(m[1]), id: d(m[2])})],

	// src/routes/course/[courseName]/skill/[id]/introduction.svelte
	[/^\/course\/([^/]+?)\/skill\/([^/]+?)\/introduction\/?$/, [c[0], c[10]], [c[1]], (m) => ({ courseName: d(m[1]), id: d(m[2])})],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/login.svelte
	[/^\/login\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/tos.svelte
	[/^\/tos\/?$/, [c[0], c[13]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];