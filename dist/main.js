/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = () => {\n    const contentFoot = document.createElement('footer');\n    contentFoot.classList.add('footer');\n    const text = document.createElement('p');\n    text.textContent = '@2025';\n    contentFoot.appendChild(text);\n    return contentFoot;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://tallerwebpack/./src/components/footer.js?\n}");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = () => {\n    const cabecera = document.createElement('header');\n    cabecera.classList.add('header');\n\n    const menuBtn = document.createElement('button');\n    const iconoMenu = document.createElement('span');\n    iconoMenu.classList.add('material-symbols-outlined');\n    iconoMenu.textContent = 'menu';\n    menuBtn.appendChild(iconoMenu);\n    menuBtn.addEventListener('click', () => {\n        const menuContent = document.getElementById('menuPrincipal');\n        menuContent.classList.add('open');\n    });\n\n\n    const titulo = document.createElement('h1');\n    titulo.textContent = 'Responsive';\n\n    cabecera.appendChild(menuBtn);\n    cabecera.appendChild(titulo);\n    return cabecera;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://tallerwebpack/./src/components/header.js?\n}");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemMenu = (text, onItemClick) => {\n    const li = document.createElement('li');\n    const button = document.createElement('button');\n\n    const span = document.createElement('span');\n    span.classList.add('material-symbols-outlined');\n    span.textContent = 'home'\n    button.appendChild(span);\n\n    button.innerHTML += text;\n    button.addEventListener('click', () => onItemClick(text));\n    //button.innerHTML = button.innerHTML + text;\n    li.appendChild(button);\n    return li;\n};\n\nconst menu = (navegateTo) => {\n    const nav = document.createElement('nav');\n    nav.setAttribute('id', 'menuPrincipal');\n    nav.classList.add('menu');\n\n    const closeBtn = document.createElement('button');\n    closeBtn.classList.add('close-btn');\n\n    const iconClose = document.createElement('span');\n    iconClose.classList.add('material-symbols-outlined');\n    iconClose.textContent = 'close';\n    closeBtn.appendChild(iconClose);\n    closeBtn.addEventListener('click', () => {\n        nav.classList.remove('open');\n    });\n\n    const list = document.createElement('ul');\n    const options = [\n        'Responsive',\n        'Ionic',\n        'Reactnative',\n        'Android',\n        'Consultar logs'\n    ];\n    for (let item of options) {\n        list.appendChild(itemMenu(item, (text) => {\n            navegateTo(text);\n            nav.classList.remove('open');\n        }));\n    }\n    // list.appendChild(itemMenu('Responsive'));\n    // list.appendChild(itemMenu('Ionic'));\n    // list.appendChild(itemMenu('Reactnative'));\n    // list.appendChild(itemMenu('Android'));\n\n    const div = document.createElement('div');\n    div.appendChild(closeBtn);\n    div.appendChild(list);\n\n    nav.appendChild(div);\n    return nav;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://tallerwebpack/./src/components/menu.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/app.scss */ \"./src/sass/app.scss\");\n/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu.js */ \"./src/components/menu.js\");\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header.js */ \"./src/components/header.js\");\n/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer.js */ \"./src/components/footer.js\");\n/* harmony import */ var _pages_inicioPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/inicioPage.js */ \"./src/pages/inicioPage.js\");\n/* harmony import */ var _pages_ionicPage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/ionicPage.js */ \"./src/pages/ionicPage.js\");\n/* harmony import */ var _pages_reactnativePage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/reactnativePage.js */ \"./src/pages/reactnativePage.js\");\n/* harmony import */ var _pages_androidPage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/androidPage.js */ \"./src/pages/androidPage.js\");\n/* harmony import */ var _pages_logPage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/logPage.js */ \"./src/pages/logPage.js\");\n\n\n//import button from './components/buttons.js';\n\n\n\n\n\n\n\n\n\n\nconst routesPages = (namePage) => {\n    const content = document.getElementById('content-page');\n    content.innerHTML = '';\n    switch (namePage) {\n        case 'Ionic':\n            content.appendChild((0,_pages_ionicPage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n            break;\n        case 'Reactnative':\n            content.appendChild((0,_pages_reactnativePage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n            break;\n        case 'Android':\n            content.appendChild((0,_pages_androidPage_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])());\n            break;\n        case 'Consultar logs':\n            content.appendChild((0,_pages_logPage_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])());\n            break;\n        default: //'Responsive' | 'defaul'\n            content.appendChild((0,_pages_inicioPage_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n            break;\n    }\n    // localStorage.setItem('click_menu', namePage);\n    // const clickLocal = localStorage.getItem('click_menu');\n    // console.log(clickLocal);\n    sessionStorage.setItem('click_menu', namePage);\n    const clickLocal = sessionStorage.getItem('click_menu');\n    console.log(clickLocal);\n    console.log(localStorage.length)\n    console.log(localStorage.key(0))\n    console.log(localStorage.key(1))\n    console.log(localStorage.getItem(localStorage.key(1)))\n}\n\nconst page = document.getElementById('page');\n//page.classList.add('principal');\npage.appendChild((0,_components_header_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\npage.appendChild((0,_components_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((namePage) => {\n    routesPages(namePage)\n}));\n\nconst contentPage = document.createElement('main');\ncontentPage.setAttribute('id', 'content-page');\npage.appendChild(contentPage);\nroutesPages('default');\n\npage.appendChild((0,_components_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\n\n\n//# sourceURL=webpack://tallerwebpack/./src/index.js?\n}");

/***/ }),

/***/ "./src/pages/androidPage.js":
/*!**********************************!*\
  !*** ./src/pages/androidPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst androidPage = ()=>{\n    const contentPage = document.createElement('section');\n\n    const titulo = document.createElement('h2');\n    titulo.textContent = 'Aplicaciones en android';\n\n    contentPage.appendChild(titulo);\n    return contentPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (androidPage);\n\n//# sourceURL=webpack://tallerwebpack/./src/pages/androidPage.js?\n}");

/***/ }),

/***/ "./src/pages/inicioPage.js":
/*!*********************************!*\
  !*** ./src/pages/inicioPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../services/endpoints.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nconst inicioPage = ()=>{\n    const contentPage = document.createElement('section');\n\n    const titulo = document.createElement('h2');\n    titulo.textContent = 'Aplicaciones web responsive';\n\n    contentPage.appendChild(titulo);\n\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../services/endpoints.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n    return contentPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inicioPage);\n\n//# sourceURL=webpack://tallerwebpack/./src/pages/inicioPage.js?\n}");

/***/ }),

/***/ "./src/pages/ionicPage.js":
/*!********************************!*\
  !*** ./src/pages/ionicPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ionicPage = ()=>{\n    const contentPage = document.createElement('section');\n\n    const titulo = document.createElement('h2');\n    titulo.textContent = 'Aplicaciones en ionic';\n\n    contentPage.appendChild(titulo);\n    return contentPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ionicPage);\n\n//# sourceURL=webpack://tallerwebpack/./src/pages/ionicPage.js?\n}");

/***/ }),

/***/ "./src/pages/logPage.js":
/*!******************************!*\
  !*** ./src/pages/logPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst logPage = () => {\n    const contentPage = document.createElement('section');\n\n    const titulo = document.createElement('h2');\n    titulo.textContent = 'Logs';\n\n    contentPage.appendChild(titulo);\n\n    const table = document.createElement('table');\n    const thead = document.createElement('thead');\n    const tr = document.createElement('tr');\n    const th1 = document.createElement('th');\n    th1.textContent = 'Log';\n    const th2 = document.createElement('th');\n    th2.textContent = 'Valor';\n    tr.appendChild(th1);\n    tr.appendChild(th2);\n    thead.appendChild(tr);\n\n    const tbody = document.createElement('tbody');\n\n    for (let index = 0; index < localStorage.length; index++) {\n        const keyLocal = localStorage.key(index);\n        const valueLocal = localStorage.getItem(keyLocal);\n\n        const row = document.createElement('tr');\n        const log = document.createElement('td');\n        const val = document.createElement('td');\n        log.textContent = keyLocal;\n        val.textContent = valueLocal;\n        row.appendChild(log);\n        row.appendChild(val);\n        tbody.appendChild(row);\n    }\n\n    table.appendChild(thead);\n    table.appendChild(tbody);\n    contentPage.appendChild(table);\n\n    return contentPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logPage);\n\n//# sourceURL=webpack://tallerwebpack/./src/pages/logPage.js?\n}");

/***/ }),

/***/ "./src/pages/reactnativePage.js":
/*!**************************************!*\
  !*** ./src/pages/reactnativePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reactnativePage = ()=>{\n    const contentPage = document.createElement('section');\n\n    const titulo = document.createElement('h2');\n    titulo.textContent = 'Aplicaciones en reactnative';\n\n    contentPage.appendChild(titulo);\n    return contentPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reactnativePage);\n\n//# sourceURL=webpack://tallerwebpack/./src/pages/reactnativePage.js?\n}");

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/***/ (() => {

eval("{throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> * {\\n|     margin: 0px;\\n|     padding: 0px;\");\n\n//# sourceURL=webpack://tallerwebpack/./src/sass/app.scss?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;