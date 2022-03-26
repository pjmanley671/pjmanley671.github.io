const chart_months = document.getElementById("CircleGroup");
const chart_svg = document.getElementById("chart-x-definitions");
const chart = document.getElementById("chart");
const GOAL = 10;

var g_Commits = new Uint32Array(chart_months.length);

function ResetMonths(){
	const width = chart_svg.clientWidth;
	let months, xOffset, xDist;

	months = chart_svg.children[0];
	xOffset	= width / 50;
	xDist = width / months.children.length;

	for(let i = 0; i < months.children.length; i++)
		months.children[i].setAttribute("x", String(i * xDist + xOffset));
}

function ScalePointsX(){
	let points, xOffset;

	points = chart_months.children;
	xOffset= chart.clientWidth / 30
	
	for(let p = 0; p < points.length; p++)
		points[p].setAttribute("cx", String(p * chart.clientWidth / points.length + xOffset));
}

function SetPointY(){
	let points, yDist

	points = chart_months.children;
	yDist = chart.clientHeight / GOAL

	for(let i = 0; i < points.length; i++){
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
		pLine.setAttribute("x2", String(chart.clientWidth));
		pLine.setAttribute(
			"y1", String(chart.clientHeight - lineNumber * chart.clientHeight / GOAL));
		pLine.setAttribute("y2", String(chart.clientHeight - lineNumber * chart.clientHeight / GOAL));
		return lineNumber;
	}
};

function ResetLines(){
	var lineNumber, lines;

	lineNumber = 0;
	lines = chart.children[2].children;
	for(let line of lines) lineNumber = LinesMap[line.id](line, lineNumber);
}

export function DrawChart(){
	var githubmark;

	ResetLines();
	ResetMonths();
	ScalePointsX();
	SetPointY();

	githubmark = chart.children[0];
	githubmark.setAttribute( "x",
		String(0.5 * chart.clientWidth - 0.75 
			* parseInt(githubmark.getAttribute("width"))));
}

export function ReformatStringDate(pDate){
	let lDate;
	switch(pDate.substring(0, 3)){
		case "Jan": lDate = "1"; break;
		case "Feb": lDate = "2"; break;
		case "Mar": lDate = "3"; break;
		case "Apr": lDate = "4"; break;
		case "May": lDate = "5"; break;
		case "Jun": lDate = "6"; break;
		case "Jul": lDate = "7"; break;
		case "Aug": lDate = "8"; break;
		case "Sep": lDate = "9"; break;
		case "Oct": lDate = "10"; break;
		case "Nov": lDate = "11"; break;
		case "Dec": lDate = "12"; break;
	}
	return lDate.concat(pDate.substring(3, pDate.length));
}

export function UpdateCommitCount(pNums){ g_Commits = pNums;}