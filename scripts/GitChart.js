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

function SortRepoTable(){
	let i, j, table, row_swap;
	table = document.getElementById("table-details");

	for(i = 1; i < table.children.length; i++){
		for(j = i+1; j < table.children.length; j++){
			console.log(`Comparing: ${table.children[i].children[1].innerHTML} to ${table.children[j].children[1].innerHTML}`);
			if(table.children[i].children[1].innerHTML > table.children[j].children[1].innerHTML){
				row_swap = table.children[i];
				table.children[i] = table.children[j];
				table.children[j] = row_swap;
			}
		}
	}
}

export function UpdateTable(pButton = {}, pDate_pushed, pCommit_total){
	if(pButton == null || undefined || '') return;
	if(pCommit_total == null || undefined || '') return;
	if(pDate_pushed	== null || undefined || '') return;

	let table, tableRow, pushedDate;
	
	table = document.getElementById("table-details");
	tableRow = document.createElement("tr");
	pushedDate = ReformatStringDate(pDate_pushed.substring(4, pDate_pushed.length));

	
	let column = document.createElement("td");
	column.appendChild(pButton);
	tableRow.appendChild(column);
	column = document.createElement("td");
	column.innerHTML = pushedDate;
	tableRow.appendChild(column);
	column = document.createElement("td");
	column.innerHTML = pCommit_total.toString();
	tableRow.appendChild(column);
	table.appendChild(tableRow);
	//SortRepoTable();
}

export function UpdateCommitCount(pNums){ g_Commits = pNums;}