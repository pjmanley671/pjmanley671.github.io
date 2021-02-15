var g_PointCommits = new Uint32Array(12);

// https://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript
function convertTZ(date, tzString){
    return new Date((typeof date === "string" ? 
		new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

function ResetPoints(){
	var l_Svg = document.getElementById("chart");
	var l_Points = document.getElementById("CircleGroup").children;
	var l_XOffset = l_Svg.clientWidth / 30;
	
	for(var p = 0; p < l_Points.length; p++){
			l_Points[p].setAttribute("cx", String(l_Svg.clientLeft + 
				p * l_Svg.clientWidth / l_Points.length + l_XOffset));
			
			l_Points[p].setAttribute("cy", String(l_Svg.clientHeight));
	}
}

function SetPointPositions(){
	var l_Svg = document.getElementById("chart");
	var l_Points = document.getElementById("CircleGroup").children;
	var l_Goal = 10; // goal designation to qualify a good month.
	var l_PointWalker = 0;

	for(var j = 0; j < l_Points.length; j++){
		var height = l_Svg.clientHeight - 
			(g_PointCommits[l_PointWalker] - 
				Math.floor(g_PointCommits[l_PointWalker] / l_Goal) * l_Goal) * 
				l_Svg.clientHeight / l_Goal;

		if(height < 0) height = 0;
		
		l_Points[j].setAttribute("cy", String(height));
		if(g_PointCommits[l_PointWalker] > 10){
			l_Points[j].setAttribute("fill", "green");
			l_Points[j].setAttribute("stroke", "black");
		}
		l_PointWalker++;
	}
}

export function DrawChart(){
	var l_Svg = document.getElementById("chart");
	var l_Lines = document.getElementById("LineGroup").children; 
	var l_Goal = 10;
	var l_LineNumber = 0;

	var githubMark = l_Svg.children[0];
	githubMark.setAttribute("x", String(0.5 * l_Svg.clientWidth - 0.75 * parseInt(githubMark.getAttribute("width"))));

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

	ResetPoints();
	SetPointPositions();
}

function TableCommit(p_Commits = {}, p_Repo, p_Date) {
	let l_TableCommitsColumn = document.getElementById("table-details").children[0].children[p_Repo].children;
	var l_CommitCount = 0;

	/* Iterates through the p_Commits and filters based off if they were commited this year. Then adjusts the point on the chart accordingly. */
	for(var cmt in p_Commits){
		var centralTime = convertTZ(p_Commits[cmt].commit.author.date, 'America/Chicago');

		if(centralTime.getFullYear() === p_Date.getFullYear()){
			g_PointCommits[centralTime.getMonth()] += 1;
			l_CommitCount++;
		}
	}

	/* Commits the incrementation as the total number of p_Commits for the year into the '# of Commits' column in the table. */
	l_TableCommitsColumn[2].innerHTML = l_CommitCount;
}

function FillTable(p_User = {}){
	var l_repo = 0; // Keeps track of each repo updated this year
	var l_Date = new Date();

	for(let repo in p_User){
		var centralTime = convertTZ(p_User[repo].pushed_at, 'America/Chicago');

		if(centralTime.getFullYear() === l_Date.getFullYear()){
			l_repo++;
			/* Initializes this entry for the table */
			let tableColumns = [];
			var tableRow = document.createElement("tr");
			
			for(var j = 0; j < 3; j++) 
				tableColumns.push(document.createElement("td"));
			
			/* Stores the link to the repository and the repository name */
			var a = document.createElement("a");
			a.href = p_User[repo].html_url;
			a.innerHTML = p_User[repo].name;

			/* Inserts all the stored data and links to the appropriate position in the table. */
			tableColumns[0].innerHTML = centralTime.toDateString();
			tableColumns[1].appendChild(a);
			tableColumns[2].innerHTML = " ";

			for(var j = 0; j < tableColumns.length; j++) 
				tableRow.appendChild(tableColumns[j]);

			/* Sends the table information to the webpage table */
			document.getElementById("table-details").children[0].appendChild(tableRow);

			/* Gets the commit details from the current repo and sends information to the table. */
			fetch(p_User[repo].commits_url.slice(0, p_User[repo].commits_url.length - 6))
				.then(response => {return response.json()})
				.then(data => TableCommit(data, l_repo, l_Date))
				.then(() => DrawChart());
		}
	}
}

export async function GetRepos(p_url=''){
	await fetch(p_url)
		.then(response => { return response.json()})
		.then(data => FillTable(data))
}