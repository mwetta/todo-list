/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"unsafeStringify\": () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\n\nconst Project = (projectName, projectDescription) =>\n{\n    let id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    let date = Date.now();\n    let name = projectName;\n    let description = projectDescription;\n    \n    const getId = () => id;\n    const getName = () => name;\n    const getDescription = () => description;\n    const getDate = () => date;\n    const getProject = () => {\n        let obj = {'id': id, 'name': name, 'description': description, 'date': date, 'tasks': tasks};\n        return obj\n    }\n    const setProject = (storedObject) => {\n        id = storedObject.id; \n        date = storedObject.date;\n        name = storedObject.name;\n        description = storedObject.description;\n        tasks = storedObject.tasks;\n    }\n\n    let tasks = [];\n    const addTaskToProject = (task) => tasks.push(task);\n\n    return { getId, getName, getDescription, getDate, getProject, setProject, addTaskToProject }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo.js */ \"./src/toDo.js\");\n/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectController.js */ \"./src/projectController.js\");\n/* harmony import */ var _toDoController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoController.js */ \"./src/toDoController.js\");\n/* harmony import */ var _projectListController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectListController.js */ \"./src/projectListController.js\");\n/* harmony import */ var _uiController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uiController.js */ \"./src/uiController.js\");\n\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\n    _uiController_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].writeMenu(\"content\");\n})\n\n// projectController.create('this project', 'all the tasks for the this project');\n_toDoController_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create('first competency', 'dueDate', 'description', 'priority', 'notes', 'dda42d4f-3183-4468-9458-7f450d2e0729');\n\nconst createDefaultProject = () => {\n    let currentProjects = _projectListController_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getProjectList();\n    let checkForDefault = currentProjects.find(currentProject => currentProject.getName() === 'default');\n    if (checkForDefault === undefined) {\n        _projectController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create('default', 'default project for unassigned tasks')\n    }\n}\n\ncreateDefaultProject();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _projectListController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectListController.js */ \"./src/projectListController.js\");\n\n\n\nconst projectController = (() => {\n    const create = (name, description) => {\n        let newProject = (0,_Project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name, description);\n        _projectListController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProject(newProject);\n    }\n\n    const edit = () => {\n\n    }\n    \n    const remove = () => {\n\n    }\n    return {create};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectController);\n\n//# sourceURL=webpack://todo-list/./src/projectController.js?");

/***/ }),

/***/ "./src/projectListController.js":
/*!**************************************!*\
  !*** ./src/projectListController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ \"./src/projectController.js\");\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _storageCoordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageCoordinator.js */ \"./src/storageCoordinator.js\");\n\n\n\n\n\nconst projectListController = (() => {\n    const projects = () => {\n        if (!localStorage.getItem('projects')) \n        {   let projectList = new Array;\n            return projectList\n        } else { \n            let projectList = localStorage.getItem('projects');\n            let currentProjects = JSON.parse(projectList);\n            let newCurrentProjects = [];\n            currentProjects.forEach(project => {\n                let newProject = (0,_Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(project.name, project.description);\n                newProject.setProject(project);\n                newCurrentProjects.push(newProject);\n            });\n            return newCurrentProjects\n        }\n    }    \n\n    const addProject = (newProject) => {\n        let currentProjects = projects();\n        currentProjects.push(newProject);\n        let newCurrentProjects = updateProjectList(currentProjects);\n        // let newCurrentProjects = [];\n        // currentProjects.forEach(project => {\n        //     let newProject = project.getProject();\n        //     newCurrentProjects.push(newProject);\n        // });\n        _storageCoordinator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].store('projects', JSON.stringify(newCurrentProjects)); \n    }\n\n    const addToDo = (newToDo) => {\n        let currentProjects = projects();\n        let toDoProject = newToDo.getProject();\n        let task = newToDo.getToDo();\n        let index = currentProjects.findIndex(project=>project.getId() === toDoProject);\n        let currentProject = currentProjects[index];\n        currentProject.addTaskToProject(task);\n        let newCurrentProjects = updateProjectList(currentProjects);\n        // let newCurrentProjects = [];\n        // currentProjects.forEach(project => {\n        //     let newProject = project.getProject();\n        //     newCurrentProjects.push(newProject);\n        // });\n        _storageCoordinator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].store('projects', JSON.stringify(newCurrentProjects)); \n    }\n\n    const removeProject = (currentProject) => {\n        \n    }\n\n    const updateProjectList = (currentProjects) => {\n        let newCurrentProjects = [];\n        currentProjects.forEach(project => {\n            let newProject = project.getProject();\n            newCurrentProjects.push(newProject);\n        });\n        return newCurrentProjects\n    }\n\n    const getProjectList = () => projects();\n\n    return {addProject, removeProject, getProjectList, addToDo}\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectListController);\n\n\n//# sourceURL=webpack://todo-list/./src/projectListController.js?");

/***/ }),

/***/ "./src/storageCoordinator.js":
/*!***********************************!*\
  !*** ./src/storageCoordinator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ \"./src/projectController.js\");\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n\n\n\nconst storageCoordinator = (() => {\n    const store = (key, value) => {\n        console.log(key);\n        console.log(value);\n        localStorage.setItem(key, value);\n    }\n\n    const retrieve = (key) => {\n        localStorage.getItem(`${key}`);\n    }\n\n    return {store, retrieve}\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageCoordinator);\n\n//# sourceURL=webpack://todo-list/./src/storageCoordinator.js?");

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\nconst toDo = (name, dueDate, description, priority, notes, project) => {\n    let id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    let date = Date.now();\n\n    const getId = () => id;\n    const getDateCreated = () => date;\n    const getName = () => name;\n    const getDueDate = () => dueDate;\n    const getDescription = () => description;\n    const getPriority = () => priority;\n    const getNotes = () => notes;\n    const getProject = () => {\n        if (project === undefined) { return 'default'}\n        else {\n            return project // here need to get project.id\n        };\n    \n        }\n    const getToDo = () => { \n        let obj = {\n            'id': id,\n            'date': date,\n            'name': name,\n            'dueDate': dueDate,\n            'description': description,\n            'priority': priority,\n            'notes': notes,\n            'project': getProject() \n        }\n        return obj\n    }\n    const setToDo = (storedObject) => {\n        id = storedObject.id; \n        date = storedObject.date;\n        name = storedObject.name;\n        dueDate = storedObject.dueDate;\n        description = storedObject.description;\n        priority = storedObject.priority;\n        notes = storedObject.notes;\n    }\n\n        return {\n            getId,\n            getDateCreated,\n            getName,\n            getDueDate,\n            getDescription,\n            getPriority,\n            getNotes,\n            getProject,\n            getToDo,\n            setToDo\n        }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDo);\n\n//# sourceURL=webpack://todo-list/./src/toDo.js?");

/***/ }),

/***/ "./src/toDoController.js":
/*!*******************************!*\
  !*** ./src/toDoController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectListController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectListController.js */ \"./src/projectListController.js\");\n/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo.js */ \"./src/toDo.js\");\n\n\n\nconst toDoController = (() => {\n    const create = (name, dueDate, description, priority, notes, project) => {\n        let newToDo = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(name, dueDate, description, priority, notes, project);\n        _projectListController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addToDo(newToDo)\n    }\n\n    const edit = (toDoId) => {\n        // use toDoId to identify specific project\n        // take new name and description\n        // hand off to storage, which in turn hands off to DOM controller\n    }\n\n    const remove = (toDoId) => {\n        // use toDoId to identify specific project\n        // invoke remove from storage\n    }\n\n\n    return {create, edit, remove}\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoController);\n\n//# sourceURL=webpack://todo-list/./src/toDoController.js?");

/***/ }),

/***/ "./src/uiController.js":
/*!*****************************!*\
  !*** ./src/uiController.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _projectListController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectListController.js */ \"./src/projectListController.js\");\n\n\n\n\nconst uiController = (() => {\n\n    const writeMenu = (elm) => {\n        let content = window.document.getElementById(elm);\n        console.log(content);\n        let menu = document.createElement('div');\n        menu.setAttribute('id', 'menu');\n        content.appendChild(menu);\n    }\n\nreturn {writeMenu}\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uiController);\n\n//# sourceURL=webpack://todo-list/./src/uiController.js?");

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