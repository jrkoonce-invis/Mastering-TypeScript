// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.

export type AlignmentOptions = {
	width: number;
	align?: "left" | "middle" | "right";
};

export function alignTexts(texts: string[], options: AlignmentOptions) {
	let OPTION = options.align ? options.align : "left";
	let ans: string[][] = [];
	let gi: number = 0;
	for (let line of texts) {
		let index: number = 0;
		let words: string[] = line.split(" ");
		let curr: string[] = [];

		curr[index] = words[0];
		let len: number = words[0].length;
		for (let word of words.slice(1)) {
			if (len + word.length + 1 <= options.width) {
				// +1 for space btwn words
				len += word.length + 1;
				curr[index] += ` ${word}`;
			} else {
				// add spaces based on alignment
				if (OPTION == "left") {
					curr[index] += " ".repeat(options.width - len);
				} else if (OPTION == "right") {
					curr[index] = " ".repeat(options.width - len) + curr[index];
				} else {
					curr[index] =
						" ".repeat((options.width - len) / 2) +
						curr[index] +
						" ".repeat((options.width - len) / 2);
				}
				index += 1;
				len = word.length;
				curr[index] = word;
			}
		}
		if (curr[index].length < options.width) {
			if (OPTION == "left") {
				curr[index] += " ".repeat(options.width - len);
			} else if (OPTION == "right") {
				curr[index] = " ".repeat(options.width - len) + curr[index];
			} else {
				curr[index] =
					" ".repeat(Math.floor((options.width - len) / 2)) +
					curr[index] +
					" ".repeat(Math.ceil((options.width - len) / 2));
			}
		}
		ans[gi] = curr;
		gi++;
	}
	return ans;
}
