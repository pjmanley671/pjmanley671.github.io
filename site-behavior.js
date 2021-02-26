import {UpdateTable, DrawChart, UpdateCommitCount} from './scripts/GitChart.js'
import * as Utils from './scripts/Utils.js'
import Config from './Data/General.js'

async function GetAndHandleRepos(url=''){
	var user, commitCount, recentRepos, thisDate, btn;
	const TIMEZONE = 'America/Chicago';

	user = await (await fetch(url)).json();
	thisDate = new Date(); recentRepos = [];

	user.forEach(repo => {
		let repoCentralTime = Utils.convertTZ(repo.pushed_at, TIMEZONE);
		if(repoCentralTime.getFullYear() === thisDate.getFullYear()) recentRepos.push(repo);
	})

	commitCount = new Uint32Array(document.getElementById("CircleGroup").children.length);
	recentRepos.forEach(async function(repo){
		let cTZ, commits, recentCommits;
		recentCommits = [];
		cTZ = Utils.convertTZ(repo.pushed_at, TIMEZONE);
		commits = await (await fetch(repo.commits_url.slice(0, repo.commits_url.length - 6))).json();

		commits.forEach(cmt => {
			let commitCentralTime = Utils.convertTZ(cmt.commit.author.date, TIMEZONE);
			if(commitCentralTime.getFullYear() == thisDate.getFullYear()) {
				recentCommits.push(cmt);
				commitCount[commitCentralTime.getMonth()] += 1;
			}
		})
		btn = Utils.GenerateLinkButton(repo.name, repo.html_url);
		UpdateTable(btn, cTZ.toDateString(), recentCommits.length);
    DrawChart();
	})
	UpdateCommitCount(commitCount);
}

function GenerateHeaderButtons(){
	var navbar, pages, drpdwn;
	navbar = document.getElementById("navbar");
	pages = document.getElementsByClassName("flexbox-container");

	for(let i = 0; i < pages.length; i++){
		let btn = document.createElement("button");
		btn.innerHTML = pages[i].id;
		btn.className = "navbar-link";
		if(btn.innerHTML == "Home") btn.style.backgroundColor = "black";
		btn.addEventListener("click", event => {Utils.OpenPage(event.target, "black")})
		navbar.appendChild(btn);
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