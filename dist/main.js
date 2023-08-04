/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node{
    constructor(coord, previousNode=null){
        this.coord=coord;
        this.previousNode=previousNode;
    }
}



/***/ }),

/***/ "./src/findMoves.js":
/*!**************************!*\
  !*** ./src/findMoves.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findMoves: () => (/* binding */ findMoves)
/* harmony export */ });
//generates the possible moves the knight can make
function findMoves(knight) {
    const moves = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];
    return moves.map(([x, y]) => [knight[0] + x, knight[1] + y]).filter(isValidMove);
  }
  
  function isValidMove([x, y]) {
    return x >= 1 && x <= 8 && y >= 1 && y <= 8;
  }



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _findMoves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findMoves */ "./src/findMoves.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ "./src/Node.js");



//a helper function to determine if an array of coordinates(in the form [1,1]) has in it a certain coordinate
function arrayIncludes(array1, array2){
    for (let i=0; i<array1.length; i++){
        if (array1[i][0]===array2[0]&&array1[i][1] === array2[1]) return true
    }
    return false
}

//builds a tree with the possible paths a knight can move, till it reaches the desired coordinate
//uses the breadth first algorithm to go through the tree
//the link between the nodes is provided through the "previousNode" value
function knightMoves(start=root, finish, queue=[]){
    let nextMoves=(0,_findMoves__WEBPACK_IMPORTED_MODULE_0__.findMoves)(start.coord);

    if (arrayIncludes(nextMoves, finish)) return start
        else {
            let i=0;
            let length=nextMoves.length;
                
            while (i<length)
                {
                    let node=new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(nextMoves[i], start);
                    queue.push(node);
                    i++;
                }
    }
    return knightMoves(queue.shift(), finish, queue)
}

//start and end coordinates
let startingPoint=[1,1];
let end=[8,8];

//root of the tree
let root=new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(startingPoint);

//displays the path provided by the algorithm in the form of a string
let finalNode=knightMoves(root, end);
let path=`[${end}] `;
let steps=0;

while (finalNode != null){
    path=`[${finalNode.coord}]-> `+ path;
    finalNode=finalNode.previousNode;
    steps++;
}

console.log(`You will need a minimum of ${steps} steps:`, path);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDVjs7QUFFOUI7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscURBQVM7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVDQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLHVDQUFJOztBQUVqQjtBQUNBO0FBQ0EsYUFBYSxJQUFJO0FBQ2pCOztBQUVBO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9Ob2RlLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvZmluZE1vdmVzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vZGV7XG4gICAgY29uc3RydWN0b3IoY29vcmQsIHByZXZpb3VzTm9kZT1udWxsKXtcbiAgICAgICAgdGhpcy5jb29yZD1jb29yZDtcbiAgICAgICAgdGhpcy5wcmV2aW91c05vZGU9cHJldmlvdXNOb2RlO1xuICAgIH1cbn1cblxuZXhwb3J0IHtOb2RlfTsiLCIvL2dlbmVyYXRlcyB0aGUgcG9zc2libGUgbW92ZXMgdGhlIGtuaWdodCBjYW4gbWFrZVxuZnVuY3Rpb24gZmluZE1vdmVzKGtuaWdodCkge1xuICAgIGNvbnN0IG1vdmVzID0gW1xuICAgICAgWzEsIDJdLFxuICAgICAgWzEsIC0yXSxcbiAgICAgIFstMSwgMl0sXG4gICAgICBbLTEsIC0yXSxcbiAgICAgIFsyLCAxXSxcbiAgICAgIFsyLCAtMV0sXG4gICAgICBbLTIsIDFdLFxuICAgICAgWy0yLCAtMV0sXG4gICAgXTtcbiAgICByZXR1cm4gbW92ZXMubWFwKChbeCwgeV0pID0+IFtrbmlnaHRbMF0gKyB4LCBrbmlnaHRbMV0gKyB5XSkuZmlsdGVyKGlzVmFsaWRNb3ZlKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gaXNWYWxpZE1vdmUoW3gsIHldKSB7XG4gICAgcmV0dXJuIHggPj0gMSAmJiB4IDw9IDggJiYgeSA+PSAxICYmIHkgPD0gODtcbiAgfVxuXG5leHBvcnR7ZmluZE1vdmVzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGZpbmRNb3ZlcyB9IGZyb20gXCIuL2ZpbmRNb3Zlc1wiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL05vZGVcIjtcblxuLy9hIGhlbHBlciBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgYW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMoaW4gdGhlIGZvcm0gWzEsMV0pIGhhcyBpbiBpdCBhIGNlcnRhaW4gY29vcmRpbmF0ZVxuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheTEsIGFycmF5Mil7XG4gICAgZm9yIChsZXQgaT0wOyBpPGFycmF5MS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChhcnJheTFbaV1bMF09PT1hcnJheTJbMF0mJmFycmF5MVtpXVsxXSA9PT0gYXJyYXkyWzFdKSByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuLy9idWlsZHMgYSB0cmVlIHdpdGggdGhlIHBvc3NpYmxlIHBhdGhzIGEga25pZ2h0IGNhbiBtb3ZlLCB0aWxsIGl0IHJlYWNoZXMgdGhlIGRlc2lyZWQgY29vcmRpbmF0ZVxuLy91c2VzIHRoZSBicmVhZHRoIGZpcnN0IGFsZ29yaXRobSB0byBnbyB0aHJvdWdoIHRoZSB0cmVlXG4vL3RoZSBsaW5rIGJldHdlZW4gdGhlIG5vZGVzIGlzIHByb3ZpZGVkIHRocm91Z2ggdGhlIFwicHJldmlvdXNOb2RlXCIgdmFsdWVcbmZ1bmN0aW9uIGtuaWdodE1vdmVzKHN0YXJ0PXJvb3QsIGZpbmlzaCwgcXVldWU9W10pe1xuICAgIGxldCBuZXh0TW92ZXM9ZmluZE1vdmVzKHN0YXJ0LmNvb3JkKTtcblxuICAgIGlmIChhcnJheUluY2x1ZGVzKG5leHRNb3ZlcywgZmluaXNoKSkgcmV0dXJuIHN0YXJ0XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGk9MDtcbiAgICAgICAgICAgIGxldCBsZW5ndGg9bmV4dE1vdmVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHdoaWxlIChpPGxlbmd0aClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlPW5ldyBOb2RlKG5leHRNb3Zlc1tpXSwgc3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga25pZ2h0TW92ZXMocXVldWUuc2hpZnQoKSwgZmluaXNoLCBxdWV1ZSlcbn1cblxuLy9zdGFydCBhbmQgZW5kIGNvb3JkaW5hdGVzXG5sZXQgc3RhcnRpbmdQb2ludD1bMSwxXTtcbmxldCBlbmQ9WzgsOF07XG5cbi8vcm9vdCBvZiB0aGUgdHJlZVxubGV0IHJvb3Q9bmV3IE5vZGUoc3RhcnRpbmdQb2ludCk7XG5cbi8vZGlzcGxheXMgdGhlIHBhdGggcHJvdmlkZWQgYnkgdGhlIGFsZ29yaXRobSBpbiB0aGUgZm9ybSBvZiBhIHN0cmluZ1xubGV0IGZpbmFsTm9kZT1rbmlnaHRNb3Zlcyhyb290LCBlbmQpO1xubGV0IHBhdGg9YFske2VuZH1dIGA7XG5sZXQgc3RlcHM9MDtcblxud2hpbGUgKGZpbmFsTm9kZSAhPSBudWxsKXtcbiAgICBwYXRoPWBbJHtmaW5hbE5vZGUuY29vcmR9XS0+IGArIHBhdGg7XG4gICAgZmluYWxOb2RlPWZpbmFsTm9kZS5wcmV2aW91c05vZGU7XG4gICAgc3RlcHMrKztcbn1cblxuY29uc29sZS5sb2coYFlvdSB3aWxsIG5lZWQgYSBtaW5pbXVtIG9mICR7c3RlcHN9IHN0ZXBzOmAsIHBhdGgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9