/// <reference path="person.ts" /> // 2ms12ss

// 17ss
class Player implements Person {
	name: string;
	age?: number;
	highScore: number;

	formatName() {
		return this.name.toUpperCase();
	}
}
