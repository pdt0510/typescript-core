import { Person } from './person'; //30ss, 7ms12sss

export class Player implements Person {
	name: string;
	age?: number;
	highScore: number;

	formatName() {
		return this.name.toUpperCase();
	}
}
