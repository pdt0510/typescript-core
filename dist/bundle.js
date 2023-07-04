/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/account-list.ts":
/*!*************************************!*\
  !*** ./src/scripts/account-list.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountList: () => (/* binding */ AccountList)
/* harmony export */ });
var AccountList = /** @class */ (function () {
    function AccountList() {
        this._accountList = []; //xx4
    }
    AccountList.prototype.add = function (account) {
        this._accountList.push(account);
    };
    AccountList.prototype.getAccounts = function () {
        return this._accountList;
    };
    return AccountList;
}());



/***/ }),

/***/ "./src/scripts/bank-account.ts":
/*!*************************************!*\
  !*** ./src/scripts/bank-account.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankAccount: () => (/* binding */ BankAccount)
/* harmony export */ });
// 2ms50ss
var BankAccount = /** @class */ (function () {
    function BankAccount(accountSettings) {
        this._balance = 0;
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }
    // 7ms44ss
    BankAccount.prototype.deposit = function (amount) {
        console.log('BankAccount deposit ---');
        this.balance += amount;
    };
    // 7ms44ss
    BankAccount.prototype.withdrawal = function (amount) {
        this.balance -= amount;
    };
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (val) {
            if (val >= 0) {
                this._balance = val;
            }
            else {
                throw Error('Balance cannot be negative!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return BankAccount;
}());



/***/ }),

/***/ "./src/scripts/checking-account.ts":
/*!*****************************************!*\
  !*** ./src/scripts/checking-account.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckingAccount: () => (/* binding */ CheckingAccount)
/* harmony export */ });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__.AccountType.Checking;
        return _this;
    }
    // 6ms48ss
    CheckingAccount.prototype.getAccountInfo = function () {
        return {};
    };
    return CheckingAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__.BankAccount));



/***/ }),

/***/ "./src/scripts/enums.ts":
/*!******************************!*\
  !*** ./src/scripts/enums.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountType: () => (/* binding */ AccountType)
/* harmony export */ });
var AccountType;
(function (AccountType) {
    AccountType[AccountType["Checking"] = 0] = "Checking";
    AccountType[AccountType["Savings"] = 1] = "Savings";
})(AccountType || (AccountType = {}));


/***/ }),

/***/ "./src/scripts/renderer.ts":
/*!*********************************!*\
  !*** ./src/scripts/renderer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Renderer: () => (/* binding */ Renderer)
/* harmony export */ });
var Renderer = /** @class */ (function () {
    function Renderer(viewTemplate) {
        this.viewTemplate = viewTemplate;
        this.viewTemplate.innerHTML = '<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />';
    }
    Renderer.prototype.render = function (html) {
        this.viewTemplate.innerHTML = html;
    };
    Renderer.prototype.renderError = function (message) {
        this.viewTemplate.innerHTML += "<br /><br /><div class=\"alert alert-danger\">" + message + "</div>";
    };
    return Renderer;
}());



/***/ }),

/***/ "./src/scripts/savings-account.ts":
/*!****************************************!*\
  !*** ./src/scripts/savings-account.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SavingsAccount: () => (/* binding */ SavingsAccount)
/* harmony export */ });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountSettings) {
        var _this = _super.call(this, accountSettings) || this;
        _this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__.AccountType.Savings; //3ms49ss
        _this._interestRate = accountSettings.interestRate;
        // Simulate interest over time
        setInterval(function () {
            _this.addInterest();
        }, 60000);
        return _this;
    }
    // 4ms38ss
    SavingsAccount.prototype.getAccountInfo = function () {
        return {};
    };
    // 08ss
    SavingsAccount.prototype.deposit = function (amount) {
        console.log('deposit overriding in SavingsAccount ---');
        var newAmount = amount + amount * (this._interestRate / 100);
        this.balance += newAmount;
    };
    SavingsAccount.prototype.addInterest = function () {
        this.balance = this.balance + this.balance * (this._interestRate / 100);
    };
    return SavingsAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__.BankAccount));



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
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/checking-account */ "./src/scripts/checking-account.ts");
/* harmony import */ var _scripts_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/renderer */ "./src/scripts/renderer.ts");
/* harmony import */ var _scripts_savings_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/savings-account */ "./src/scripts/savings-account.ts");
/* harmony import */ var _scripts_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/enums */ "./src/scripts/enums.ts");
/* harmony import */ var _scripts_account_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/account-list */ "./src/scripts/account-list.ts");





var Main = /** @class */ (function () {
    // bankAccount: BankAccount; // 2ms50ss
    // bankAccount: new BankAccount(); //err
    function Main(renderer) {
        this.renderer = renderer;
        // Create CheckingAccount instance
        this.checkingAccount = new _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__.CheckingAccount({
            id: 1,
            title: 'Jane Doe Checking',
            balance: 5000,
        });
        this.savingsAccount = new _scripts_savings_account__WEBPACK_IMPORTED_MODULE_2__.SavingsAccount({
            id: 100,
            title: 'Jane Doe Savings',
            balance: 10000,
            interestRate: 2.5,
        });
        var html = this.renderAccounts();
        this.renderer.render('<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />' + html);
    }
    Main.prototype.renderAccounts = function () {
        var acctsHtml = '';
        var accList = new _scripts_account_list__WEBPACK_IMPORTED_MODULE_4__.AccountList(); //xx4
        accList.add(this.checkingAccount);
        accList.add(this.savingsAccount);
        accList.getAccounts().forEach(function (acct, index) {
            acctsHtml += acct.title + '<br />';
        });
        return acctsHtml;
    };
    Main.prototype.changeView = function (view) {
        switch (view) {
            case 'checking':
                this.currentAccount = this.checkingAccount;
                break;
            case 'savings':
                this.currentAccount = this.savingsAccount;
                break;
        }
        this.renderAccount(this.currentAccount); //08ss
    };
    Main.prototype.renderAccount = function (account) {
        var accountType = _scripts_enums__WEBPACK_IMPORTED_MODULE_3__.AccountType[account.accountType];
        var html = "\n                <h3>" + accountType + " Account</h3>\n                <br />\n                <span class=\"label\">Owner:</span> " + account.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + account.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit) {
        var amountInput = document.querySelector('#depositWithdrawalAmount');
        var amount = +amountInput.value;
        var error;
        try {
            if (deposit) {
                this.currentAccount.deposit(amount); //08ss overrided if it's savings
            }
            else {
                this.currentAccount.withdrawal(amount);
            }
        }
        catch (e) {
            error = e;
        }
        this.renderAccount(this.currentAccount);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    return Main;
}());
// Create main object and add handlers for it
var renderer = new _scripts_renderer__WEBPACK_IMPORTED_MODULE_1__.Renderer(document.querySelector('#viewTemplate'));
var main = new Main(renderer);
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but that's not the focus of this demo
window.main = main;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUNGLFdBQUM7QUFBRCxDQUFDO0FBRUQsNkNBQTZDO0FBQzdDLElBQU0sUUFBUSxHQUFHLElBQUksdURBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFaEMsNkVBQTZFO0FBQzdFLDZEQUE2RDtBQUM3RCxrRUFBa0U7QUFDNUQsTUFBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyby10by10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvYWNjb3VudC1saXN0LnRzIiwid2VicGFjazovL2ludHJvLXRvLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9iYW5rLWFjY291bnQudHMiLCJ3ZWJwYWNrOi8vaW50cm8tdG8tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL2NoZWNraW5nLWFjY291bnQudHMiLCJ3ZWJwYWNrOi8vaW50cm8tdG8tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL2VudW1zLnRzIiwid2VicGFjazovL2ludHJvLXRvLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly9pbnRyby10by10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvc2F2aW5ncy1hY2NvdW50LnRzIiwid2VicGFjazovL2ludHJvLXRvLXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50cm8tdG8tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50cm8tdG8tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ludHJvLXRvLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbnRyby10by10eXBlc2NyaXB0Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFua0FjY291bnQgfSBmcm9tICcuL2JhbmstYWNjb3VudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWNjb3VudExpc3Qge1xyXG5cdF9hY2NvdW50TGlzdDogQmFua0FjY291bnRbXSA9IFtdOyAvL3h4NFxyXG5cclxuXHRhZGQoYWNjb3VudDogQmFua0FjY291bnQpIHtcclxuXHRcdHRoaXMuX2FjY291bnRMaXN0LnB1c2goYWNjb3VudCk7XHJcblx0fVxyXG5cclxuXHRnZXRBY2NvdW50cygpOiBCYW5rQWNjb3VudFtdIHtcclxuXHRcdHJldHVybiB0aGlzLl9hY2NvdW50TGlzdDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tICcuL2VudW1zJztcblxuLy8gMm1zNTBzc1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhbmtBY2NvdW50IHtcblx0cHJpdmF0ZSBfYmFsYW5jZSA9IDA7XG5cdGlkOiBudW1iZXI7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGFic3RyYWN0IGFjY291bnRUeXBlOiBBY2NvdW50VHlwZTsgLy8zbXM0OXNzXG5cblx0Y29uc3RydWN0b3IoYWNjb3VudFNldHRpbmdzOiBhbnkpIHtcblx0XHR0aGlzLmlkID0gYWNjb3VudFNldHRpbmdzLmlkO1xuXHRcdHRoaXMudGl0bGUgPSBhY2NvdW50U2V0dGluZ3MudGl0bGU7XG5cdFx0dGhpcy5iYWxhbmNlID0gYWNjb3VudFNldHRpbmdzLmJhbGFuY2U7XG5cdH1cblxuXHQvLyA3bXM0NHNzXG5cdGRlcG9zaXQoYW1vdW50OiBudW1iZXIpIHtcblx0XHRjb25zb2xlLmxvZygnQmFua0FjY291bnQgZGVwb3NpdCAtLS0nKTtcblx0XHR0aGlzLmJhbGFuY2UgKz0gYW1vdW50O1xuXHR9XG5cblx0Ly8gN21zNDRzc1xuXHR3aXRoZHJhd2FsKGFtb3VudDogbnVtYmVyKSB7XG5cdFx0dGhpcy5iYWxhbmNlIC09IGFtb3VudDtcblx0fVxuXG5cdGFic3RyYWN0IGdldEFjY291bnRJbmZvKCk6IGFueTsgLy80bXMzOHNzXG5cblx0Z2V0IGJhbGFuY2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2JhbGFuY2U7XG5cdH1cblxuXHRzZXQgYmFsYW5jZSh2YWw6IG51bWJlcikge1xuXHRcdGlmICh2YWwgPj0gMCkge1xuXHRcdFx0dGhpcy5fYmFsYW5jZSA9IHZhbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ0JhbGFuY2UgY2Fubm90IGJlIG5lZ2F0aXZlIScpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgQmFua0FjY291bnQgfSBmcm9tICcuL2JhbmstYWNjb3VudCc7XHJcbmltcG9ydCB7IEFjY291bnRUeXBlIH0gZnJvbSAnLi9lbnVtcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tpbmdBY2NvdW50IGV4dGVuZHMgQmFua0FjY291bnQge1xyXG5cdGFjY291bnRUeXBlID0gQWNjb3VudFR5cGUuQ2hlY2tpbmc7XHJcblxyXG5cdC8vIDZtczQ4c3NcclxuXHRnZXRBY2NvdW50SW5mbygpIHtcclxuXHRcdHJldHVybiB7fTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gQWNjb3VudFR5cGUge1xuICAgIENoZWNraW5nLFxuICAgIFNhdmluZ3Ncbn0iLCJleHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld1RlbXBsYXRlOiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSAnPGgyPldlbGNvbWUgdG8gQWNtZSBCYW5rITwvaDI+PGJyIC8+PGg1PllvdXIgQWNjb3VudHM6PC9oNT48YnIgLz4nO1xuICAgIH1cblxuICAgIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG5cbiAgICByZW5kZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MICs9IGA8YnIgLz48YnIgLz48ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmA7XG4gICAgfVxufSIsImltcG9ydCB7IEJhbmtBY2NvdW50IH0gZnJvbSAnLi9iYW5rLWFjY291bnQnO1xuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tICcuL2VudW1zJztcblxuZXhwb3J0IGNsYXNzIFNhdmluZ3NBY2NvdW50IGV4dGVuZHMgQmFua0FjY291bnQge1xuXHRwcml2YXRlIF9pbnRlcmVzdFJhdGU6IG51bWJlcjtcblx0YWNjb3VudFR5cGUgPSBBY2NvdW50VHlwZS5TYXZpbmdzOyAvLzNtczQ5c3NcblxuXHRjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IGFueSkge1xuXHRcdHN1cGVyKGFjY291bnRTZXR0aW5ncyk7XG5cdFx0dGhpcy5faW50ZXJlc3RSYXRlID0gYWNjb3VudFNldHRpbmdzLmludGVyZXN0UmF0ZTtcblxuXHRcdC8vIFNpbXVsYXRlIGludGVyZXN0IG92ZXIgdGltZVxuXHRcdHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdHRoaXMuYWRkSW50ZXJlc3QoKTtcblx0XHR9LCA2MDAwMCk7XG5cdH1cblxuXHQvLyA0bXMzOHNzXG5cdGdldEFjY291bnRJbmZvKCkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdC8vIDA4c3Ncblx0ZGVwb3NpdChhbW91bnQ6IG51bWJlcikge1xuXHRcdGNvbnNvbGUubG9nKCdkZXBvc2l0IG92ZXJyaWRpbmcgaW4gU2F2aW5nc0FjY291bnQgLS0tJyk7XG5cdFx0bGV0IG5ld0Ftb3VudCA9IGFtb3VudCArIGFtb3VudCAqICh0aGlzLl9pbnRlcmVzdFJhdGUgLyAxMDApO1xuXHRcdHRoaXMuYmFsYW5jZSArPSBuZXdBbW91bnQ7XG5cdH1cblxuXHRwcml2YXRlIGFkZEludGVyZXN0KCkge1xuXHRcdHRoaXMuYmFsYW5jZSA9IHRoaXMuYmFsYW5jZSArIHRoaXMuYmFsYW5jZSAqICh0aGlzLl9pbnRlcmVzdFJhdGUgLyAxMDApO1xuXHR9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENoZWNraW5nQWNjb3VudCB9IGZyb20gJy4vc2NyaXB0cy9jaGVja2luZy1hY2NvdW50JztcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9zY3JpcHRzL3JlbmRlcmVyJztcbmltcG9ydCB7IEJhbmtBY2NvdW50IH0gZnJvbSAnLi9zY3JpcHRzL2JhbmstYWNjb3VudCc7XG5pbXBvcnQgeyBTYXZpbmdzQWNjb3VudCB9IGZyb20gJy4vc2NyaXB0cy9zYXZpbmdzLWFjY291bnQnO1xuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tICcuL3NjcmlwdHMvZW51bXMnO1xuaW1wb3J0IHsgQWNjb3VudExpc3QgfSBmcm9tICcuL3NjcmlwdHMvYWNjb3VudC1saXN0JztcblxuY2xhc3MgTWFpbiB7XG5cdGNoZWNraW5nQWNjb3VudDogQ2hlY2tpbmdBY2NvdW50O1xuXHRzYXZpbmdzQWNjb3VudDogU2F2aW5nc0FjY291bnQ7XG5cdGN1cnJlbnRBY2NvdW50OiBCYW5rQWNjb3VudDtcblx0Ly8gYmFua0FjY291bnQ6IEJhbmtBY2NvdW50OyAvLyAybXM1MHNzXG5cdC8vIGJhbmtBY2NvdW50OiBuZXcgQmFua0FjY291bnQoKTsgLy9lcnJcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xuXHRcdC8vIENyZWF0ZSBDaGVja2luZ0FjY291bnQgaW5zdGFuY2Vcblx0XHR0aGlzLmNoZWNraW5nQWNjb3VudCA9IG5ldyBDaGVja2luZ0FjY291bnQoe1xuXHRcdFx0aWQ6IDEsXG5cdFx0XHR0aXRsZTogJ0phbmUgRG9lIENoZWNraW5nJyxcblx0XHRcdGJhbGFuY2U6IDUwMDAsXG5cdFx0fSk7XG5cdFx0dGhpcy5zYXZpbmdzQWNjb3VudCA9IG5ldyBTYXZpbmdzQWNjb3VudCh7XG5cdFx0XHRpZDogMTAwLFxuXHRcdFx0dGl0bGU6ICdKYW5lIERvZSBTYXZpbmdzJyxcblx0XHRcdGJhbGFuY2U6IDEwMDAwLFxuXHRcdFx0aW50ZXJlc3RSYXRlOiAyLjUsIC8vMDhzc1xuXHRcdH0pO1xuXHRcdGxldCBodG1sID0gdGhpcy5yZW5kZXJBY2NvdW50cygpO1xuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKCc8aDI+V2VsY29tZSB0byBBY21lIEJhbmshPC9oMj48YnIgLz48aDU+WW91ciBBY2NvdW50czo8L2g1PjxiciAvPicgKyBodG1sKTtcblx0fVxuXG5cdHJlbmRlckFjY291bnRzKCkge1xuXHRcdGxldCBhY2N0c0h0bWw6IHN0cmluZyA9ICcnO1xuXHRcdGNvbnN0IGFjY0xpc3QgPSBuZXcgQWNjb3VudExpc3QoKTsgLy94eDRcblx0XHRhY2NMaXN0LmFkZCh0aGlzLmNoZWNraW5nQWNjb3VudCk7XG5cdFx0YWNjTGlzdC5hZGQodGhpcy5zYXZpbmdzQWNjb3VudCk7XG5cdFx0YWNjTGlzdC5nZXRBY2NvdW50cygpLmZvckVhY2goKGFjY3QsIGluZGV4KSA9PiB7XG5cdFx0XHRhY2N0c0h0bWwgKz0gYWNjdC50aXRsZSArICc8YnIgLz4nO1xuXHRcdH0pO1xuXHRcdHJldHVybiBhY2N0c0h0bWw7XG5cdH1cblxuXHRjaGFuZ2VWaWV3KHZpZXc/OiBzdHJpbmcpIHtcblx0XHRzd2l0Y2ggKHZpZXcpIHtcblx0XHRcdGNhc2UgJ2NoZWNraW5nJzpcblx0XHRcdFx0dGhpcy5jdXJyZW50QWNjb3VudCA9IHRoaXMuY2hlY2tpbmdBY2NvdW50O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3NhdmluZ3MnOlxuXHRcdFx0XHR0aGlzLmN1cnJlbnRBY2NvdW50ID0gdGhpcy5zYXZpbmdzQWNjb3VudDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHRoaXMucmVuZGVyQWNjb3VudCh0aGlzLmN1cnJlbnRBY2NvdW50KTsgLy8wOHNzXG5cdH1cblxuXHRyZW5kZXJBY2NvdW50KGFjY291bnQ6IEJhbmtBY2NvdW50KSB7XG5cdFx0Y29uc3QgYWNjb3VudFR5cGUgPSBBY2NvdW50VHlwZVthY2NvdW50LmFjY291bnRUeXBlXTtcblx0XHRjb25zdCBodG1sID0gYFxuICAgICAgICAgICAgICAgIDxoMz4ke2FjY291bnRUeXBlfSBBY2NvdW50PC9oMz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+T3duZXI6PC9zcGFuPiAke2FjY291bnQudGl0bGV9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkJhbGFuY2U6PC9zcGFuPiAkJHthY2NvdW50LmJhbGFuY2UudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAkPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXBvc2l0V2l0aGRyYXdhbEFtb3VudFwiPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uZGVwb3NpdFdpdGhEcmF3YWwodHJ1ZSlcIj5EZXBvc2l0PC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5kZXBvc2l0V2l0aERyYXdhbChmYWxzZSlcIj5XaXRoZHJhd2FsPC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICBgO1xuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuXHR9XG5cblx0ZGVwb3NpdFdpdGhEcmF3YWwoZGVwb3NpdDogYm9vbGVhbikge1xuXHRcdGxldCBhbW91bnRJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXBvc2l0V2l0aGRyYXdhbEFtb3VudCcpO1xuXHRcdGxldCBhbW91bnQgPSArYW1vdW50SW5wdXQudmFsdWU7XG5cdFx0bGV0IGVycm9yO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoZGVwb3NpdCkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRBY2NvdW50LmRlcG9zaXQoYW1vdW50KTsgLy8wOHNzIG92ZXJyaWRlZCBpZiBpdCdzIHNhdmluZ3Ncblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudEFjY291bnQud2l0aGRyYXdhbChhbW91bnQpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGVycm9yID0gZTtcblx0XHR9XG5cblx0XHR0aGlzLnJlbmRlckFjY291bnQodGhpcy5jdXJyZW50QWNjb3VudCk7XG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlckVycm9yKGVycm9yLm1lc3NhZ2UpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBDcmVhdGUgbWFpbiBvYmplY3QgYW5kIGFkZCBoYW5kbGVycyBmb3IgaXRcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3VGVtcGxhdGUnKSk7XG5jb25zdCBtYWluID0gbmV3IE1haW4ocmVuZGVyZXIpO1xuXG4vLyBRdWljayBhbmQgZWFzeSB3YXkgdG8gZXhwb3NlIGEgZ2xvYmFsIEFQSSB0aGF0IGNhbiBob29rIHRvIHRoZSBNYWluIG9iamVjdFxuLy8gc28gdGhhdCB3ZSBjYW4gZ2V0IHRvIGl0IGZyb20gY2xpY2sgYW5kIGV2ZW50cyBhbmQgb3RoZXJzLlxuLy8gWWVzLCB0aGVyZSBhcmUgb3RoZXIgd2F5cyBidXQgdGhhdCdzIG5vdCB0aGUgZm9jdXMgb2YgdGhpcyBkZW1vXG4oPGFueT53aW5kb3cpLm1haW4gPSBtYWluO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9