var thisDate = new Date();

// https://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript
function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

function TableCommit(commits = {}, repo)
{
	var i = 0, xoffset = 30, months = 12, goal = 10;
	var svg = document.getElementById("chart");
	var points = svg.children;
	for(p = 0; p < points.length; p++)
	{ // Resets the position of points to fit into the baseline positions of the chart.
		points[p].setAttribute("cx", String((svg.clientWidth / months) * p + (svg.clientWidth / xoffset)));
		points[p].setAttribute("cy", String(svg.clientHeight));
	}

	/* Iterates throught the commits and filters based off if they were commited this year. Then adjusts the point on the chart accordingly. */
	for(cmt in commits)
	{
		var centralTime = convertTZ(commits[cmt].commit.author.date, 'America/Chicago');
		if(centralTime.getUTCFullYear() == thisDate.getFullYear())
		{
			var point = points[centralTime.getMonth()];
			var cy = parseInt(point.getAttribute("cy"));
			if(cy > (0 + (svg.clientHeight / goal)))
				point.setAttribute("cy", String(cy - (svg.clientHeight / goal)));
			i++;
		}
	}
	/* Commits the incrementation as the total number of commits for the year into the '# of Commits' column in the table. */
	let childs = document.getElementById("table-details").children[0].children;
	let repoChild = childs[repo].children;
	repoChild[2].innerHTML = i;
}

function fillTable(pUser = {})
{
	var i = 0; // Keeps track of each repo updated this year
	for(let repo in pUser)
	{
		var centralTime = convertTZ(pUser[repo].pushed_at, 'America/Chicago');
		if(centralTime.getFullYear() == thisDate.getFullYear())
		{
			i++;
			/* Initializes this entry for the table */
			let tableColumns = [];
			var tableRow = document.createElement("tr");
			
			for(j = 0; j < 3; j++) tableColumns.push(document.createElement("td"));
			
			/* Stores the link to the repository and the repository name */
			var a = document.createElement("a");
			a.href = pUser[repo].html_url;
			a.innerHTML = pUser[repo].name;

			/* Inserts all the stored data and links to the appropriate position in the table. */
			tableColumns[0].innerHTML = centralTime.toString();
			tableColumns[0].innerHTML = tableColumns[0].innerHTML.slice(9, 9+25);
			tableColumns[1].appendChild(a);
			tableColumns[2].innerHTML = " ";

			for(j = 0; j < tableColumns.length; j++) tableRow.appendChild(tableColumns[j]);

			/* Sends the table information to the webpage table */
			document.getElementById("table-details").children[0].appendChild(tableRow);

			/* Gets the commit details and sends information to the table. */
			fetch(pUser[repo].commits_url.slice(0, pUser[repo].commits_url.length - 6))
				.then(response => {return response.json()})
				.then(data => TableCommit(data, i));
		}
	}
}

function GetRepos(url='')
{
	fetch(url)
	.then(response => {return response.json()})
	.then(data => fillTable(data));
}
function PageLoad()
{
	switch(document.getElementById("page-name").innerHTML)
	{
		case "Paul Manley - Portfolio":
			GetRepos('https://api.github.com/users/pjmanley671/repos');
			break;
		default:
			break;
	}
}


/*
 * https://stackoverflow.com/questions/17147821/how-to-make-a-whole-row-in-a-table-clickable-as-a-link
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"/>

<table class="table table-hover">
  <tbody>
    <tr style="transform: rotate(0);">
    <th scope="row"><a href="#" class="stretched-link">1</a></th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> 
 */