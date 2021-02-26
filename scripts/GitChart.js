var g_Commits = new Uint32Array(document.getElementById("CircleGroup").children.length);

function ResetMonths(){
	var svg, months, xOffset, xDist;

	svg = document.getElementById("chart-x-definitions");
	months = svg.children[0];
	xOffset	= svg.clientWidth / 50;
	xDist = svg.clientWidth / months.children.length;

	for(let i = 0; i < months.children.length; i++)
		months.children[i].setAttribute("x", String(i * xDist + xOffset));
}

function ResetPoints(pSVG){
	var points = document.getElementById("CircleGroup").children,
		xOffset= pSVG.clientWidth / 30;
	
	for(let p = 0; p < points.length; p++){
		points[p].setAttribute("cx", String(p * pSVG.clientWidth / points.length + xOffset));
		points[p].setAttribute("cy", String(pSVG.clientHeight));
	}
}

function SetPointPositions(pSVG, pGoal){
	var points = document.getElementById("CircleGroup").children;
	var yDist = pSVG.clientHeight / pGoal;

	for(let i = 0; i < points.length; i++){
		let height = pSVG.clientHeight - g_Commits[i] * yDist;
		if(height < 0) height += Math.floor(g_Commits[i] / pGoal) * pGoal * yDist;
		points[i].setAttribute("cy", String(height));
	}
}

function ResetLines(pSVG, pGoal){
	const ONE = 1;
	var lineNumber, lines;

	lineNumber = 0;
	lines = document.getElementById("LineGroup").children;
	for(let i = 0; i < lines.length; i++)
		switch(lines[i].id){
			case "x-axis":
				lines[i].setAttribute("y2", String(pSVG.clientHeight));
				lines[i].setAttribute("x1", String(pSVG.clientLeft + ONE));
				lines[i].setAttribute("x2", String(pSVG.clientLeft + ONE));
				break;
			case "y-axis": 
				lines[i].setAttribute("x2", String(pSVG.clientWidth));
				lines[i].setAttribute("y1", String(pSVG.clientHeight - ONE));
				lines[i].setAttribute("y2", String(pSVG.clientHeight - ONE));
				break;
			default: 
				lineNumber++;
				lines[i].setAttribute("x2", String(pSVG.clientWidth));
				lines[i].setAttribute(
					"y1", String(pSVG.clientHeight - lineNumber * pSVG.clientHeight / pGoal));
				lines[i].setAttribute(
					"y2", String(pSVG.clientHeight - lineNumber * pSVG.clientHeight / pGoal));
				break;
		}
}

export function DrawChart(){
	var svg, goal, githubmark;

	goal = 10;
	svg = document.getElementById("chart");

	ResetLines(svg, goal);
	ResetMonths();
	ResetPoints(svg);
	SetPointPositions(svg, goal);

	githubmark = svg.children[0];
	l_GithubMark.setAttribute( "x",
		String(0.5 * svg.clientWidth - 0.75 
			* parseInt(githubmark.getAttribute("width"))));
}

export function UpdateTable(pBtn = {}, pPushedDate, pCmtTtl){
	if(pBtn == null || undefined || '') return;
	if(pCmtTtl == null || undefined || '') return;
	if(pPushedDate	== null || undefined || '') return;

	const COLUMNS = 3;
	var table, tableRow;
	
	tableRow = document.createElement("tr");
	for(let i = 0; i < COLUMNS; i++){
		let column = document.createElement("td");
		switch(i){
			case 0: column.appendChild(pBtn); break;
			case 1: column.innerHTML = pPushedDate; break;
			case 2: column.innerHTML = pCmtTtl.toString(); break;
			default: break;
		}
		tableRow.appendChild(column);
	}
	table = document.getElementById("table-details");
	table.appendChild(tableRow);
}

export function UpdateCommitCount(pNums){ g_Commits = pNums; }