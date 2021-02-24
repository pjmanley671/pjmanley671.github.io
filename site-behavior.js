import {UpdateTable, DrawChart, UpdateCommitCount} from './scripts/GitChart.js'
import * as Utils from './scripts/Utils.js'
import Config from './Data/General.js'

function OpenPage(elmnt, color) 
{
	//https://www.w3schools.com/howto/howto_js_full_page_tabs.asp
	//http://davidbau.com/encode/seedrandom.js
	//https://stackoverflow.com/questions/2117046/how-to-show-live-preview-in-a-small-popup-of-linked-page-on-mouse-over-on-link
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("flexbox-container");
	for (i = 0; i < tabcontent.length; i++)
		tabcontent[i].style.display = "none";

	tablinks = document.getElementsByClassName("navbar-link");
	for (i = 0; i < tablinks.length; i++)
		tablinks[i].style.backgroundColor = "darkgray";
	
	document.getElementById(elmnt.innerHTML).style.display = "flex";
	elmnt.style.backgroundColor = color;

	console.log(elmnt);
}

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
	var navbar = document.getElementById("navbar");
	var drpdwn = document.getElementById("dropdown-content");
	Config.Links.forEach(navLink => {
		switch(navLink.Confirmation.message_format){
			case "Navbar": l_btn = Utils.GenerateLinkButton(navLink.name, navLink.link, navLink.Confirmation.confirm);
				var l_btn = document.createElement("button");
				l_btn.innerHTML = navLink.name;
				l_btn.value = navLink.link;
				l_btn.className = "navbark-link";
				l_btn.addEventListener("click", event => {OpenPage(event.target, "black")})
				navbar.appendChild(l_btn);
				break;
			case "Perlenspiel":
				drpdwn.appendChild(Utils.GenerateLinkButton(navLink.name, navLink.link, navLink.Confirmation.confirm));
				break;
			default:
				break;
		}
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