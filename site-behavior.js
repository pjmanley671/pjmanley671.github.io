function FillGameNav()
{
	let links = 
	[
		["Perlenspiel - Color Lock", "pages/ColorLock.html"],
		["Perlenspiel - Sliding Puzzle", "pages/SlidingPuzzle.html"],
		["Perlenspiel - Space Invaders", "pages/SpaceInvaders.html"]
	];
	var listObject = document.createElement("ul");
	var i = 0;

	while (i < links.length)
	{
		listObject.appendChild(document.createElement("li"));
		i++;
	}

	for(var l of links)
	{
		var a = document.createElement("a");
		a.innerHTML = l[0];
		a.href = l[1];
		
		var r = 0;
		do
		{
			r = Math.floor(Math.random() * listObject.children.length);
		}while(listObject.children[r].hasChildNodes());

		listObject.children[r].appendChild(a);
	}

	document.getElementById("Game-Nav").appendChild(listObject);
}

function PageLoad()
{
	switch(document.getElementById("page-name").innerHTML)
	{
		case "Paul Manley - Portfolio":
			break;
		default:
			break;
	}
	
	FillGameNav();
	// location.reload();
}

/*function openPage(pageName, elmnt, color) 
{
	//https://www.w3schools.com/howto/howto_js_full_page_tabs.asp
	//http://davidbau.com/encode/seedrandom.js
	//https://stackoverflow.com/questions/2117046/how-to-show-live-preview-in-a-small-popup-of-linked-page-on-mouse-over-on-link
	// Hide all elements with class="tabcontent" by default 
	
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Remove the background color of all tablinks/buttons
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = "";
	}
	
	// Show the specific tab content
	document.getElementById(pageName).style.display = "block";
	
	// Add the specific color to the button used to open the tab content
	elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click(); */