let mainObj = {};

let showObject = function()
{
	for(let repo in mainObj)
	{
		console.log(repo);
		console.log(mainObj[repo].name);
	}
}

function CreateGitChart()
{
	fetch('https://api.github.com/users/pjmanley671/repos')
		.then(function(resp)
		{
			return resp.json();
		})
		.then(function(data)
		{
			//console.log(data);
			mainObj = data;
			showObject();
		});
}
function PageLoad()
{
	let repos = {};
	switch(document.getElementById("page-name").innerHTML)
	{
		case "Paul Manley - Portfolio":
			CreateGitChart();
			break;
		default:
			break;
	}
}
