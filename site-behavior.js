function CreateNav()
{
	var listObject = document.createElement("ul");
	document.getElementById("nav").appendChild(listObject);
	listObject.appendChild(document.createElement("li"));
}

function PageLoad()
{
	try
	{
		document.getElementById("page-name").text = "Paul Manley - Portfolio";
		if(document.getElementById("page-name").text != "Paul Manley - Portfolio")
			throw "page-name not set to Paul Manley - Portfolio";
		
		
	}catch(err)
	{
		alert(err);
	}
	
	CreateNav();
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