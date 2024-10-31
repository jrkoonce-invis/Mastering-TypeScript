// Write your classes here! ✨
// You'll need to export them so the tests can run them.

interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

export abstract class Horror {
	abstract readonly name: string;
	#consumed: Consumed[] = [];

	consume(op: Horror): void {
		this.#consumed.push({
			evil: op.isEvil(),
			name: op.name,
			power: op.getPower(),
		});
	}

	public doBattle(opponent: Horror): void {
		if (opponent.getPower() <= this.getPower()) {
			this.consume(opponent);
		}
	}

	public getPower(): number {
		let currPower = 0;
		for (let con of this.#consumed) {
			currPower += this.getPowerFrom(con);
		}
		return currPower + this.#consumed.length;
	}

	protected abstract getPowerFrom(consumed: Consumed): number;

	protected abstract isEvil(): boolean;
}

export class Demon extends Horror {
	readonly name = "Demon";

	protected getPowerFrom(consumed: Consumed): number {
		if (consumed.evil) {
			return consumed.power / 2;
		} else {
			return consumed.power * 2;
		}
	}

	protected isEvil(): boolean {
		return true;
	}
}

export class Sorcerer extends Horror {
	readonly name: string;
	#evil: boolean;

	protected getPowerFrom(consumed: Consumed): number {
		if (consumed.evil == this.isEvil()) {
			return consumed.power * 2;
		} else {
			return consumed.power;
		}
	}

	protected isEvil(): boolean {
		return this.#evil;
	}

	constructor(name: string, evil: boolean) {
		super();

		this.name = name;
		this.#evil = evil;
	}
}
