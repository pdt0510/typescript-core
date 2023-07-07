// 1m16ss
interface DataStructure<T> {
	push(newItem: T): void;
	pop(): T;
}

// 2ms10ss
class Stack<T> implements DataStructure<T> {
	items: Array<T> = [];

	push(newItem: T): void {
		this.items.push(newItem);
	}

	pop(): T {
		return this.items.pop();
	}

	peek(): T {
		return this.items[this.items.length - 1];
	}
}

let myNumberStack = new Stack<number>();
myNumberStack.push(1);
myNumberStack.push(2);
myNumberStack.push(3);

console.log(myNumberStack.pop()); // 3
console.log(myNumberStack.peek()); // 2
console.log(myNumberStack.pop()); // 2
console.log(myNumberStack.pop()); // 1

let stringStack: Stack<string> = new Stack<string>();
stringStack.push('Tai');
stringStack.push('LPA');
stringStack.push('NHT');
stringStack.push('PNT');

console.log(stringStack.pop()); //PNT
console.log(stringStack.peek()); //NHT
console.log(stringStack.pop()); //NHT
console.log(stringStack.pop()); //LPA
console.log(stringStack.pop()); //Tai
