const chart_months = document.getElementById("CircleGroup");
const chart_svg = document.getElementById("chart-x-definitions");
const chart = document.getElementById("chart");
const GOAL = 10;
const githubmark = chart.children[0];

var g_Commits = new Uint32Array(chart_months.length);

function ResetMonths(){
	const width = chart_svg.clientWidth;
	const xOffset = width / 50;

	let [months] = chart_svg.children;
	const xDist = width / months.children.length;

	for(let i = months.children.length - 1; i; i--)
		months.children[i].setAttribute("x", String(i * xDist + xOffset));
}

function ScalePointsX(){
	let points;

	points = chart_months.children;
	const xOffset = chart.clientWidth / 30;
	
	for(let p = points.length - 1; p; p--)
		points[p].setAttribute("cx", String(p * chart.clientWidth / points.length + xOffset));
}

function SetPointY(){
	let points;

	points = chart_months.children;
	const yDist = chart.clientHeight / GOAL;

	for(let i = points.length - 1; i; i--){
		const height = chart.clientHeight - g_Commits[i] * yDist;
		const isNotGoalHeight = Number(g_Commits[i] < GOAL);
		points[i].setAttribute("cy", String(isNotGoalHeight * height));
	}
}

const LinesMap = {
	"x-axis": (pLine, lineNumber)=>{
		pLine.setAttribute("y2", String(chart.clientHeight));
		pLine.setAttribute("x1", String(chart.clientLeft + 1));
		pLine.setAttribute("x2", String(chart.clientLeft + 1));
		return lineNumber;
	},
	"y-axis": (pLine, lineNumber)=>{
		pLine.setAttribute("x2", String(chart.clientWidth));
		pLine.setAttribute("y1", String(chart.clientHeight - 1));
		pLine.setAttribute("y2", String(chart.clientHeight - 1));
		return lineNumber;
	},
	"": (pLine, lineNumber)=>{
		lineNumber++;
		const lineHeight = chart.clientHeight - lineNumber * chart.clientHeight / GOAL;
		pLine.setAttribute("x2", String(chart.clientWidth));
		pLine.setAttribute("y1", String(lineHeight));
		pLine.setAttribute("y2", String(lineHeight));
		return lineNumber;
	}
};

function ResetLines(){
	let lineNumber = 0;
	const lines = chart.children[2].children;
	for(let line of lines) lineNumber = LinesMap[line.id](line, lineNumber);
}

export function DrawChart(){
	ResetLines();
	ResetMonths();
	ScalePointsX();
	SetPointY();

	githubmark.setAttribute( "x",
		String(0.5 * chart.clientWidth - 0.75
			* parseInt(githubmark.getAttribute("width"))));
}

const DateValue = (pDate) => {
	let value = 0;
	switch(pDate){
		case "Jan": value = 1; break;
		case "Feb": value = 2; break;
		case "Mar": value = 3; break;
		case "Apr": value = 4; break;
		case "May": value = 5; break;
		case "Jun": value = 6; break;
		case "Jul": value = 7; break;
		case "Aug": value = 8; break;
		case "Sep": value = 9; break;
		case "Oct": value = 10; break;
		case "Nov": value = 11; break;
		case "Dec": value = 12; break;
		default: value = -100; break;
	}
	return value;
}

export function ReformatStringDate(pDate){
	let lDate;
	lDate = "" + DateValue(pDate.substring(0, 3));
	return lDate.concat(pDate.substring(3, pDate.length));
}

export function UpdateCommitCount(pNums){ g_Commits = pNums;}