var g_Commits = new Uint32Array(document.getElementById("CircleGroup").children.length);

function ResetMonths(){
	var l_SVG = document.getElementById("chart-x-definitions"),
		l_Months = l_SVG.children[0],
		l_XOffset	= l_SVG.clientWidth / 50,
		l_XDist = l_SVG.clientWidth / l_Months.children.length;

	for(let i = 0; i < l_Months.children.length; i++)
		l_Months.children[i].setAttribute("x", String(i * l_XDist + l_XOffset));
}

function ResetPoints(p_SVG){
	var l_Points = document.getElementById("CircleGroup").children,
		l_XOffset= p_SVG.clientWidth / 30;
	
	for(let p = 0; p < l_Points.length; p++){
		l_Points[p].setAttribute("cx", String(p * p_SVG.clientWidth / l_Points.length + l_XOffset));
		l_Points[p].setAttribute("cy", String(p_SVG.clientHeight));
	}
}

function SetPointPositions(p_SVG, p_Goal){
	var l_Points = document.getElementById("CircleGroup").children;
	var yDist = p_SVG.clientHeight / p_Goal;

	for(let i = 0; i < l_Points.length; i++){
		let height = p_SVG.clientHeight - g_Commits[i] * yDist;
		if(height < 0) height += Math.floor(g_Commits[i] / p_Goal) * p_Goal * yDist;
		l_Points[i].setAttribute("cy", String(height));
	}
}

function ResetLines(p_SVG, p_Goal){
	const ONE = 1;
	var l_LineNumber= 0,
		l_Lines 	= document.getElementById("LineGroup").children;

	for(let i = 0; i < l_Lines.length; i++)
		switch(l_Lines[i].id){
			case "x-axis":
				l_Lines[i].setAttribute("y2", String(p_SVG.clientHeight));
				l_Lines[i].setAttribute("x1", String(p_SVG.clientLeft + ONE));
				l_Lines[i].setAttribute("x2", String(p_SVG.clientLeft + ONE));
				break;
			case "y-axis": 
				l_Lines[i].setAttribute("x2", String(p_SVG.clientWidth));
				l_Lines[i].setAttribute("y1", String(p_SVG.clientHeight - ONE));
				l_Lines[i].setAttribute("y2", String(p_SVG.clientHeight - ONE));
				break;
			default: 
				l_LineNumber++;
				l_Lines[i].setAttribute("x2", String(p_SVG.clientWidth));
				l_Lines[i].setAttribute(
					"y1", String(p_SVG.clientHeight - l_LineNumber * p_SVG.clientHeight / p_Goal));
				l_Lines[i].setAttribute(
					"y2", String(p_SVG.clientHeight - l_LineNumber * p_SVG.clientHeight / p_Goal));
				break;
		}
}

export function DrawChart(){
	var l_SVG		= document.getElementById("chart"),
		l_Goal		= 10, 
		l_GithubMark= l_SVG.children[0];

	ResetLines(l_SVG, l_Goal);
	ResetMonths();
	ResetPoints(l_SVG);
	SetPointPositions(l_SVG, l_Goal);
	l_GithubMark.setAttribute(
		"x", String(0.5 * l_SVG.clientWidth - 0.75 *
			parseInt(l_GithubMark.getAttribute("width"))));
}

export function UpdateTable(p_btn = {}, p_PushedDate, p_CmtTtl){
	if(p_btn		== null || undefined || '') return;
	if(p_CmtTtl		== null || undefined || '') return;
	if(p_PushedDate	== null || undefined || '') return;

	const COLUMNS 	= 3;
	var l_Table		= document.getElementById("table-details"),
		l_TableRow 	= document.createElement("tr");

	for(let i = 0; i < COLUMNS; i++){
		let column = document.createElement("td");
		switch(i){
			case 0: column.appendChild(p_btn); break;
			case 1: column.innerHTML = p_PushedDate; break;
			case 2: column.innerHTML = p_CmtTtl.toString(); break;
			default: break;
		}
		l_TableRow.appendChild(column);
	}
	document.getElementById("table-details").appendChild(l_TableRow);
	l_Table.appendChild(l_TableRow);
}

export function UpdateCommitCount(p_CmtCnt){
	g_Commits = p_CmtCnt;
}