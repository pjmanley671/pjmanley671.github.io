/*function openPage(pageName, elmnt, color) 
{
	//https://www.w3schools.com/howto/howto_js_full_page_tabs.asp
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

window.onload = function()
{
	message.innerHTML = "test";
	//document.getElementById("page-name") = "test";
	try
	{
		document.getElementById("page-name").textContent = "test";
	}catch(err)
	{
		message.innerHTML = err;
	}
}

function loadPage()
{
	message.innerHTML = "test";
}