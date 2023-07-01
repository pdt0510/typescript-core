"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.getInputValue = void 0;
function getInputValue(elementID) {
    const inputElement = document.getElementById(elementID);
    return inputElement.value;
}
exports.getInputValue = getInputValue;
function logger(meg) {
    console.log(meg);
}
exports.logger = logger;
//# sourceMappingURL=utility.js.map