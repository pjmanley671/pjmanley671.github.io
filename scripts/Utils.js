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
	for (i = 0; i < tabcontent.length; i++)
		tabcontent[i].style.visibility = "hidden";

	tablinks = document.getElementsByClassName("Navbar-link");
	for (i = 0; i < tablinks.length; i++)
		tablinks[i].style.backgroundColor = "#555";

	document.getElementById(elmnt.innerHTML).style.visibility = "visible";
	elmnt.style.backgroundColor = color;
}