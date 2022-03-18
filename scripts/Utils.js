// https://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript
export function convertTZ(date, tzString){
    return new Date((typeof date === "string" ? 
		new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

function displayTextWidth(text, font){
	// https://www.w3docs.com/snippets/javascript/how-to-calculate-text-width-with-javascript.html
  let canvas = displayTextWidth.canvas || (displayTextWidth.canvas = document.createElement("canvas"));
  let context = canvas.getContext("2d");
  context.font = font;
  let metrics = context.measureText(text);
  return metrics.width;
}

export function AdjustAnimationSpeedByText(pId){
	let document_object = document.getElementById(pId);
	if(document_object == null) return;
	let element_style = window.getComputedStyle(document_object, null);
	if(element_style == null) return;

	if(element_style.getPropertyValue("animation-duration") == null || element_style.getPropertyValue("-webkit-animation-duration") == null)
		return;

	let object_text_width = displayTextWidth(document_object.innerHTML, element_style);
	let display_width = parseInt(element_style.width);
	let newSpeed = display_width + object_text_width;

	console.log(
		`Content Size = ${object_text_width}px
		Screen Space = ${display_width}px`
	)

	if(object_text_width < (display_width / 2)){
		document_object.style["animation-duration"] = 0 + "ms";
		document_object.style["-webkit-animation-duration"] = 0 + "ms";
		return;
	}

	document_object.style["animation-duration"] = newSpeed / 90 + "s";
	document_object.style["-webkit-animation-duration"] = newSpeed / 90 + "s";
}

export function GenerateLinkButton(pText, pUrl){
  let document_button = document.createElement("button");
	document_button.innerHTML = pText;
  document_button.value = pUrl;
  return document_button;
}

export function OpenPage(elmnt, color){
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("flexbox-container");
	tablinks = document.getElementsByClassName("Navbar-link");

	for (i = 0; i < tabcontent.length; i++)
		tabcontent[i].style.display = "none"; // collapse all pages.

	for (i = 0; i < tablinks.length; i++)
		tablinks[i].style.backgroundColor = "#555"; // reset all the navbar buttons colors.

	let activePage = document.getElementById(elmnt.innerHTML);
	let display_width = (window.innerWidth > 0)? window.innerWidth: screen.width;
	activePage.style.display = (display_width > 800)? "flex" : "inline-block";
	elmnt.style.backgroundColor = color;
}