// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.

import { Ingredients } from "./solution";

export type RecipeObj = {
	succeeded: boolean;
	newStock?: Stock;
};

export type Kitchen = {
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => boolean;
	prepare: (recipe: (ingredients: Stock) => RecipeObj) => boolean;
};

export type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

export function createKitchen(
	budget: number,
	cleaner: (dirt: number, time?: number) => number,
	supplier: (expense: number) => Stock
): Kitchen {
	let dirt = 0;
	let stock: Stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};

	return {
		announce() {
			return `I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`;
		},
		clean(time?: number) {
			dirt = cleaner(dirt, time);
		},
		purchase(expense: number): boolean {
			if (expense <= budget) {
				let ingredients = supplier(expense);
				stock.breads += ingredients.breads;
				stock.fruits += ingredients.fruits;
				stock.sauces += ingredients.sauces;
				stock.vegetables += ingredients.vegetables;

				budget -= expense;

				return true;
			}
			return false;
		},
		prepare(recipe: (ingredients: Stock) => RecipeObj): boolean {
			if (dirt < 100) {
				let rec = recipe(stock);
				dirt += 1;

				if (rec.succeeded && rec.newStock) {
					stock = rec.newStock;
				}
				return rec.succeeded;
			}
			return false;
		},
	};
}
