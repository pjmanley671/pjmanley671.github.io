

function FillSideAsGameNav()
{
	fetch("data/Browser-Projects.json").then(response => 
		{
			console.log(response);
		});
/* 	let links = 
	[
		["Color Lock", "pages/ColorLock.html"],
		["Sliding Puzzle", "pages/SlidingPuzzle.html"],
		["Space Invaders", "pages/SpaceInvaders.html"]
	]; */
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
		var i = document.createElement("img");
		i.alt = l[0];
		a.href = l[1];
		i.src = null;
		a.appendChild(i);
		
		
		var r = 0;
		do
		{
			r = Math.floor(Math.random() * listObject.children.length);
		}while(listObject.children[r].hasChildNodes());

		listObject.children[r].appendChild(a);
	}

	document.getElementById("SideNav").appendChild(listObject);
}

function PageLoad()
{
	document.getElementById("SideNav").innerHTML = '';

	switch(document.getElementById("page-name").innerHTML)
	{
		case "Paul Manley - Portfolio":
			FillSideAsGameNav();
			break;
		default:
			break;
	}
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

// Checks to see if this is the first visit this web session.
/* var CheckFirstVisit = () => Boolean
{
	var name = "First" + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++)
	{
		var c = ca [i];
		while(c.charAt(0) == ' ')
		{
			c = c.substring(1);
		}

		if(c.indexOf(name) == 0)
		{
			return true;
			// return c.substring(name.length, c.length);
		}
	}
	return false;
} */