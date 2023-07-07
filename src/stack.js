// 2ms10ss
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (newItem) {
        this.items.push(newItem);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    return Stack;
}());
var myNumberStack = new Stack();
myNumberStack.push(1);
myNumberStack.push(2);
myNumberStack.push(3);
console.log(myNumberStack.pop()); // 3
console.log(myNumberStack.peek()); // 2
console.log(myNumberStack.pop()); // 2
console.log(myNumberStack.pop()); // 1
var stringStack = new Stack();
stringStack.push('Tai');
stringStack.push('LPA');
stringStack.push('NHT');
stringStack.push('PNT');
console.log(stringStack.pop()); //PNT
console.log(stringStack.peek()); //NHT
console.log(stringStack.pop()); //NHT
console.log(stringStack.pop()); //LPA
console.log(stringStack.pop()); //Tai
