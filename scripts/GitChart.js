const chart_months = document.getElementById("CircleGroup");
const chart_svg = document.getElementById("chart-x-definitions");
const chart = document.getElementById("chart");
const GOAL = 10;
const githubmark = chart.children[0];

var g_Commits = new Uint32Array(chart_months.length);

function ResetMonths(){
	const width = chart_svg.clientWidth;
	let months, xOffset, xDist;

	months = chart_svg.children[0];
	xOffset	= width / 50;
	xDist = width / months.children.length;

	for(let i = months.children.length; i; i--) // used reverse loop since method can be called frequently on Resize
		months.children[i-1].setAttribute("x", String((i-1) * xDist + xOffset));
}

function ScalePointsX(){
	let points, xOffset;

	points = chart_months.children;
	xOffset= chart.clientWidth / 30
	
	for(let p = points.length; p; p--) // used reverse loop since method can be called frequently on Resize
		points[p-1].setAttribute("cx", String( (p-1) * chart.clientWidth / points.length + xOffset));
}

function SetPointY(){
	let points, yDist

	points = chart_months.children;
	yDist = chart.clientHeight / GOAL;

	for(let i = points.length; i; i--){ // used reverse loop since method can be called frequently on Resize
		const height = chart.clientHeight - g_Commits[i-1] * yDist;
		const isNotGoalHeight = Number(g_Commits[i - 1] < GOAL);
		points[i-1].setAttribute("cy", String(isNotGoalHeight * height));
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
		pLine.setAttribute("x2", String(chart.clientWidth));
		pLine.setAttribute(
			"y1", String(chart.clientHeight - lineNumber * chart.clientHeight / GOAL));
		pLine.setAttribute("y2", String(chart.clientHeight - lineNumber * chart.clientHeight / GOAL));
		return lineNumber;
	}
};

function ResetLines(){
	let lineNumber, lines;

	lineNumber = 0;
	lines = chart.children[2].children;
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