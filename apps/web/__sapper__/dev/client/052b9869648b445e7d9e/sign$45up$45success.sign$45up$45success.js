(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign$45up$45success"],{

/***/ "./src/db/db.js":
/*!**********************!*\
  !*** ./src/db/db.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings */ "./src/settings.js");
/* harmony import */ var _getUserDbName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getUserDbName */ "./src/db/getUserDbName.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "../../node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);




let db
let remoteDB
let syncHandler

const createLocalPouchDb = (dbName) => {
    const PouchDB =
    process.env.JEST_WORKER_ID !== undefined
        ? __webpack_require__(/*! pouchdb */ "../../node_modules/pouchdb/lib/index-browser.es.js")
        : __webpack_require__(/*! pouchdb */ "../../node_modules/pouchdb/lib/index-browser.es.js").default
    const newDb = new PouchDB(dbName).setMaxListeners(
        _settings__WEBPACK_IMPORTED_MODULE_0__["default"].database.maxNumberOfListeners
    )

    newDb
        .changes({
            since: "now",
            live: true,
            include_docs: true,
        })
        .on("change", () => {
            if (process.env.JEST_WORKER_ID !== undefined) {
                return
            }
            const authStore = __webpack_require__(/*! ../auth */ "./src/auth.js").default
            authStore.update((value) => ({
                ...value,
                dbUpdatedAt: Date.now(),
            }))
        })

    return newDb
}

if (true) {
    const authStore = __webpack_require__(/*! ../auth */ "./src/auth.js").default
    const PouchDB = __webpack_require__(/*! pouchdb */ "../../node_modules/pouchdb/lib/index-browser.es.js").default

    // Connect to remote database
    remoteDB = new PouchDB(
        `${_settings__WEBPACK_IMPORTED_MODULE_0__["default"].database.remote}/${js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("loginDb")}`,
        { skip_setup: true, live: true }
    )

    // Connect to local database
    db = createLocalPouchDb(_settings__WEBPACK_IMPORTED_MODULE_0__["default"].database.local)
    window._DB = db

    // Detect fake user session
    if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("loginDb") === Object(_getUserDbName__WEBPACK_IMPORTED_MODULE_1__["default"])("---fakeUser")) {
        authStore.update((value) => ({
            ...value,
            user: { name: "---fakeUser" },
            online: true,
        }))
    }

    // Detect existing user session
    if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("loginDb") && _settings__WEBPACK_IMPORTED_MODULE_0__["default"].features.authEnabled) {
        fetch(`${_settings__WEBPACK_IMPORTED_MODULE_0__["default"].database.remote}/_session`, { credentials: "include" })
            .then((data) => data.json())
            .then((user) => {
                if (user.userCtx.name === null) {
                    return
                }
                authStore.update((value) => ({
                    ...value,
                    user: { name: user.userCtx.name },
                }))
                startSync()
            })
    } else {
    // Without a sessios, there is no sync
        authStore.update((value) => ({
            ...value,
            online: false,
        }))
    }

    // Fake login for testing purposes
    window._fakeLogin = () => {
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("loginDb", Object(_getUserDbName__WEBPACK_IMPORTED_MODULE_1__["default"])("---fakeUser"), {
            expires: _settings__WEBPACK_IMPORTED_MODULE_0__["default"].database.auth.expireDays,
        })
        window.location.href = "/course/spanish-from-english/"
    }

    // Add login function
    window._Login = async (username, password) => {
        if (window._test_credentials_correct === false) {
            throw new Error("Incorrect username or password")
        }

        if (window._test_credentials_correct === true) {
            return window._fakeLogin()
        }

        const response = await (
            await fetch(`${_settings__WEBPACK_IMPORTED_MODULE_0__["default"].database.remote}/_session`, {
                method: "post",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            })
        ).json()

        if (response.error) {
            if (response.error === "unauthorized") {
                throw new Error("Username or password is incorrect")
            }
            throw new Error("Couldn't log in. Please try again later")
        }

        authStore.update((value) => ({
            ...value,
            online: null,
        }))
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("loginDb", Object(_getUserDbName__WEBPACK_IMPORTED_MODULE_1__["default"])(username), {
            expires: _settings__WEBPACK_IMPORTED_MODULE_0__["default"].database.auth.expireDays,
        })
        window.location.reload(false)
        window.location.href = "/course/spanish-from-english/"
    }

    // Logout
    window._Logout = async () => {
        try {
            if (syncHandler) {
                await syncHandler.cancel()
                await fetch(`${_settings__WEBPACK_IMPORTED_MODULE_0__["default"].database.remote}/_session`, {
                    method: "delete",
                })
            }
        } finally {
            js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove("loginDb")
            authStore.update((value) => ({
                ...value,
                user: null,
                online: null,
            }))
            await db.destroy()
            window.location.reload(false)
        }
    }

    // Keep databases in sync
    const startSync = () => {
        syncHandler = db
            .sync(remoteDB)
            .on("complete", function () {
                authStore.update((value) => ({ ...value, online: true }))
            })
            .on("error", function () {
                authStore.update((value) => ({ ...value, online: false }))
            })
    }
}

if (process.env.JEST_WORKER_ID !== undefined) {
    // This is a test database for Jest tests that can reset itself
    db = createLocalPouchDb(_settings__WEBPACK_IMPORTED_MODULE_0__["default"].database.local)
    db.__reset = async () => {
        const allDocs = await db.allDocs()
        await Promise.all(
            allDocs.rows.map(function (row) {
                return db.remove(row.id, row.value.rev)
            })
        )
    }
}

/* harmony default export */ __webpack_exports__["default"] = (db);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "./src/db/getUserDbName.js":
/*!*********************************!*\
  !*** ./src/db/getUserDbName.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hashUsername = (username) =>
    username
        .split("")
        .map((c) => c.charCodeAt(0).toString(16))
        .join("")

/* harmony default export */ __webpack_exports__["default"] = ((username) => `userdb-${hashUsername(username)}`);


/***/ }),

/***/ "./src/routes/sign-up-success.svelte":
/*!*******************************************!*\
  !*** ./src/routes/sign-up-success.svelte ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _db_db_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/db.js */ "./src/db/db.js");
/* harmony import */ var _components_NavBar_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar.svelte */ "./src/components/NavBar.svelte");
/* harmony import */ var lluis_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lluis/Button */ "../lluis/Button.svelte");
/* src/routes/sign-up-success.svelte generated by Svelte v3.32.3 */





const file = "src/routes/sign-up-success.svelte";

// (12:4) <Button href="/login">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Log in");
		},
		l: function claim(nodes) {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "Log in");
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(12:4) <Button href=\\\"/login\\\">",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let navbar;
	let t0;
	let section;
	let div;
	let h2;
	let t1;
	let t2;
	let p;
	let t3;
	let t4;
	let button;
	let current;
	navbar = new _components_NavBar_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({ props: { dark: true }, $$inline: true });

	button = new lluis_Button__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				href: "/login",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(navbar.$$.fragment);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("section");
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Registration successful!");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("You can now log in.");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(button.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(navbar.$$.fragment, nodes);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SECTION", { class: true });
			var section_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(section);
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", { class: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "H2", { class: true });
			var h2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h2);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h2_nodes, "Registration successful!");
			h2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div_nodes);
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "P", {});
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, "You can now log in.");
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div_nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(button.$$.fragment, div_nodes);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			section_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h2, "class", "is-size-2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h2, file, 9, 4, 225);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 10, 4, 281);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", "container");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 8, 2, 197);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(section, "class", "section");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section, file, 7, 0, 169);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(navbar, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, section, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, h2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h2, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(button, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 1) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(navbar.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(navbar.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(navbar, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(section);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(button);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Sign_up_success", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Sign_up_success> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ db: _db_db_js__WEBPACK_IMPORTED_MODULE_1__["default"], NavBar: _components_NavBar_svelte__WEBPACK_IMPORTED_MODULE_2__["default"], Button: lluis_Button__WEBPACK_IMPORTED_MODULE_3__["default"] });
	return [];
}

class Sign_up_success extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Sign_up_success",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Sign_up_success);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** ./nextTick (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGIvZGIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL2dldFVzZXJEYk5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9zaWduLXVwLXN1Y2Nlc3Muc3ZlbHRlIiwid2VicGFjazovLy8uL25leHRUaWNrIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQztBQUNTO0FBQ1o7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsbUVBQVM7QUFDM0IsVUFBVSxtQkFBTyxDQUFDLG1FQUFTO0FBQzNCO0FBQ0EsUUFBUSxpREFBUTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1CQUFPLENBQUMsOEJBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQSxJQUFJLElBQXdCO0FBQzVCLHNCQUFzQixtQkFBTyxDQUFDLDhCQUFTO0FBQ3ZDLG9CQUFvQixtQkFBTyxDQUFDLG1FQUFTOztBQUVyQztBQUNBO0FBQ0EsV0FBVyxpREFBUSxpQkFBaUIsR0FBRyxnREFBTyxnQkFBZ0I7QUFDOUQsU0FBUztBQUNUOztBQUVBO0FBQ0EsNEJBQTRCLGlEQUFRO0FBQ3BDOztBQUVBO0FBQ0EsUUFBUSxnREFBTyxvQkFBb0IsOERBQWE7QUFDaEQ7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxRQUFRLGdEQUFPLG1CQUFtQixpREFBUTtBQUMxQyxpQkFBaUIsaURBQVEsaUJBQWlCLGFBQWEseUJBQXlCO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRCxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGdEQUFPLGdCQUFnQiw4REFBYTtBQUM1QyxxQkFBcUIsaURBQVE7QUFDN0IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsaURBQVEsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLGdEQUFPLGdCQUFnQiw4REFBYTtBQUM1QyxxQkFBcUIsaURBQVE7QUFDN0IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlEQUFRLGlCQUFpQjtBQUN4RDtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVCxZQUFZLGdEQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMseUJBQXlCO0FBQ3ZFLGFBQWE7QUFDYjtBQUNBLDhDQUE4QywwQkFBMEI7QUFDeEUsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixpREFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFZSxpRUFBRTs7Ozs7Ozs7Ozs7Ozs7QUNuTGpCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx1RkFBd0IsdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05SO0FBQ047QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEMsZSIsImZpbGUiOiIwNTJiOTg2OTY0OGI0NDVlN2Q5ZS9zaWduJDQ1dXAkNDVzdWNjZXNzLnNpZ24kNDV1cCQ0NXN1Y2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2V0dGluZ3MgZnJvbSBcIi4uL3NldHRpbmdzXCJcbmltcG9ydCBnZXRVc2VyRGJOYW1lIGZyb20gXCIuL2dldFVzZXJEYk5hbWVcIlxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiXG5cbmxldCBkYlxubGV0IHJlbW90ZURCXG5sZXQgc3luY0hhbmRsZXJcblxuY29uc3QgY3JlYXRlTG9jYWxQb3VjaERiID0gKGRiTmFtZSkgPT4ge1xuICAgIGNvbnN0IFBvdWNoREIgPVxuICAgIHByb2Nlc3MuZW52LkpFU1RfV09SS0VSX0lEICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyByZXF1aXJlKFwicG91Y2hkYlwiKVxuICAgICAgICA6IHJlcXVpcmUoXCJwb3VjaGRiXCIpLmRlZmF1bHRcbiAgICBjb25zdCBuZXdEYiA9IG5ldyBQb3VjaERCKGRiTmFtZSkuc2V0TWF4TGlzdGVuZXJzKFxuICAgICAgICBzZXR0aW5ncy5kYXRhYmFzZS5tYXhOdW1iZXJPZkxpc3RlbmVyc1xuICAgIClcblxuICAgIG5ld0RiXG4gICAgICAgIC5jaGFuZ2VzKHtcbiAgICAgICAgICAgIHNpbmNlOiBcIm5vd1wiLFxuICAgICAgICAgICAgbGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGluY2x1ZGVfZG9jczogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5KRVNUX1dPUktFUl9JRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhdXRoU3RvcmUgPSByZXF1aXJlKFwiLi4vYXV0aFwiKS5kZWZhdWx0XG4gICAgICAgICAgICBhdXRoU3RvcmUudXBkYXRlKCh2YWx1ZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYlVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9KVxuXG4gICAgcmV0dXJuIG5ld0RiXG59XG5cbmlmIChwcm9jZXNzLmJyb3dzZXIgPT09IHRydWUpIHtcbiAgICBjb25zdCBhdXRoU3RvcmUgPSByZXF1aXJlKFwiLi4vYXV0aFwiKS5kZWZhdWx0XG4gICAgY29uc3QgUG91Y2hEQiA9IHJlcXVpcmUoXCJwb3VjaGRiXCIpLmRlZmF1bHRcblxuICAgIC8vIENvbm5lY3QgdG8gcmVtb3RlIGRhdGFiYXNlXG4gICAgcmVtb3RlREIgPSBuZXcgUG91Y2hEQihcbiAgICAgICAgYCR7c2V0dGluZ3MuZGF0YWJhc2UucmVtb3RlfS8ke0Nvb2tpZXMuZ2V0KFwibG9naW5EYlwiKX1gLFxuICAgICAgICB7IHNraXBfc2V0dXA6IHRydWUsIGxpdmU6IHRydWUgfVxuICAgIClcblxuICAgIC8vIENvbm5lY3QgdG8gbG9jYWwgZGF0YWJhc2VcbiAgICBkYiA9IGNyZWF0ZUxvY2FsUG91Y2hEYihzZXR0aW5ncy5kYXRhYmFzZS5sb2NhbClcbiAgICB3aW5kb3cuX0RCID0gZGJcblxuICAgIC8vIERldGVjdCBmYWtlIHVzZXIgc2Vzc2lvblxuICAgIGlmIChDb29raWVzLmdldChcImxvZ2luRGJcIikgPT09IGdldFVzZXJEYk5hbWUoXCItLS1mYWtlVXNlclwiKSkge1xuICAgICAgICBhdXRoU3RvcmUudXBkYXRlKCh2YWx1ZSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgICAgdXNlcjogeyBuYW1lOiBcIi0tLWZha2VVc2VyXCIgfSxcbiAgICAgICAgICAgIG9ubGluZTogdHJ1ZSxcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gRGV0ZWN0IGV4aXN0aW5nIHVzZXIgc2Vzc2lvblxuICAgIGlmIChDb29raWVzLmdldChcImxvZ2luRGJcIikgJiYgc2V0dGluZ3MuZmVhdHVyZXMuYXV0aEVuYWJsZWQpIHtcbiAgICAgICAgZmV0Y2goYCR7c2V0dGluZ3MuZGF0YWJhc2UucmVtb3RlfS9fc2Vzc2lvbmAsIHsgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIH0pXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigodXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLnVzZXJDdHgubmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXV0aFN0b3JlLnVwZGF0ZSgodmFsdWUpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB7IG5hbWU6IHVzZXIudXNlckN0eC5uYW1lIH0sXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgc3RhcnRTeW5jKClcbiAgICAgICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAvLyBXaXRob3V0IGEgc2Vzc2lvcywgdGhlcmUgaXMgbm8gc3luY1xuICAgICAgICBhdXRoU3RvcmUudXBkYXRlKCh2YWx1ZSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgICAgb25saW5lOiBmYWxzZSxcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gRmFrZSBsb2dpbiBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuICAgIHdpbmRvdy5fZmFrZUxvZ2luID0gKCkgPT4ge1xuICAgICAgICBDb29raWVzLnNldChcImxvZ2luRGJcIiwgZ2V0VXNlckRiTmFtZShcIi0tLWZha2VVc2VyXCIpLCB7XG4gICAgICAgICAgICBleHBpcmVzOiBzZXR0aW5ncy5kYXRhYmFzZS5hdXRoLmV4cGlyZURheXMsXG4gICAgICAgIH0pXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvY291cnNlL3NwYW5pc2gtZnJvbS1lbmdsaXNoL1wiXG4gICAgfVxuXG4gICAgLy8gQWRkIGxvZ2luIGZ1bmN0aW9uXG4gICAgd2luZG93Ll9Mb2dpbiA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5fdGVzdF9jcmVkZW50aWFsc19jb3JyZWN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IHVzZXJuYW1lIG9yIHBhc3N3b3JkXCIpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93Ll90ZXN0X2NyZWRlbnRpYWxzX2NvcnJlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuX2Zha2VMb2dpbigpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IChcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKGAke3NldHRpbmdzLmRhdGFiYXNlLnJlbW90ZX0vX3Nlc3Npb25gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKS5qc29uKClcblxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvciA9PT0gXCJ1bmF1dGhvcml6ZWRcIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXJuYW1lIG9yIHBhc3N3b3JkIGlzIGluY29ycmVjdFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgbG9nIGluLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIpXG4gICAgICAgIH1cblxuICAgICAgICBhdXRoU3RvcmUudXBkYXRlKCh2YWx1ZSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgICAgb25saW5lOiBudWxsLFxuICAgICAgICB9KSlcbiAgICAgICAgQ29va2llcy5zZXQoXCJsb2dpbkRiXCIsIGdldFVzZXJEYk5hbWUodXNlcm5hbWUpLCB7XG4gICAgICAgICAgICBleHBpcmVzOiBzZXR0aW5ncy5kYXRhYmFzZS5hdXRoLmV4cGlyZURheXMsXG4gICAgICAgIH0pXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvY291cnNlL3NwYW5pc2gtZnJvbS1lbmdsaXNoL1wiXG4gICAgfVxuXG4gICAgLy8gTG9nb3V0XG4gICAgd2luZG93Ll9Mb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoc3luY0hhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBzeW5jSGFuZGxlci5jYW5jZWwoKVxuICAgICAgICAgICAgICAgIGF3YWl0IGZldGNoKGAke3NldHRpbmdzLmRhdGFiYXNlLnJlbW90ZX0vX3Nlc3Npb25gLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJsb2dpbkRiXCIpXG4gICAgICAgICAgICBhdXRoU3RvcmUudXBkYXRlKCh2YWx1ZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICAgICAgICAgIG9ubGluZTogbnVsbCxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgYXdhaXQgZGIuZGVzdHJveSgpXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gS2VlcCBkYXRhYmFzZXMgaW4gc3luY1xuICAgIGNvbnN0IHN0YXJ0U3luYyA9ICgpID0+IHtcbiAgICAgICAgc3luY0hhbmRsZXIgPSBkYlxuICAgICAgICAgICAgLnN5bmMocmVtb3RlREIpXG4gICAgICAgICAgICAub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYXV0aFN0b3JlLnVwZGF0ZSgodmFsdWUpID0+ICh7IC4uLnZhbHVlLCBvbmxpbmU6IHRydWUgfSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGF1dGhTdG9yZS51cGRhdGUoKHZhbHVlKSA9PiAoeyAuLi52YWx1ZSwgb25saW5lOiBmYWxzZSB9KSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuSkVTVF9XT1JLRVJfSUQgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIFRoaXMgaXMgYSB0ZXN0IGRhdGFiYXNlIGZvciBKZXN0IHRlc3RzIHRoYXQgY2FuIHJlc2V0IGl0c2VsZlxuICAgIGRiID0gY3JlYXRlTG9jYWxQb3VjaERiKHNldHRpbmdzLmRhdGFiYXNlLmxvY2FsKVxuICAgIGRiLl9fcmVzZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbERvY3MgPSBhd2FpdCBkYi5hbGxEb2NzKClcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBhbGxEb2NzLnJvd3MubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGIucmVtb3ZlKHJvdy5pZCwgcm93LnZhbHVlLnJldilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiXG4iLCJjb25zdCBoYXNoVXNlcm5hbWUgPSAodXNlcm5hbWUpID0+XG4gICAgdXNlcm5hbWVcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoKGMpID0+IGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpXG4gICAgICAgIC5qb2luKFwiXCIpXG5cbmV4cG9ydCBkZWZhdWx0ICh1c2VybmFtZSkgPT4gYHVzZXJkYi0ke2hhc2hVc2VybmFtZSh1c2VybmFtZSl9YFxuIiwiPHNjcmlwdCBsYW5nPVwidHlwZXNjcmlwdFwiPmltcG9ydCBkYiBmcm9tIFwiLi4vZGIvZGIuanNcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyLnN2ZWx0ZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwibGx1aXMvQnV0dG9uXCI7XG48L3NjcmlwdD5cblxuPE5hdkJhciBkYXJrIC8+XG5cbjxzZWN0aW9uIGNsYXNzPVwic2VjdGlvblwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgyIGNsYXNzPVwiaXMtc2l6ZS0yXCI+UmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwhPC9oMj5cbiAgICA8cD5Zb3UgY2FuIG5vdyBsb2cgaW4uPC9wPlxuICAgIDxCdXR0b24gaHJlZj1cIi9sb2dpblwiPkxvZyBpbjwvQnV0dG9uPlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=