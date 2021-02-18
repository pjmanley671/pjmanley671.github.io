var g_Commits = new Uint32Array(12);

// https://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript
function convertTZ(date, tzString){
    return new Date((typeof date === "string" ? 
		new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

function ResetMonths(){
	var l_SVG 		= document.getElementById("chart-x-definitions"),
		l_Months 	= l_SVG.children[0],
		l_XOffset 	= l_SVG.clientWidth / 50;

	for(let i = 0; i < l_Months.children.length; i++)
		l_Months.children[i].setAttribute("x", String(
			i * l_SVG.clientWidth / l_Months.children.length + l_XOffset));
}

function ResetPoints(p_SVG){
	var l_Points 	= document.getElementById("CircleGroup").children,
		l_XOffset	= p_SVG.clientWidth / 30;
	
	for(let p = 0; p < l_Points.length; p++){
			l_Points[p].setAttribute("cx", String(
				p * p_SVG.clientWidth / l_Points.length + l_XOffset));

			l_Points[p].setAttribute("cy", String(p_SVG.clientHeight));
	}
}

function SetPointPositions(p_SVG, p_Goal){
	var l_Points = document.getElementById("CircleGroup").children;

	for(let i = 0; i < l_Points.length; i++){
 		let height = p_SVG.clientHeight - 
			(g_Commits[i] - Math.floor(g_Commits[i] / p_Goal) * p_Goal) 
			* p_SVG.clientHeight / p_Goal;
		
		l_Points[i].setAttribute("cy", String(height));
	}
}

function ResetLines(p_SVG, p_Goal){
	var l_LineNumber 	= 0,
		l_Lines 		= document.getElementById("LineGroup").children;

	for(let i = 0; i < l_Lines.length; i++)
		switch(l_Lines[i].id){
			case "x-axis":
				l_Lines[i].setAttribute("y2", String(p_SVG.clientHeight));
				l_Lines[i].setAttribute("x1", String(p_SVG.clientLeft + 1));
				l_Lines[i].setAttribute("x2", String(p_SVG.clientLeft + 1));
				break;
			case "y-axis": 
				l_Lines[i].setAttribute("x2", String(p_SVG.clientWidth));
				l_Lines[i].setAttribute("y1", String(p_SVG.clientHeight - 1));
				l_Lines[i].setAttribute("y2", String(p_SVG.clientHeight - 1));
				break;
			default: 
				l_LineNumber++;
				l_Lines[i].setAttribute("x2", String(p_SVG.clientWidth));
				l_Lines[i].setAttribute("y1", String(
					p_SVG.clientHeight - l_LineNumber * p_SVG.clientHeight / p_Goal));
				l_Lines[i].setAttribute("y2", String(
					p_SVG.clientHeight - l_LineNumber * p_SVG.clientHeight / p_Goal));
				break;
		}
}

export function DrawChart(){
	var l_SVG 			= document.getElementById("chart"), 
		l_Goal 			= 10,
		l_GithubMark 	= l_SVG.children[0];

		ResetLines(l_SVG, l_Goal);
		ResetMonths();
		ResetPoints(l_SVG);

		SetPointPositions(l_SVG, l_Goal);

		l_GithubMark.setAttribute("x", String(
			0.5 * l_SVG.clientWidth - 0.75 * parseInt(
				l_GithubMark.getAttribute("width"))));
}

function UpdateTable(p_RepoName, p_PushedDate, p_CommitTotal, p_RepoURL){
	if(p_RepoName    == null || undefined || '') return;
	if(p_CommitTotal == null || undefined || '') return;
	if(p_PushedDate  == null || undefined || '') return;
	if(p_RepoURL	 == null || undefined || '') return;

	const COLUMNS 	= 3;
	var l_Table		= document.getElementById("table-details");
	var l_TableRow 	= document.createElement("tr");

	var l_button 	 	= document.createElement("button");
	l_button.innerHTML 	= p_RepoName;
	l_button.value 		= p_RepoURL;
	l_button.addEventListener("click", event => {
		window.open(event.target.value, "_self");
	})

	for(let i = 0; i < COLUMNS; i++){
		let column = document.createElement("td");
		switch(i){
			case 0: column.appendChild(l_button); break;
			case 1: column.innerHTML = p_PushedDate; break;
			case 2: column.innerHTML = p_CommitTotal.toString(); break;
			default: break;
		}
		l_TableRow.appendChild(column);
	}
	document.getElementById("table-details").appendChild(l_TableRow);
	l_Table.appendChild(l_TableRow);
}

export async function GetAndHandleRepos(url=''){
	var l_User = await (await fetch(url)).json();
	var l_RecentPushedRepos = [];
	var l_Date = new Date();

	l_User.forEach(repo => {
		let repoCentralTime = convertTZ(repo.pushed_at, 'America/Chicago');
		if(repoCentralTime.getFullYear() === l_Date.getFullYear()) l_RecentPushedRepos.push(repo);
	});

	l_RecentPushedRepos.forEach(async function(repo){
		let cTZ = convertTZ(repo.pushed_at, 'America/Chicago');
		let commits = await (await fetch(repo.commits_url.slice(0, repo.commits_url.length - 6))).json();
		let recentCommits = [];

		commits.forEach(cmt => {
			let commitCentralTime = convertTZ(cmt.commit.author.date, 'America/Chicago');

			if(commitCentralTime.getFullYear() == l_Date.getFullYear()) {
				recentCommits.push(cmt);
				g_Commits[commitCentralTime.getMonth()]++;
			}
		})
		
		UpdateTable(repo.name, cTZ.toDateString(), recentCommits.length, repo.html_url);
		DrawChart();
	})
}