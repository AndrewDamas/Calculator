const numButtonIds = Array.from(document.querySelectorAll("#numbers p")).map(
	(num) => num.id
);

const blackTextColor = "rgba(0, 0, 0, 0.822)";

const colorThemes = [
	{
		id: "numoriginal",
		backgroundColor: "rgb(193, 170, 130)",
		color: blackTextColor,
		buttonBorderColor: "rgba(102, 102, 5, 0.226)",
	},
	{
		id: "bgoriginal",
		backgroundColor: "rgba(165, 103, 61, 0.685)",
	},
	{
		id: "black",
		backgroundColor: "black",
		color: "rgba(250, 250, 250, 0.822)",
		buttonBorderColor: "rgba(255, 255, 255, 0.078)",
		insideCalcBorderColor: "rgba(255, 255, 255, 0.078)",
		outsideCalcBorderColor: "rgba(0, 0, 0, 0.795)",
	},
	{
		id: "white",
		backgroundColor: "white",
		color: blackTextColor,
		buttonBorderColor: "rgba(0, 0, 0, 0.078)",
		insideCalcBorderColor: "rgba(0, 0, 0, 0.078)",
		outsideCalcBorderColor: "rgba(255, 255, 255, 0.795)",
	},
	{
		id: "red",
		backgroundColor: "red",
		color: blackTextColor,
		buttonBorderColor: "rgba(151, 0, 0 .5)",
		insideCalcBorderColor: "rgba(118, 0, 3, 0.178)",
		outsideCalcBorderColor: "rgba(197, 0, 0, 0.795)",
	},
	{
		id: "orange",
		backgroundColor: "orange",
		color: blackTextColor,
		buttonBorderColor: "rgba(184, 97, 0, 0.226)",
		insideCalcBorderColor: "rgba(118, 0, 9, 0.178)",
		outsideCalcBorderColor: "rgba(197, 127, 0, 0.795)",
	},
	{
		id: "brown",
		backgroundColor: "rgb(120, 78, 6)",
		color: undefined,
		buttonBorderColor: undefined,
		insideCalcBorderColor: "rgba(0, 0, 9, 0.178)",
		outsideCalcBorderColor: "rgba(62, 40, 3, 0.795)",
	},
	{
		id: "yellow",
		backgroundColor: "rgb(244, 244, 10)",
		color: blackTextColor,
		buttonBorderColor: "rgba(173, 176, 5, 0.226)",
		insideCalcBorderColor: "rgba(107, 68, 6, 0.178)",
		outsideCalcBorderColor: "rgba(186, 206, 7, 0.795)",
	},
	{
		id: "green",
		backgroundColor: "green",
		color: blackTextColor,
		buttonBorderColor: "rgba(0, 60, 0, 0.226)",
		insideCalcBorderColor: "rgba(0, 0, 3, 0.178)",
		outsideCalcBorderColor: "rgba(0, 90, 0, 0.795)",
	},
	{
		id: "blue",
		backgroundColor: "blue",
		color: blackTextColor,
		buttonBorderColor: "rgba(0, 0, 130, 0.226)",
		insideCalcBorderColor: "rgba(0, 0, 222, 0.795)",
		outsideCalcBorderColor: "rgba(0, 0, 222, 0.795)",
	},
	{
		id: "purple",
		backgroundColor: "purple",
		color: blackTextColor,
		buttonBorderColor: "rgba(57, 0, 3, 0.226)",
		insideCalcBorderColor: "rgba(0, 0, 131, 0.178)",
		outsideCalcBorderColor: "rgba(70, 0, 125, 0.795)",
	},
];

const getElementStyles = (id) => document.getElementById(id).style;
const foundColorUtil = (elementId) =>
	colorThemes.find((colorNumber) => colorNumber.id === elementId);

const changeBackgroundColor = (elementId) => {
	const foundColor = foundColorUtil(elementId);
	document.body.style.backgroundColor = foundColor.backgroundColor;
	getElementStyles("calculator").boxShadow =
		foundColor.id === "black"
			? "0px 3px 10px 0px white"
			: "0px 3px 10px 0px black";
};

const changeNumberButtonColor = (elementId) => {
	const foundColor = foundColorUtil(elementId);
	numButtonIds.forEach((numButtonId) => {
		getElementStyles(numButtonId).backgroundColor =
			foundColor.backgroundColor;
		getElementStyles(numButtonId).color = foundColor.color;
		getElementStyles(numButtonId).borderColor =
			foundColor.buttonBorderColor;
	});
};

const changeInsideColor = (elementId) => {
	const foundColor = foundColorUtil(elementId);
	getElementStyles("numbers").backgroundColor = foundColor.backgroundColor;
	getElementStyles("numbers").borderColor = foundColor.insideCalcBorderColor;
};

const changeOutsideColor = (elementId) => {
	const foundColor = foundColorUtil(elementId);
	getElementStyles("calculator").backgroundColor = foundColor.backgroundColor;
	getElementStyles("answer").borderColor = foundColor.outsideCalcBorderColor;
};

const changeBGBoxShadowBorderColor = (
	id,
	backgroundColor,
	boxShadow,
	border,
	color = undefined
) => {
	getElementStyles(id).backgroundColor = backgroundColor;
	getElementStyles(id).boxShadow = boxShadow;
	getElementStyles(id).border = border;
	if (color) getElementStyles(id).color = color;
};

const makeInvisible = () => {
	const ids = [...numButtonIds, "calculator", "answer", "numbers"];
	const backgroundIsBlack = document.body.style.backgroundColor === "black";
	const border = `1px solid ${backgroundIsBlack ? "white" : "black"}`;
	ids.forEach((id) => {
		const color =
			numButtonIds.includes(id) || id === "answer"
				? `rgba(${
						backgroundIsBlack ? "255, 255, 255" : "0, 0, 0"
				  }, 0.822)`
				: undefined;
		changeBGBoxShadowBorderColor(id, "transparent", "none", border, color);
	});
};
