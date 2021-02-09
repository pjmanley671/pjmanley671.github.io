let mainObj = {};

let fillTable = function()
{
	var i = 0;
	var dateObj = new Date();
	for(let repo in mainObj)
	{
		if(mainObj[repo].pushed_at.slice(0, 4) == dateObj.getFullYear())
		{
			let tableColumns = [];
			var tableRow = document.createElement("tr");
			
 			for(j = 0; j < 3; j++) tableColumns.push(document.createElement("td"));

			var a = document.createElement("a");
			a.href = mainObj[repo].html_url;
			a.innerHTML = mainObj[repo].name;

			tableColumns[0].appendChild(a);
			tableColumns[1].innerHTML = " ";
			tableColumns[2].innerHTML = mainObj[repo].pushed_at.split('T')[0];

			for(j = 0; j < tableColumns.length; j++) tableRow.appendChild(tableColumns[j]);

			document.getElementById("table-details").appendChild(tableRow);
			i++;
		}
	}
}

function GetRepos(url='')
{
	fetch(url)
		.then(function(resp)
		{
			return resp.json();
		})
		.then(function(data)
		{
			mainObj = data;
			fillTable();
		});
}
function PageLoad()
{
	switch(document.getElementById("page-name").innerHTML)
	{
		case "Paul Manley - Portfolio":
			GetRepos('https://api.github.com/users/pjmanley671/repos');
			console.log(document.getElementById("chart").clientWidth)
			break;
		default:
			break;
	}
}

/*
 * html_url
 * commits[].author.name
 * 					.date
 * 
 * 
 * "2018-08-23T19:57:49Z"
 * "2018-08-23T19:57:49Z"
 * "2018-02-14T19:12:10Z"
 */