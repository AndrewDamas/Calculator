let equation = null;
let equationDisplay = document.getElementById("answer");
let answer = 0;
let displaying = equationDisplay;

const selectDigit = (num) => {
	if (displaying === equationDisplay) {
		if (equation === null || equationDisplay.innerHTML.length >= 12) {
			answer = num;
			equation = num;
		} else {
			answer += num;
			equation += num;
		}
		equationDisplay.innerHTML = equation;
	} else if (displaying === answer) {
		equationDisplay.innerHTML = num;
		answer = num;
		displaying = equationDisplay;
	}
};

function Clear() {
	answer = 0;
	equation = null;
	equationDisplay.innerHTML = "";
	displaying = equationDisplay;
}

function solveEquation() {
	answer = eval(answer);
	const isError = answer > 999999999999;
	equation = null;
	equationDisplay.innerHTML = isError ? "ERROR" : answer;
	displaying = isError ? equationDisplay : answer;
	if (isError) answer = 0;
}
