var thisDate = new Date();

function TableCommit(commits = {}, repo)
{
	var i = 0;
	for(cmt in commits)
	{
		if(commits[cmt].commit.author.date.slice(0, 4) == thisDate.getFullYear())
		{
			i++;
			// console.log(commits[cmt].commit.author.date.slice(5, 7));
			//document.getElementById("chart").children;
		}
	}
	let childs = document.getElementById("table-details").children;
	let repoChild = childs[repo].children;
	repoChild[2].innerHTML = i;
}

function fillTable(pUser = {})
{
	var i = 0;
	for(let repo in pUser)
	{
		if(pUser[repo].pushed_at.slice(0, 4) == thisDate.getFullYear())
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
			tableColumns[0].innerHTML = pUser[repo].pushed_at.split('T')[0];
			tableColumns[1].appendChild(a);
			tableColumns[2].innerHTML = " ";

			for(j = 0; j < tableColumns.length; j++) tableRow.appendChild(tableColumns[j]);

			document.getElementById("table-details").appendChild(tableRow);

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