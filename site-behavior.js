import {UpdateTable, DrawChart, UpdateCommitCount} from './scripts/GitChart.js'
import * as Utils from './scripts/Utils.js'
import Config from './Data/General.js'

var activePage;

async function GetAndHandleRepos(url=''){
	var user, commitCount, recentRepos, thisDate, btn;
	recentRepos = [];

	const TIMEZONE = 'America/Chicago';
	user = await (await fetch(url)).json();
	thisDate = (new Date()).getFullYear();
	//console.log(user);
	if(user == null){
		DrawChart();
		document.getElementById("LastSiteUpdate").innerHTML += "GitHub has reached max requests for the Month. Conversion to RestAPI still needs to be done.";
		return;
	}
	user.forEach(repo => {
		let repoCentralTime;
		repoCentralTime = (Utils.convertTZ(repo.pushed_at, TIMEZONE)).getFullYear();
		if(repoCentralTime === thisDate) recentRepos.push(repo);
	})

	commitCount = new Uint32Array(document.getElementById("CircleGroup").children.length);
	recentRepos.forEach(async function(repo){
		let cTZ, commits, repoCommits;
		repoCommits = 0;
		cTZ = Utils.convertTZ(repo.pushed_at, TIMEZONE);
		commits = await (await fetch(repo.commits_url.slice(0, repo.commits_url.length - 6))).json();
		console.log(document.URL);
		if(repo.commits_url.slice(0, repo.commits_url.length - 6) == document.URL.slice(0, document.URL.length - 1))
			document.getElementById("LastSiteUpdate").innerHTML += commits[0].commit.message;

		commits.forEach(cmt => {
			let commitCentralTime;
			commitCentralTime = Utils.convertTZ(cmt.commit.committer.date, TIMEZONE);
			if(commitCentralTime.getFullYear() == thisDate) {
				repoCommits++;
				commitCount[commitCentralTime.getMonth()] += 1;
			}
		})
		btn = Utils.GenerateLinkButton(repo.name, repo.html_url);
		btn.addEventListener("click", event =>{
			let confirmExit = false;
			confirmExit = confirm("Page will leave default site or to an external site. Continue?");
			if(confirmExit) window.open(event.target.value, "_self");
		});
		UpdateTable(btn, cTZ.toDateString(), repoCommits);
		DrawChart();
	})
	UpdateCommitCount(commitCount);
}

function GenerateHeaderButtons(){
	var navbar, drpdwn;
	navbar = document.getElementById("navbar");
	drpdwn = document.getElementById("dropdown-content");

	Config.Links.forEach(navLink =>{
		let btn;
		btn = Utils.GenerateLinkButton(navLink.Name, navLink.Link);
		btn.className = navLink.Confirmation.message_format;

		switch(navLink.Confirmation.message_format){
			case "Navbar-link":
				btn.addEventListener("click", event =>{
					Utils.OpenPage(event.target, "black");
					activePage = event.target.innerHTML;
					Resize();
				});
				navbar.appendChild(btn);
				break;
			case "Perlenspiel":
				btn.addEventListener("click", event =>{
					let confirmExit = false;
					confirmExit = confirm("Page will leave default site or to an external site. Continue?");
					if(confirmExit) window.open(event.target.value, "_self");
				});
				drpdwn.appendChild(btn);
				break;
			default:
				break;
		}
		if(btn.innerHTML == "Home"){
			btn.style.backgroundColor = "black";
			activePage = btn.innerHTML;
			btn.click();
		}
	})
}

const Resize = () =>{
	if(window.innerWidth > 0){
		let currentPage = document.getElementById(activePage);
		currentPage.style.display = (window.innerWidth > 800)? "flex" : "inline-block";
	}
	switch(activePage){
		case "Home":
			DrawChart();
			break;
		case "Contact":
			break;
		default:
			break;
	}
}

const PageLoad = () => {
	GenerateHeaderButtons();
	GetAndHandleRepos('https://api.github.com/users/pjmanley671/repos');
}

window.onload = PageLoad;
window.onresize = Resize;

//http://davidbau.com/encode/seedrandom.js
//https://stackoverflow.com/questions/2117046/how-to-show-live-preview-in-a-small-popup-of-linked-page-on-mouse-over-on-link
