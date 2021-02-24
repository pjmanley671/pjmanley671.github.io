import {UpdateTable, DrawChart, UpdateCommitCount} from './scripts/GitChart.js'
import * as Utils from './scripts/Utils.js'
import Config from './Data/General.js'

function OpenPage(elmnt, color) 
{
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("flexbox-container");
	for (i = 0; i < tabcontent.length; i++)
		tabcontent[i].style.display = "none";

	tablinks = document.getElementsByClassName("navbar-link");
	for (i = 0; i < tablinks.length; i++)
		tablinks[i].style.backgroundColor = "#555";
	
	document.getElementById(elmnt.innerHTML).style.display = "flex";
	elmnt.style.backgroundColor = color;
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
	var pages = document.getElementsByClassName("flexbox-container");
	var l_btn;
	for(var i = 0; i < pages.length; i++){
		l_btn = document.createElement("button");
		l_btn.innerHTML = pages[i].id;
		l_btn.className = "navbar-link";
		if(l_btn.innerHTML == "Home") l_btn.style.backgroundColor = "black";
		l_btn.addEventListener("click", event => {OpenPage(event.target, "black")})
		navbar.appendChild(l_btn);
	}

	var drpdwn = document.getElementById("dropdown-content");
	Config.Links.forEach(navLink => {
		switch(navLink.Confirmation.message_format){
			case "Perlenspiel":
				drpdwn.appendChild(Utils.GenerateLinkButton(navLink.name, navLink.link, navLink.Confirmation.confirm));
				break;
			default:
				break;
		}
	})
}

const Resize = () =>{
	DrawChart();
/* 	var tabInfo = document.getElementsByClassName("navbar-link");
	for(var i = 0; i < tabInfo.length; i++){
		switch(tabInfo[i].innerHTML){
			case "Home":
				if(tabInfo[i].style.backgroundColor == "black") DrawChart();
				break;
			default:
				break;
		}
	} */
}

const PageLoad = () => {
	GenerateHeaderButtons();
	GetAndHandleRepos('https://api.github.com/users/pjmanley671/repos');
}

window.onload = PageLoad;
window.onresize = Resize;

//http://davidbau.com/encode/seedrandom.js
//https://stackoverflow.com/questions/2117046/how-to-show-live-preview-in-a-small-popup-of-linked-page-on-mouse-over-on-link