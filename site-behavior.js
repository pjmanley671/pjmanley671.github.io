import {UpdateTable, DrawChart, UpdateCommitCount} from './scripts/GitChart.js'
import * as Utils from './scripts/Utils.js'
import Config from './Data/General.js'

async function GetAndHandleRepos(url=''){
	var l_User, l_commitCount, l_RecentPushedRepos, l_Date, l_btn;
	const TIMEZONE = 'America/Chicago';

	l_User = await (await fetch(url)).json();
	l_Date = new Date(); l_RecentPushedRepos = [];
	l_User.forEach(repo => {
		let repoCentralTime = Utils.convertTZ(repo.pushed_at, TIMEZONE);
		if(repoCentralTime.getFullYear() === l_Date.getFullYear()) l_RecentPushedRepos.push(repo);
	})

	l_commitCount = new Uint32Array(document.getElementById("CircleGroup").children.length);
	l_RecentPushedRepos.forEach(async function(repo){
		let cTZ = Utils.convertTZ(repo.pushed_at, TIMEZONE);
		let commits = await (await fetch(repo.commits_url.slice(0, repo.commits_url.length - 6))).json();
		let recentCommits = [];

		commits.forEach(cmt => {
			let commitCentralTime = Utils.convertTZ(cmt.commit.author.date, TIMEZONE);
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
	var navbar, pages, drpdwn, l_btn;
	navbar = document.getElementById("navbar");
	pages = document.getElementsByClassName("flexbox-container");

	for(var i = 0; i < pages.length; i++){
		l_btn = document.createElement("button");
		l_btn.innerHTML = pages[i].id;
		l_btn.className = "navbar-link";
		if(l_btn.innerHTML == "Home") l_btn.style.backgroundColor = "black";
		l_btn.addEventListener("click", event => {Utils.OpenPage(event.target, "black")})
		navbar.appendChild(l_btn);
	}

	drpdwn = document.getElementById("dropdown-content");
	Config.Links.forEach(navLink => {
		if(navLink.Confirmation.message_format == "Perlenspiel")
		drpdwn.appendChild(Utils.GenerateLinkButton(navLink.name, navLink.link, navLink.Confirmation.confirm));
	})
}

const Resize = () =>{
	DrawChart();
}

const PageLoad = () => {
	GenerateHeaderButtons();
	GetAndHandleRepos('https://api.github.com/users/pjmanley671/repos');
}

window.onload = PageLoad;
window.onresize = Resize;

//http://davidbau.com/encode/seedrandom.js
//https://stackoverflow.com/questions/2117046/how-to-show-live-preview-in-a-small-popup-of-linked-page-on-mouse-over-on-link