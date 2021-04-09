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
	var points, xOffset;

	points = document.getElementById("CircleGroup").children;
	xOffset= pSVG.clientWidth / 30
	
	for(let p = 0; p < points.length; p++){
		points[p].setAttribute("cx", String(p * pSVG.clientWidth / points.length + xOffset));
		points[p].setAttribute("cy", String(pSVG.clientHeight));
	}
}

function SetPointPositions(pSVG, pGoal){
	var points, yDist

	points = document.getElementById("CircleGroup").children;
	yDist = pSVG.clientHeight / pGoal

	for(let i = 0; i < points.length; i++){
		let height;
		height = (g_Commits[i] >= pGoal) ? 0 : 
			pSVG.clientHeight - g_Commits[i] * yDist;

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
	githubmark.setAttribute( "x",
		String(0.5 * svg.clientWidth - 0.75 
			* parseInt(githubmark.getAttribute("width"))));
}

function ReformatStringDate(pDate){
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

export function UpdateTable(pBtn = {}, pPushedDate, pCmtTtl){
	if(pBtn == null || undefined || '') return;
	if(pCmtTtl == null || undefined || '') return;
	if(pPushedDate	== null || undefined || '') return;

	const COLUMNS = 3;
	var table, tableRow, pushedDate;
	
	table = document.getElementById("table-details");
	tableRow = document.createElement("tr");
	pushedDate = ReformatStringDate(pPushedDate.substring(4, pPushedDate.length));

	for(let i = 0; i < COLUMNS; i++){
		let column = document.createElement("td");
		switch(i){
			case 0: column.appendChild(pBtn); break;
			case 1: column.innerHTML = pushedDate; break;
			case 2: column.innerHTML = pCmtTtl.toString(); break;
			default: break;
		}
		tableRow.appendChild(column);
	}
	table.appendChild(tableRow);

	if(table.length > 2){
		let aboveRow = table.children[table.children.length - 2];
		if(aboveRow.children[1].innerHTML.toString() < table.lastChild.children[1].toString()){
			table.children[table.children.length - 2] = table.lastChild;
			table.lastChild = aboveRow;
		}
	}
}

export function UpdateCommitCount(pNums){ g_Commits = pNums; }