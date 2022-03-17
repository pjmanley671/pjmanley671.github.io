import {UpdateTable, DrawChart, UpdateCommitCount} from './scripts/GitChart.js'
import * as Utils from './scripts/Utils.js'
import Config from './Data/General.js'

var activePage;

async function GetAndHandleRepos(url=''){
	var user_repos, commit_count, repos_recent, date_year_current;
	repos_recent = [];
	commit_count = new Uint32Array(document.getElementById("CircleGroup").children.length);

	const TIMEZONE = 'America/Chicago';
	user_repos = await (await fetch(url)).json();
	date_year_current = (new Date()).getFullYear();

	user_repos.forEach(repo =>{
		let repo_pushed_year;
		repo_pushed_year = (Utils.convertTZ(repo.pushed_at, TIMEZONE)).getFullYear();
		if(repo_pushed_year === date_year_current) repos_recent.push(repo);
	})

	repos_recent.forEach(async function(repo){
		let repo_pushed_date, commits, commits_count, commit_url, repo_html_button;
		
		commits_count = 0;
		repo_pushed_date = Utils.convertTZ(repo.pushed_at, TIMEZONE);
		commit_url = repo.commits_url.slice(0, repo.commits_url.length - 6);
		commit_url += "?per_page=100&page=1";

		let fetch_response = await(fetch(commit_url));
		if(fetch_response.ok){
			commits = await(fetch_response).json();
			let doc_url = "";
			doc_url = document.URL;

			// checks position to be 8 because the site name should be https:// and then the github repo name.
			if(doc_url.search(repo.name) === 8 || repo.name == "pjmanley671.github.io"){ // Uses my specific site to check for live server testing.
				let site_update_latest = document.getElementById("LastSiteUpdate");
				site_update_latest.innerHTML += commits[0].commit.message;
				Utils.AdjustAnimationSpeedByText("LastSiteUpdate");
			}

			commits.forEach(cmt =>{
				let commit_date;
				commit_date = Utils.convertTZ(cmt.commit.committer.date, TIMEZONE);
				if(commit_date.getFullYear() == date_year_current){
					commits_count++;
					commit_count[commit_date.getMonth()] += 1;
				}
			})
			repo_html_button = Utils.GenerateLinkButton(repo.name, repo.html_url);
			repo_html_button.addEventListener("click", event=>{
				let exit_confirm = false;
				exit_confirm = confirm("Page will exit to Github repository: " + event.target.innerHTML + ". Continue?");
				if(exit_confirm) window.open(event.target.value, "_self");
			});
			UpdateTable(repo_html_button, repo_pushed_date.toDateString(), commits_count);
			DrawChart();
		}
	})
	UpdateCommitCount(commit_count);
}

function GenerateHeaderButtons(){
	var navbar, dropdown_content;
	navbar = document.getElementById("navbar");
	dropdown_content = document.getElementById("dropdown-content");

	Config.Links.forEach(navLink =>{
		let nav_button;
		nav_button = Utils.GenerateLinkButton(navLink.Name, navLink.Link);
		nav_button.className = navLink.Confirmation.message_format;

		switch(navLink.Confirmation.message_format){
			case "Navbar-link":
				nav_button.addEventListener("click", event =>{
					Utils.OpenPage(event.target, "black");
					activePage = event.target.innerHTML;
					Resize();
				});
				navbar.appendChild(nav_button);
				break;
			case "Perlenspiel":
				nav_button.addEventListener("click", event =>{
					let exit_confirm = false;
					exit_confirm = confirm("Page will transfer to perlesnpiel project: "+ event.target.innerHTML +". Continue?");
					if(exit_confirm) window.open(event.target.value, "_self");
				});
				dropdown_content.appendChild(nav_button);
				break;
			default:
				break;
		}
		if(nav_button.innerHTML == "Home"){
			nav_button.style.backgroundColor = "black";
			activePage = nav_button.innerHTML;
			nav_button.click();
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
