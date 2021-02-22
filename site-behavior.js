import {UpdateTable, DrawChart, UpdateCommitCount} from './scripts/gitchart.js'
import * as Utils from './scripts/utils.js'
import Config from './Data/Config.js'

async function GetAndHandleRepos(url=''){
	var l_User = await (await fetch(url)).json();
	var l_RecentPushedRepos = [], 
      l_commitCount = new Uint32Array(document.getElementById("CircleGroup").children.length);
	var l_Date = new Date();
	var l_btn;

	l_User.forEach(repo => {
		let repoCentralTime = Utils.convertTZ(repo.pushed_at, 'America/Chicago');
		if(repoCentralTime.getFullYear() === l_Date.getFullYear()) l_RecentPushedRepos.push(repo);
	})

	l_RecentPushedRepos.forEach(async function(repo){
		let cTZ = Utils.convertTZ(repo.pushed_at, 'America/Chicago');
		let commits = await (await fetch(repo.commits_url.slice(0, repo.commits_url.length - 6))).json();
		let recentCommits = [];

		commits.forEach(cmt => {
			let commitCentralTime = Utils.convertTZ(cmt.commit.author.date, 'America/Chicago');

			if(commitCentralTime.getFullYear() == l_Date.getFullYear()) {
				recentCommits.push(cmt);
				l_commitCount[commitCentralTime.getMonth()] += 1;
			}
		})
		l_btn = Utils.GenerateLinkButton(repo.name, repo.html_url);
		UpdateTable(l_btn, cTZ.toDateString(), recentCommits.length);
    DrawChart();
	})
  UpdateCommitCount(l_commitCount);
}

function GenerateHeaderButtons(){
	var drpdwn = document.getElementById("dropdown-content");
	Config.Links.forEach(perlen => {
		if(perlen.Confirmation.message_format === "Perlenspiel")
			drpdwn.appendChild(Utils.GenerateLinkButton(perlen.name, perlen.link, perlen.Confirmation.confirm))
	})
}

const Resize = () =>{
  switch(document.getElementById("page-name").innerHTML){
    case "Paul Manley - Portfolio":
      DrawChart();
      break;
    default:
       break;
  }
}

const PageLoad = () => {
	GenerateHeaderButtons();
	switch(document.getElementById("page-name").innerHTML)
	{
		case "Paul Manley - Portfolio":
			GetAndHandleRepos('https://api.github.com/users/pjmanley671/repos');
			break;
		default:
			break;
	}
}

window.onload = PageLoad;
window.onresize = Resize;