// https://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript
export function convertTZ(date, tzString){
    return new Date((typeof date === "string" ? 
		new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

export function GenerateLinkButton(p_Text, p_Url){
  var l_btn = document.createElement("button");
	l_btn.innerHTML = p_Text;
  l_btn.value = p_Url;
  return l_btn;
}

export function OpenPage(elmnt, color) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("flexbox-container");
	tablinks = document.getElementsByClassName("Navbar-link");

	for (i = 0; i < tabcontent.length; i++)
		tabcontent[i].style.display = "none"; // collapse all the pages content.

	for (i = 0; i < tablinks.length; i++)
		tablinks[i].style.backgroundColor = "#555"; // reset all the navbar buttons colors.

	// Set the display information for the active page.
	let activePage = document.getElementById(elmnt.innerHTML);
	let width = (window.innerWidth > 0)? window.innerWidth: screen.width;
	activePage.style.display = (width > 800)? "flex" : "inline-block";
	elmnt.style.backgroundColor = color;
}