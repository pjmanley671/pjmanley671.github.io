import {DrawChart, UpdateCommitCount, ReformatStringDate} from './scripts/GitChart.js'
import * as Utils from './scripts/Utils.js'
import Config from './Data/General.js'

var activePage
const TIMEZONE = 'America/Chicago'
const DATE_YEAR_CURRENT = (new Date()).getFullYear()

async function GetAndHandleRepos(p_Url=''){ // Updates only on PageLoad
	if(p_Url === null || p_Url === undefined || p_Url === '') return
	var commit_count // using in nested async function.
	commit_count = new Uint32Array(document.getElementById("CircleGroup").children.length)

	const doc_url = document.URL;
	const user_repos = await(await (fetch(p_Url))).json();
	const repos_recent = user_repos.filter(repo =>{ // Remove entries not updated this year.

		const repo_pushed_year = Utils.convertTZ(repo.pushed_at, TIMEZONE).getFullYear();
		return (repo.size === 0)? false : repo_pushed_year == DATE_YEAR_CURRENT;

	}).sort((a, b) => { // sort the new filtered array by most recent pushed_at date.

		const a_pushed_date = Utils.convertTZ(a.pushed_at, TIMEZONE);
		const b_pushed_date = Utils.convertTZ(b.pushed_at, TIMEZONE);

		return (a_pushed_date < b_pushed_date)? 1 : (a_pushed_date > b_pushed_date)? -1 : 0;
	}); // end of repos_recent initialization

	repos_recent.forEach((repo) => { // Genereate the table entries.
		const repo_pushed_date = ReformatStringDate(
			Utils.convertTZ(repo.pushed_at, TIMEZONE).toDateString().substring(4)
		);
		let repo_button = Utils.GenerateLinkButton(repo.name, repo.html_url);
		repo_button.addEventListener("click", event =>{
			let exit_confirm = false;
			exit_confirm = confirm("Page will exit to Github repository: "+ event.target.innerHTML +". Continue?");
			if(exit_confirm) window.open(event.target.value, "_self");
		});
		Utils.SendDataToTable(document.getElementById("table-details"), [repo_button, repo_pushed_date, 0])
	});
	
	let commits_all = [];
	for(let i = 0; i < repos_recent.length; i++){ // Iteration behavior for commits.
		let commit_url = repos_recent[i].commits_url.slice(0, repos_recent[i].commits_url.length - 6) + "?per_page=100&page=";
		let commits_page_number = 0;
		let fetch_response, commits_array = [], commits_total = [];
		do{ // For looping over pages that have a valid last entry == this year.
			commits_page_number++;
			fetch_response = await( fetch( commit_url+commits_page_number ) );
			commits_array = await( fetch_response ).json();

			let commit_last = commits_array[commits_array.length-1];
			let last_date = Utils.convertTZ(commit_last.commit.committer.date, TIMEZONE);
			commits_array.forEach(cmt => { commits_total.push(cmt); })
			if(last_date.getFullYear() != DATE_YEAR_CURRENT || commits_array.length < 100) // Prevents doing another page call.
				break;
		}while(true);

		const commits_filtered = commits_total.filter(cmt =>{ // filter out out of date entries.
			const c_d = Utils.convertTZ(cmt.commit.committer.date, TIMEZONE).getFullYear();
			return c_d === DATE_YEAR_CURRENT;
		});

		if(doc_url.search(repos_recent[i].name) === 8){ // Updates the footer with the sites latest commits message.
			let site_update_latest = document.getElementById("LastSiteUpdate");
			site_update_latest.innerHTML += commits_filtered[0].commit.message;
			Utils.AdjustAnimationSpeedByText("LastSiteUpdate");
		}
		// Update the table entry for this repo
		let repo_row = document.getElementById("table-details").children[i + 1];
		repo_row.children[2].innerHTML = commits_filtered.length;
		commits_filtered.forEach(cmt => { commits_all.push(cmt); });
	}
	commits_all.forEach(cmt =>{ // Updates the months commit value.
		const commit_month = Utils.convertTZ(cmt.commit.committer.date, TIMEZONE).getMonth();
		commit_count[commit_month]++;
	});
	UpdateCommitCount(commit_count);
	DrawChart();
}

const HeaderButtonsMap = [
	(p_button = Node) => { // Index 0 for external site navigation;
		p_button.addEventListener("click", event=>{
			const exit_confirm = confirm("Page will transfer to "+ event.target.className +" project: "+ event.target.innerHTML +". Continue?");
			if(exit_confirm) window.open(event.target.value, "_self");
		});
		document.getElementById("dropdown-content").appendChild(p_button);
	},
	(p_button= Node) => { // Index 1 for this site navigation.
		p_button.addEventListener("click", event=>{
			Utils.OpenPage(event.target, "black");
			activePage = event.target.innerHTML;
			Resize();
		});
		document.getElementById("navbar").appendChild(p_button);
	}
];

function GenerateHeaderButtons(){
	Config.Links.forEach(navLink=>{
		let nav_button
		nav_button = Utils.GenerateLinkButton(navLink.Name, navLink.Link)
		nav_button.className = navLink.Confirmation.message_format;

		HeaderButtonsMap[Number(nav_button.className == "Navbar-link")](nav_button); // buttons behavior only changes when it remains on site or leaves.

		if(nav_button.innerHTML == "Home"){
			nav_button.style.backgroundColor = "black"
			activePage = nav_button.innerHTML
			nav_button.click()
		}
	})
}

const ResizeMap = {
	"Home" : () =>{DrawChart();},
	"Showcase" : () =>{},
	"Contact" : () =>{}
}

const Resize=()=>{
	let currentPage = document.getElementById(activePage);
	if(window.innerWidth > 0)
		currentPage.style.display = (window.innerWidth > 800)? "flex" : "inline-block";

	ResizeMap[activePage]();
}


function PageLoad(){
	GenerateHeaderButtons()
	let user_name = document.URL
	let host = window.location.protocol + "//" + window.location.host + "/"

	// user_name.slice 8 removes https:// and (user_name.length - 10) removes .github.io
	user_name = (user_name == host)? 'pjmanley671' : user_name.slice(8, user_name.length - 10);

	GetAndHandleRepos(`https://api.github.com/users/${user_name}/repos`);
}

window.onload = PageLoad
window.onresize = Resize

//https://stackoverflow.com/questions/2117046/how-to-show-live-preview-in-a-small-popup-of-linked-page-on-mouse-over-on-link
//https://stackoverflow.com/questions/6042007/how-to-get-the-host-url-using-javascript-from-the-current-page
