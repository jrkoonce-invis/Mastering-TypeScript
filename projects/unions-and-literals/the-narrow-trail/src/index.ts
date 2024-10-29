export function runCommands() {
	let availableResource: "Food" | "Water" | undefined;
	let day = 1;
	let food = 5;
	let water = 5;

	while (day != 8) {
		// Roll Dice
		let roll = Math.floor(Math.random() * 6) + 1;

		if (roll == 1) {
			// resupply food
			availableResource = "Food";
		} else if (roll == 2) {
			// resupply water
			availableResource = "Water";
		} else {
			// available resource
			if (availableResource == undefined) {
				availableResource = roll % 2 == 0 ? "Food" : "Water";
			} else if (availableResource == "Food") {
				food += roll;
				availableResource = undefined;
			} else {
				water += roll;
				availableResource = undefined;
			}
		}

		food--;
		water--;

		if (food == 0 || water == 0) {
			return false;
		}

		day++;
	}

	return true;
}
