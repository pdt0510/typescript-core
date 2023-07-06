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
var BankAccount = /** @class */ (function () {
    function BankAccount(accountSettings) {
        this._balance = 0;
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
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
        _this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__.AccountType.Savings;
        _this._interestRate = accountSettings.interestRate;
        // Simulate interest over time
        setInterval(function () {
            _this.addInterest();
        }, 60000);
        return _this;
    }
    SavingsAccount.prototype.getAccountInfo = function () {
        return {};
    };
    SavingsAccount.prototype.deposit = function (amount) {
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
        var accList = new _scripts_account_list__WEBPACK_IMPORTED_MODULE_4__.AccountList();
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
        this.renderAccount(this.currentAccount);
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
                this.currentAccount.deposit(amount);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsSUFBSSxHQUFHLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludHJvLXRvLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9hY2NvdW50LWxpc3QudHMiLCJ3ZWJwYWNrOi8vaW50cm8tdG8tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL2JhbmstYWNjb3VudC50cyIsIndlYnBhY2s6Ly9pbnRyby10by10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudC50cyIsIndlYnBhY2s6Ly9pbnRyby10by10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vaW50cm8tdG8tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL3JlbmRlcmVyLnRzIiwid2VicGFjazovL2ludHJvLXRvLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9zYXZpbmdzLWFjY291bnQudHMiLCJ3ZWJwYWNrOi8vaW50cm8tdG8tdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRyby10by10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbnRyby10by10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW50cm8tdG8tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludHJvLXRvLXR5cGVzY3JpcHQvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYW5rQWNjb3VudCB9IGZyb20gJy4vYmFuay1hY2NvdW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50TGlzdCB7XHJcblx0X2FjY291bnRMaXN0OiBCYW5rQWNjb3VudFtdID0gW107IC8veHg0XHJcblxyXG5cdGFkZChhY2NvdW50OiBCYW5rQWNjb3VudCkge1xyXG5cdFx0dGhpcy5fYWNjb3VudExpc3QucHVzaChhY2NvdW50KTtcclxuXHR9XHJcblxyXG5cdGdldEFjY291bnRzKCk6IEJhbmtBY2NvdW50W10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2FjY291bnRMaXN0O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gJy4vZW51bXMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFua0FjY291bnQge1xuXHRwcml2YXRlIF9iYWxhbmNlID0gMDtcblx0aWQ6IG51bWJlcjtcblx0dGl0bGU6IHN0cmluZztcblx0YWJzdHJhY3QgYWNjb3VudFR5cGU6IEFjY291bnRUeXBlO1xuXHRjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IGFueSkge1xuXHRcdHRoaXMuaWQgPSBhY2NvdW50U2V0dGluZ3MuaWQ7XG5cdFx0dGhpcy50aXRsZSA9IGFjY291bnRTZXR0aW5ncy50aXRsZTtcblx0XHR0aGlzLmJhbGFuY2UgPSBhY2NvdW50U2V0dGluZ3MuYmFsYW5jZTtcblx0fVxuXG5cdGRlcG9zaXQoYW1vdW50OiBudW1iZXIpIHtcblx0XHR0aGlzLmJhbGFuY2UgKz0gYW1vdW50O1xuXHR9XG5cblx0d2l0aGRyYXdhbChhbW91bnQ6IG51bWJlcikge1xuXHRcdHRoaXMuYmFsYW5jZSAtPSBhbW91bnQ7XG5cdH1cblxuXHRhYnN0cmFjdCBnZXRBY2NvdW50SW5mbygpOiBhbnk7XG5cdGdldCBiYWxhbmNlKCkge1xuXHRcdHJldHVybiB0aGlzLl9iYWxhbmNlO1xuXHR9XG5cblx0c2V0IGJhbGFuY2UodmFsOiBudW1iZXIpIHtcblx0XHRpZiAodmFsID49IDApIHtcblx0XHRcdHRoaXMuX2JhbGFuY2UgPSB2YWw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IEVycm9yKCdCYWxhbmNlIGNhbm5vdCBiZSBuZWdhdGl2ZSEnKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IEJhbmtBY2NvdW50IH0gZnJvbSAnLi9iYW5rLWFjY291bnQnO1xyXG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gJy4vZW51bXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNraW5nQWNjb3VudCBleHRlbmRzIEJhbmtBY2NvdW50IHtcclxuXHRhY2NvdW50VHlwZSA9IEFjY291bnRUeXBlLkNoZWNraW5nO1xyXG5cclxuXHRnZXRBY2NvdW50SW5mbygpIHtcclxuXHRcdHJldHVybiB7fTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gQWNjb3VudFR5cGUge1xuICAgIENoZWNraW5nLFxuICAgIFNhdmluZ3Ncbn0iLCJleHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld1RlbXBsYXRlOiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSAnPGgyPldlbGNvbWUgdG8gQWNtZSBCYW5rITwvaDI+PGJyIC8+PGg1PllvdXIgQWNjb3VudHM6PC9oNT48YnIgLz4nO1xuICAgIH1cblxuICAgIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG5cbiAgICByZW5kZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MICs9IGA8YnIgLz48YnIgLz48ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmA7XG4gICAgfVxufSIsImltcG9ydCB7IEJhbmtBY2NvdW50IH0gZnJvbSAnLi9iYW5rLWFjY291bnQnO1xuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tICcuL2VudW1zJztcblxuZXhwb3J0IGNsYXNzIFNhdmluZ3NBY2NvdW50IGV4dGVuZHMgQmFua0FjY291bnQge1xuXHRwcml2YXRlIF9pbnRlcmVzdFJhdGU6IG51bWJlcjtcblx0YWNjb3VudFR5cGUgPSBBY2NvdW50VHlwZS5TYXZpbmdzO1xuXG5cdGNvbnN0cnVjdG9yKGFjY291bnRTZXR0aW5nczogYW55KSB7XG5cdFx0c3VwZXIoYWNjb3VudFNldHRpbmdzKTtcblx0XHR0aGlzLl9pbnRlcmVzdFJhdGUgPSBhY2NvdW50U2V0dGluZ3MuaW50ZXJlc3RSYXRlO1xuXG5cdFx0Ly8gU2ltdWxhdGUgaW50ZXJlc3Qgb3ZlciB0aW1lXG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRJbnRlcmVzdCgpO1xuXHRcdH0sIDYwMDAwKTtcblx0fVxuXG5cdGdldEFjY291bnRJbmZvKCkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGRlcG9zaXQoYW1vdW50OiBudW1iZXIpIHtcblx0XHRsZXQgbmV3QW1vdW50ID0gYW1vdW50ICsgYW1vdW50ICogKHRoaXMuX2ludGVyZXN0UmF0ZSAvIDEwMCk7XG5cdFx0dGhpcy5iYWxhbmNlICs9IG5ld0Ftb3VudDtcblx0fVxuXG5cdHByaXZhdGUgYWRkSW50ZXJlc3QoKSB7XG5cdFx0dGhpcy5iYWxhbmNlID0gdGhpcy5iYWxhbmNlICsgdGhpcy5iYWxhbmNlICogKHRoaXMuX2ludGVyZXN0UmF0ZSAvIDEwMCk7XG5cdH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ2hlY2tpbmdBY2NvdW50IH0gZnJvbSAnLi9zY3JpcHRzL2NoZWNraW5nLWFjY291bnQnO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3NjcmlwdHMvcmVuZGVyZXInO1xuaW1wb3J0IHsgQmFua0FjY291bnQgfSBmcm9tICcuL3NjcmlwdHMvYmFuay1hY2NvdW50JztcbmltcG9ydCB7IFNhdmluZ3NBY2NvdW50IH0gZnJvbSAnLi9zY3JpcHRzL3NhdmluZ3MtYWNjb3VudCc7XG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gJy4vc2NyaXB0cy9lbnVtcyc7XG5pbXBvcnQgeyBBY2NvdW50TGlzdCB9IGZyb20gJy4vc2NyaXB0cy9hY2NvdW50LWxpc3QnO1xuXG5jbGFzcyBNYWluIHtcblx0Y2hlY2tpbmdBY2NvdW50OiBDaGVja2luZ0FjY291bnQ7XG5cdHNhdmluZ3NBY2NvdW50OiBTYXZpbmdzQWNjb3VudDtcblx0Y3VycmVudEFjY291bnQ6IEJhbmtBY2NvdW50O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG5cdFx0Ly8gQ3JlYXRlIENoZWNraW5nQWNjb3VudCBpbnN0YW5jZVxuXHRcdHRoaXMuY2hlY2tpbmdBY2NvdW50ID0gbmV3IENoZWNraW5nQWNjb3VudCh7XG5cdFx0XHRpZDogMSxcblx0XHRcdHRpdGxlOiAnSmFuZSBEb2UgQ2hlY2tpbmcnLFxuXHRcdFx0YmFsYW5jZTogNTAwMCxcblx0XHR9KTtcblx0XHR0aGlzLnNhdmluZ3NBY2NvdW50ID0gbmV3IFNhdmluZ3NBY2NvdW50KHtcblx0XHRcdGlkOiAxMDAsXG5cdFx0XHR0aXRsZTogJ0phbmUgRG9lIFNhdmluZ3MnLFxuXHRcdFx0YmFsYW5jZTogMTAwMDAsXG5cdFx0XHRpbnRlcmVzdFJhdGU6IDIuNSxcblx0XHR9KTtcblx0XHRsZXQgaHRtbCA9IHRoaXMucmVuZGVyQWNjb3VudHMoKTtcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcignPGgyPldlbGNvbWUgdG8gQWNtZSBCYW5rITwvaDI+PGJyIC8+PGg1PllvdXIgQWNjb3VudHM6PC9oNT48YnIgLz4nICsgaHRtbCk7XG5cdH1cblxuXHRyZW5kZXJBY2NvdW50cygpIHtcblx0XHRsZXQgYWNjdHNIdG1sOiBzdHJpbmcgPSAnJztcblx0XHRjb25zdCBhY2NMaXN0ID0gbmV3IEFjY291bnRMaXN0KCk7XG5cdFx0YWNjTGlzdC5hZGQodGhpcy5jaGVja2luZ0FjY291bnQpO1xuXHRcdGFjY0xpc3QuYWRkKHRoaXMuc2F2aW5nc0FjY291bnQpO1xuXHRcdGFjY0xpc3QuZ2V0QWNjb3VudHMoKS5mb3JFYWNoKChhY2N0LCBpbmRleCkgPT4ge1xuXHRcdFx0YWNjdHNIdG1sICs9IGFjY3QudGl0bGUgKyAnPGJyIC8+Jztcblx0XHR9KTtcblx0XHRyZXR1cm4gYWNjdHNIdG1sO1xuXHR9XG5cblx0Y2hhbmdlVmlldyh2aWV3Pzogc3RyaW5nKSB7XG5cdFx0c3dpdGNoICh2aWV3KSB7XG5cdFx0XHRjYXNlICdjaGVja2luZyc6XG5cdFx0XHRcdHRoaXMuY3VycmVudEFjY291bnQgPSB0aGlzLmNoZWNraW5nQWNjb3VudDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzYXZpbmdzJzpcblx0XHRcdFx0dGhpcy5jdXJyZW50QWNjb3VudCA9IHRoaXMuc2F2aW5nc0FjY291bnQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR0aGlzLnJlbmRlckFjY291bnQodGhpcy5jdXJyZW50QWNjb3VudCk7XG5cdH1cblxuXHRyZW5kZXJBY2NvdW50KGFjY291bnQ6IEJhbmtBY2NvdW50KSB7XG5cdFx0Y29uc3QgYWNjb3VudFR5cGUgPSBBY2NvdW50VHlwZVthY2NvdW50LmFjY291bnRUeXBlXTtcblx0XHRjb25zdCBodG1sID0gYFxuICAgICAgICAgICAgICAgIDxoMz4ke2FjY291bnRUeXBlfSBBY2NvdW50PC9oMz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+T3duZXI6PC9zcGFuPiAke2FjY291bnQudGl0bGV9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkJhbGFuY2U6PC9zcGFuPiAkJHthY2NvdW50LmJhbGFuY2UudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAkPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXBvc2l0V2l0aGRyYXdhbEFtb3VudFwiPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uZGVwb3NpdFdpdGhEcmF3YWwodHJ1ZSlcIj5EZXBvc2l0PC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5kZXBvc2l0V2l0aERyYXdhbChmYWxzZSlcIj5XaXRoZHJhd2FsPC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICBgO1xuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuXHR9XG5cblx0ZGVwb3NpdFdpdGhEcmF3YWwoZGVwb3NpdDogYm9vbGVhbikge1xuXHRcdGxldCBhbW91bnRJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXBvc2l0V2l0aGRyYXdhbEFtb3VudCcpO1xuXHRcdGxldCBhbW91bnQgPSArYW1vdW50SW5wdXQudmFsdWU7XG5cdFx0bGV0IGVycm9yO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoZGVwb3NpdCkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRBY2NvdW50LmRlcG9zaXQoYW1vdW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudEFjY291bnQud2l0aGRyYXdhbChhbW91bnQpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGVycm9yID0gZTtcblx0XHR9XG5cblx0XHR0aGlzLnJlbmRlckFjY291bnQodGhpcy5jdXJyZW50QWNjb3VudCk7XG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlckVycm9yKGVycm9yLm1lc3NhZ2UpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBDcmVhdGUgbWFpbiBvYmplY3QgYW5kIGFkZCBoYW5kbGVycyBmb3IgaXRcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3VGVtcGxhdGUnKSk7XG5jb25zdCBtYWluID0gbmV3IE1haW4ocmVuZGVyZXIpO1xuXG4vLyBRdWljayBhbmQgZWFzeSB3YXkgdG8gZXhwb3NlIGEgZ2xvYmFsIEFQSSB0aGF0IGNhbiBob29rIHRvIHRoZSBNYWluIG9iamVjdFxuLy8gc28gdGhhdCB3ZSBjYW4gZ2V0IHRvIGl0IGZyb20gY2xpY2sgYW5kIGV2ZW50cyBhbmQgb3RoZXJzLlxuLy8gWWVzLCB0aGVyZSBhcmUgb3RoZXIgd2F5cyBidXQgdGhhdCdzIG5vdCB0aGUgZm9jdXMgb2YgdGhpcyBkZW1vXG4oPGFueT53aW5kb3cpLm1haW4gPSBtYWluO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9