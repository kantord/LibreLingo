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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy4vc3JjL2RiL2RiLmpzIiwid2VicGFjazovLy8vLi9zcmMvZGIvZ2V0VXNlckRiTmFtZS5qcyIsIndlYnBhY2s6Ly8vLy4vc3JjL3JvdXRlcy9zaWduLXVwLXN1Y2Nlc3Muc3ZlbHRlIiwid2VicGFjazovLy8vLi9uZXh0VGljayAoaWdub3JlZCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDUztBQUNaOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG1FQUFTO0FBQzNCLFVBQVUsbUJBQU8sQ0FBQyxtRUFBUztBQUMzQjtBQUNBLFFBQVEsaURBQVE7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQkFBTyxDQUFDLDhCQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7O0FBRUEsSUFBSSxJQUF3QjtBQUM1QixzQkFBc0IsbUJBQU8sQ0FBQyw4QkFBUztBQUN2QyxvQkFBb0IsbUJBQU8sQ0FBQyxtRUFBUzs7QUFFckM7QUFDQTtBQUNBLFdBQVcsaURBQVEsaUJBQWlCLEdBQUcsZ0RBQU8sZ0JBQWdCO0FBQzlELFNBQVM7QUFDVDs7QUFFQTtBQUNBLDRCQUE0QixpREFBUTtBQUNwQzs7QUFFQTtBQUNBLFFBQVEsZ0RBQU8sb0JBQW9CLDhEQUFhO0FBQ2hEO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsUUFBUSxnREFBTyxtQkFBbUIsaURBQVE7QUFDMUMsaUJBQWlCLGlEQUFRLGlCQUFpQixhQUFhLHlCQUF5QjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxnREFBTyxnQkFBZ0IsOERBQWE7QUFDNUMscUJBQXFCLGlEQUFRO0FBQzdCLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGlEQUFRLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSxnREFBTyxnQkFBZ0IsOERBQWE7QUFDNUMscUJBQXFCLGlEQUFRO0FBQzdCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpREFBUSxpQkFBaUI7QUFDeEQ7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1QsWUFBWSxnREFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHlCQUF5QjtBQUN2RSxhQUFhO0FBQ2I7QUFDQSw4Q0FBOEMsMEJBQTBCO0FBQ3hFLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRWUsaUVBQUU7Ozs7Ozs7Ozs7Ozs7O0FDbkxqQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsdUZBQXdCLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOUjtBQUNOO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmxDLGUiLCJmaWxlIjoiODFmNjZkNjYxNjIwNjc3YTU3Mzcvc2lnbiQ0NXVwJDQ1c3VjY2Vzcy5zaWduJDQ1dXAkNDVzdWNjZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldHRpbmdzIGZyb20gXCIuLi9zZXR0aW5nc1wiXG5pbXBvcnQgZ2V0VXNlckRiTmFtZSBmcm9tIFwiLi9nZXRVc2VyRGJOYW1lXCJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIlxuXG5sZXQgZGJcbmxldCByZW1vdGVEQlxubGV0IHN5bmNIYW5kbGVyXG5cbmNvbnN0IGNyZWF0ZUxvY2FsUG91Y2hEYiA9IChkYk5hbWUpID0+IHtcbiAgICBjb25zdCBQb3VjaERCID1cbiAgICBwcm9jZXNzLmVudi5KRVNUX1dPUktFUl9JRCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcmVxdWlyZShcInBvdWNoZGJcIilcbiAgICAgICAgOiByZXF1aXJlKFwicG91Y2hkYlwiKS5kZWZhdWx0XG4gICAgY29uc3QgbmV3RGIgPSBuZXcgUG91Y2hEQihkYk5hbWUpLnNldE1heExpc3RlbmVycyhcbiAgICAgICAgc2V0dGluZ3MuZGF0YWJhc2UubWF4TnVtYmVyT2ZMaXN0ZW5lcnNcbiAgICApXG5cbiAgICBuZXdEYlxuICAgICAgICAuY2hhbmdlcyh7XG4gICAgICAgICAgICBzaW5jZTogXCJub3dcIixcbiAgICAgICAgICAgIGxpdmU6IHRydWUsXG4gICAgICAgICAgICBpbmNsdWRlX2RvY3M6IHRydWUsXG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuSkVTVF9XT1JLRVJfSUQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYXV0aFN0b3JlID0gcmVxdWlyZShcIi4uL2F1dGhcIikuZGVmYXVsdFxuICAgICAgICAgICAgYXV0aFN0b3JlLnVwZGF0ZSgodmFsdWUpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4udmFsdWUsXG4gICAgICAgICAgICAgICAgZGJVcGRhdGVkQXQ6IERhdGUubm93KCksXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfSlcblxuICAgIHJldHVybiBuZXdEYlxufVxuXG5pZiAocHJvY2Vzcy5icm93c2VyID09PSB0cnVlKSB7XG4gICAgY29uc3QgYXV0aFN0b3JlID0gcmVxdWlyZShcIi4uL2F1dGhcIikuZGVmYXVsdFxuICAgIGNvbnN0IFBvdWNoREIgPSByZXF1aXJlKFwicG91Y2hkYlwiKS5kZWZhdWx0XG5cbiAgICAvLyBDb25uZWN0IHRvIHJlbW90ZSBkYXRhYmFzZVxuICAgIHJlbW90ZURCID0gbmV3IFBvdWNoREIoXG4gICAgICAgIGAke3NldHRpbmdzLmRhdGFiYXNlLnJlbW90ZX0vJHtDb29raWVzLmdldChcImxvZ2luRGJcIil9YCxcbiAgICAgICAgeyBza2lwX3NldHVwOiB0cnVlLCBsaXZlOiB0cnVlIH1cbiAgICApXG5cbiAgICAvLyBDb25uZWN0IHRvIGxvY2FsIGRhdGFiYXNlXG4gICAgZGIgPSBjcmVhdGVMb2NhbFBvdWNoRGIoc2V0dGluZ3MuZGF0YWJhc2UubG9jYWwpXG4gICAgd2luZG93Ll9EQiA9IGRiXG5cbiAgICAvLyBEZXRlY3QgZmFrZSB1c2VyIHNlc3Npb25cbiAgICBpZiAoQ29va2llcy5nZXQoXCJsb2dpbkRiXCIpID09PSBnZXRVc2VyRGJOYW1lKFwiLS0tZmFrZVVzZXJcIikpIHtcbiAgICAgICAgYXV0aFN0b3JlLnVwZGF0ZSgodmFsdWUpID0+ICh7XG4gICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICAgIHVzZXI6IHsgbmFtZTogXCItLS1mYWtlVXNlclwiIH0sXG4gICAgICAgICAgICBvbmxpbmU6IHRydWUsXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIERldGVjdCBleGlzdGluZyB1c2VyIHNlc3Npb25cbiAgICBpZiAoQ29va2llcy5nZXQoXCJsb2dpbkRiXCIpICYmIHNldHRpbmdzLmZlYXR1cmVzLmF1dGhFbmFibGVkKSB7XG4gICAgICAgIGZldGNoKGAke3NldHRpbmdzLmRhdGFiYXNlLnJlbW90ZX0vX3Nlc3Npb25gLCB7IGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiB9KVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci51c2VyQ3R4Lm5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF1dGhTdG9yZS51cGRhdGUoKHZhbHVlKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogeyBuYW1lOiB1c2VyLnVzZXJDdHgubmFtZSB9LFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIHN0YXJ0U3luYygpXG4gICAgICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgLy8gV2l0aG91dCBhIHNlc3Npb3MsIHRoZXJlIGlzIG5vIHN5bmNcbiAgICAgICAgYXV0aFN0b3JlLnVwZGF0ZSgodmFsdWUpID0+ICh7XG4gICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICAgIG9ubGluZTogZmFsc2UsXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIEZha2UgbG9naW4gZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgICB3aW5kb3cuX2Zha2VMb2dpbiA9ICgpID0+IHtcbiAgICAgICAgQ29va2llcy5zZXQoXCJsb2dpbkRiXCIsIGdldFVzZXJEYk5hbWUoXCItLS1mYWtlVXNlclwiKSwge1xuICAgICAgICAgICAgZXhwaXJlczogc2V0dGluZ3MuZGF0YWJhc2UuYXV0aC5leHBpcmVEYXlzLFxuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2NvdXJzZS9zcGFuaXNoLWZyb20tZW5nbGlzaC9cIlxuICAgIH1cblxuICAgIC8vIEFkZCBsb2dpbiBmdW5jdGlvblxuICAgIHdpbmRvdy5fTG9naW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuX3Rlc3RfY3JlZGVudGlhbHNfY29ycmVjdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCB1c2VybmFtZSBvciBwYXNzd29yZFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5fdGVzdF9jcmVkZW50aWFsc19jb3JyZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Ll9mYWtlTG9naW4oKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCAoXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChgJHtzZXR0aW5ncy5kYXRhYmFzZS5yZW1vdGV9L19zZXNzaW9uYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkuanNvbigpXG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IgPT09IFwidW5hdXRob3JpemVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VybmFtZSBvciBwYXNzd29yZCBpcyBpbmNvcnJlY3RcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGxvZyBpbi4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiKVxuICAgICAgICB9XG5cbiAgICAgICAgYXV0aFN0b3JlLnVwZGF0ZSgodmFsdWUpID0+ICh7XG4gICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICAgIG9ubGluZTogbnVsbCxcbiAgICAgICAgfSkpXG4gICAgICAgIENvb2tpZXMuc2V0KFwibG9naW5EYlwiLCBnZXRVc2VyRGJOYW1lKHVzZXJuYW1lKSwge1xuICAgICAgICAgICAgZXhwaXJlczogc2V0dGluZ3MuZGF0YWJhc2UuYXV0aC5leHBpcmVEYXlzLFxuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2NvdXJzZS9zcGFuaXNoLWZyb20tZW5nbGlzaC9cIlxuICAgIH1cblxuICAgIC8vIExvZ291dFxuICAgIHdpbmRvdy5fTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHN5bmNIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgc3luY0hhbmRsZXIuY2FuY2VsKClcbiAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaChgJHtzZXR0aW5ncy5kYXRhYmFzZS5yZW1vdGV9L19zZXNzaW9uYCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwibG9naW5EYlwiKVxuICAgICAgICAgICAgYXV0aFN0b3JlLnVwZGF0ZSgodmFsdWUpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4udmFsdWUsXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgICAgICAgICBvbmxpbmU6IG51bGwsXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIGF3YWl0IGRiLmRlc3Ryb3koKVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEtlZXAgZGF0YWJhc2VzIGluIHN5bmNcbiAgICBjb25zdCBzdGFydFN5bmMgPSAoKSA9PiB7XG4gICAgICAgIHN5bmNIYW5kbGVyID0gZGJcbiAgICAgICAgICAgIC5zeW5jKHJlbW90ZURCKVxuICAgICAgICAgICAgLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGF1dGhTdG9yZS51cGRhdGUoKHZhbHVlKSA9PiAoeyAuLi52YWx1ZSwgb25saW5lOiB0cnVlIH0pKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhdXRoU3RvcmUudXBkYXRlKCh2YWx1ZSkgPT4gKHsgLi4udmFsdWUsIG9ubGluZTogZmFsc2UgfSkpXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52LkpFU1RfV09SS0VSX0lEICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBUaGlzIGlzIGEgdGVzdCBkYXRhYmFzZSBmb3IgSmVzdCB0ZXN0cyB0aGF0IGNhbiByZXNldCBpdHNlbGZcbiAgICBkYiA9IGNyZWF0ZUxvY2FsUG91Y2hEYihzZXR0aW5ncy5kYXRhYmFzZS5sb2NhbClcbiAgICBkYi5fX3Jlc2V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxEb2NzID0gYXdhaXQgZGIuYWxsRG9jcygpXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgYWxsRG9jcy5yb3dzLm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiLnJlbW92ZShyb3cuaWQsIHJvdy52YWx1ZS5yZXYpXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkYlxuIiwiY29uc3QgaGFzaFVzZXJuYW1lID0gKHVzZXJuYW1lKSA9PlxuICAgIHVzZXJuYW1lXG4gICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAubWFwKChjKSA9PiBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKVxuICAgICAgICAuam9pbihcIlwiKVxuXG5leHBvcnQgZGVmYXVsdCAodXNlcm5hbWUpID0+IGB1c2VyZGItJHtoYXNoVXNlcm5hbWUodXNlcm5hbWUpfWBcbiIsIjxzY3JpcHQgbGFuZz1cInR5cGVzY3JpcHRcIj5pbXBvcnQgZGIgZnJvbSBcIi4uL2RiL2RiLmpzXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhci5zdmVsdGVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcImxsdWlzL0J1dHRvblwiO1xuPC9zY3JpcHQ+XG5cbjxOYXZCYXIgZGFyayAvPlxuXG48c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMiBjbGFzcz1cImlzLXNpemUtMlwiPlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsITwvaDI+XG4gICAgPHA+WW91IGNhbiBub3cgbG9nIGluLjwvcD5cbiAgICA8QnV0dG9uIGhyZWY9XCIvbG9naW5cIj5Mb2cgaW48L0J1dHRvbj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9