import {UpdateTable, DrawChart, UpdateCommitCount} from './scripts/GitChart.js'
import * as Utils from './scripts/Utils.js'
import Config from './Data/General.js'

async function GetAndHandleRepos(url=''){
	var user, commitCount, recentRepos, thisDate, btn;
	const TIMEZONE = 'America/Chicago';

	user = await (await fetch(url)).json();
	thisDate = (new Date()).getFullYear(); recentRepos = [];

	user.forEach(repo => {
		let repoCentralTime;
		repoCentralTime = (Utils.convertTZ(repo.pushed_at, TIMEZONE)).getFullYear();
		if(repoCentralTime === thisDate) recentRepos.push(repo);
	})

	commitCount = new Uint32Array(document.getElementById("CircleGroup").children.length);
	recentRepos.forEach(async function(repo){
		let cTZ, commits, repoCommits, commitPageNum, commitPageLink;
		commitPageNum = 0;
		repoCommits = 0;

		cTZ = Utils.convertTZ(repo.pushed_at, TIMEZONE);
		commitPageLink = repo.commits_url.slice(0, repo.commits_url.length - 6);
		
		do{
			commitPageLink = commitPageLink.concat("?page=", commitPageNum.toString(), "&since=2020-12-31T23-59-59Z");
			commits = await (await fetch(commitPageLink)).json();
			repoCommits += commits.length;
			commits.forEach(cmt => {
				let commitCentralTime;
				commitCentralTime = Utils.convertTZ(cmt.commit.committer.date, TIMEZONE);
				repoCommits++;
				commitCount[commitCentralTime.getMonth()] += 1;
			})
		}while(commits.length > 0);
		btn = Utils.GenerateLinkButton(repo.name, repo.html_url);
		UpdateTable(btn, cTZ.toDateString(), repoCommits);
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
