/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _methods_createRoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./methods/createRoom */ \"./server/methods/createRoom.js\");\n/* harmony import */ var _methods_getRoomsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./methods/getRoomsList */ \"./server/methods/getRoomsList.js\");\n/* harmony import */ var _methods_deleteRoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./methods/deleteRoom */ \"./server/methods/deleteRoom.js\");\n/* harmony import */ var _models_messageDb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/messageDb */ \"./server/models/messageDb.js\");\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar Server = http__WEBPACK_IMPORTED_MODULE_2___default.a.createServer(app);\nvar IO = socket_io__WEBPACK_IMPORTED_MODULE_3___default()(Server, {\n  path: '/api/socket/'\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json());\n\n(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(mongoose__WEBPACK_IMPORTED_MODULE_4___default.a.connect('mongodb://localhost:27017/chat-app', {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n          }));\n\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  });\n})();\n\napp.post('/api/room/', _methods_createRoom__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\napp.get('/api/room/', _methods_getRoomsList__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp[\"delete\"]('/api/room/', _methods_deleteRoom__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nIO.on('connection', function (socket) {\n  console.log('socket00');\n  socket.on('message', function (messageObj) {\n    console.log(messageObj);\n    _models_messageDb__WEBPACK_IMPORTED_MODULE_8__[\"default\"].create(messageObj); // socket.broadcast.emit('message', message);\n  });\n});\nvar PORT = process.env.PORT || 8080;\nServer.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/methods/createRoom.js":
/*!**************************************!*\
  !*** ./server/methods/createRoom.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_roomDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/roomDb */ \"./server/models/roomDb.js\");\n\n\nvar createRoom = function createRoom(req, res) {\n  var name = req.body.name;\n\n  if (name && name.trim() === '') {\n    return res.status(400).json({\n      msg: 'Specify room name.'\n    });\n  }\n\n  _models_roomDb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    name: name\n  }, function (err) {\n    if (err) {\n      return res.status(500).json({\n        msg: err.message\n      });\n    }\n\n    return res.status(200).send();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createRoom);\n\n//# sourceURL=webpack:///./server/methods/createRoom.js?");

/***/ }),

/***/ "./server/methods/deleteRoom.js":
/*!**************************************!*\
  !*** ./server/methods/deleteRoom.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_roomDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/roomDb */ \"./server/models/roomDb.js\");\n\n\nvar deleteRoom = function deleteRoom(req, res) {\n  var _id = req.body._id;\n  _models_roomDb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndRemove(_id, function (err) {\n    if (err) {\n      return res.status(500).json({\n        msg: err.message\n      });\n    }\n\n    return res.status(200).send();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (deleteRoom);\n\n//# sourceURL=webpack:///./server/methods/deleteRoom.js?");

/***/ }),

/***/ "./server/methods/getRoomsList.js":
/*!****************************************!*\
  !*** ./server/methods/getRoomsList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_roomDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/roomDb */ \"./server/models/roomDb.js\");\n\n\nvar getRoomsList = function getRoomsList(req, res) {\n  _models_roomDb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({}, function (err, rooms) {\n    if (err) {\n      return res.status(500).json({\n        msg: err.message\n      });\n    }\n\n    return res.status(200).json(rooms);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getRoomsList);\n\n//# sourceURL=webpack:///./server/methods/getRoomsList.js?");

/***/ }),

/***/ "./server/models/messageDb.js":
/*!************************************!*\
  !*** ./server/models/messageDb.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nvar ObjectId = Schema.ObjectId;\nvar Message = new Schema({\n  id: ObjectId,\n  author: String,\n  text: String,\n  datetime: Date,\n  room: ObjectId\n});\nvar message = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('message', Message);\n/* harmony default export */ __webpack_exports__[\"default\"] = (message);\n\n//# sourceURL=webpack:///./server/models/messageDb.js?");

/***/ }),

/***/ "./server/models/roomDb.js":
/*!*********************************!*\
  !*** ./server/models/roomDb.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nvar ObjectId = Schema.ObjectId;\nvar Room = new Schema({\n  id: ObjectId,\n  name: String\n});\nvar room = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('room', Room);\n/* harmony default export */ __webpack_exports__[\"default\"] = (room);\n\n//# sourceURL=webpack:///./server/models/roomDb.js?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });