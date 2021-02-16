var g_Commits = new Uint32Array(12);

// https://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript
function convertTZ(date, tzString){
    return new Date((typeof date === "string" ? 
		new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

function ResetPoints(){
	var l_Svg = document.getElementById("chart"), 
		l_Points = document.getElementById("CircleGroup").children,
		l_XOffset = l_Svg.clientWidth / 30;
	
	for(var p = 0; p < l_Points.length; p++){
			l_Points[p].setAttribute("cx", String(
				p * l_Svg.clientWidth / l_Points.length + l_XOffset));
			
			l_Points[p].setAttribute("cy", String(l_Svg.clientHeight));
	}
}

function SetPointPositions(){
	var l_Svg = document.getElementById("chart"),
		l_Points = document.getElementById("CircleGroup").children,
		l_Goal = 10;

	for(var j = 0; j < l_Points.length; j++){
		var height = l_Svg.clientHeight -  (g_Commits[j] - 
				Math.floor(g_Commits[j] / l_Goal) * l_Goal) * 
				l_Svg.clientHeight / l_Goal;

		if(height < 0) height = 0;
		
		l_Points[j].setAttribute("cy", String(height));
	}
}

export function DrawChart(){
	var l_Svg = document.getElementById("chart"), 
		l_Lines = document.getElementById("LineGroup").children,
		l_Goal = 10, l_LineNumber = 0,
		githubMark = l_Svg.children[0];

	githubMark.setAttribute("x",
		String(0.5 * l_Svg.clientWidth - 0.75 * parseInt(
			githubMark.getAttribute("width"))));

	ResetPoints();
	SetPointPositions();
	console.log(document.getElementById("table-details").children[1]);
	for(var i = 0; i < l_Lines.length; i++)
		switch(l_Lines[i].id){
			case "x-axis":
				l_Lines[i].setAttribute("y2", String(l_Svg.clientHeight));
				break;
			case "y-axis": 
				l_Lines[i].setAttribute("x2", String(l_Svg.clientWidth));
				break;
			default: 
				l_LineNumber++;
				l_Lines[i].setAttribute("x2", String(l_Svg.clientWidth));
				l_Lines[i].setAttribute("y1", String(
					l_Svg.clientHeight - l_LineNumber * l_Svg.clientHeight / l_Goal));
				l_Lines[i].setAttribute("y2", String(
					l_Svg.clientHeight - l_LineNumber * l_Svg.clientHeight / l_Goal));
				break;
		}
}

// const tableColors = Object.freeze({rowOdd: 'white' || 1, rowEven: 'dark-gray' || 2, columnName: '3', columnPushed: '4', columnCommits: '5'});
// tableRow.style.backgroundColor = tableColors[l_repo % 2] + ' !important';


function UpdateTable(p_RepoName, p_PushedDate, p_CommitTotal, p_RepoURL = ''){
	if(p_RepoName    == null || undefined || '') return;
	if(p_CommitTotal == null || undefined || '') return;
	if(p_PushedDate  == null || undefined || '') return;

	const COLUMNS = 3;
	var l_Table		 = document.getElementById("table-details");
	var l_TableRow 	 = document.createElement("tr");
	var l_a 		 = document.createElement("a");

	l_a.href = p_RepoURL;
	l_a.innerHTML = p_RepoName;

	for(var i = 0; i < COLUMNS; i++){
		var column = document.createElement("td");
		switch(i){
			case 0: column.appendChild(l_a); break;
			case 1: column.innerHTML = p_PushedDate; break;
			case 2: column.innerHTML = p_CommitTotal.toString(); break;
			default: break;
		}
		l_TableRow.appendChild(column);
	}
	document.getElementById("table-details").appendChild(l_TableRow);
	l_Table.appendChild(l_TableRow);

	DrawChart();
}

export async function GetAndHandleRepos(url=''){
	var l_User = await (await fetch(url)).json();
	let l_RecentPushedRepos = [];
	var l_Date = new Date();

	l_User.forEach(repo => {
		var repoCentralTime = convertTZ(repo.pushed_at, 'America/Chicago');
		if(repoCentralTime.getFullYear() === l_Date.getFullYear()) 
			l_RecentPushedRepos.push(repo);
	});

	l_RecentPushedRepos.forEach(async function(repo){
		var cTZ = convertTZ(repo.pushed_at, 'America/Chicago');
		var commits = await (await fetch(repo.commits_url.slice(0, repo.commits_url.length - 6))).json();
		let recentCommits = [];

		commits.forEach(commit => {
			var commitCentralTime = convertTZ(commit.commit.author.date, 'America/Chicago');

			if(commitCentralTime.getFullYear() == l_Date.getFullYear()) {
				recentCommits.push(commit);
				g_Commits[commitCentralTime.getMonth()]++;
			}
		})
		
		UpdateTable(repo.name, cTZ.toDateString(), recentCommits.length, repo.html_url);
	})
}