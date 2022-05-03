export function convertTZ(date, tzString){
	if(typeof date === "string") date = new Date(date);
  return new Date(date.toLocaleString("en-US", {timeZone: tzString}));
}

export function SendDataToTable(table, args=[]){
	let table_row = document.createElement("tr")
	for( const data of args ){
		let row_column = document.createElement("td");
		(data instanceof Element)? row_column.appendChild(data) : row_column.innerHTML = data;
		table_row.appendChild(row_column);
	}
	table.appendChild(table_row);
}

function displayTextWidth(text, font){
	let context, metrics;
	const canvas = displayTextWidth.canvas || (displayTextWidth.canvas = document.createElement("canvas"));
  context = canvas.getContext("2d");
  context.font = font;
  metrics = context.measureText(text);
  return metrics.width;
}

export function AdjustAnimationSpeedByText(pId){
	let document_object;  
	document_object = document.getElementById(pId);
	if(document_object == null) return;

	const element_style = window.getComputedStyle(document_object, null);
	if((element_style.getPropertyValue("animation-duration") || element_style.getPropertyValue("-webkit-animation-duration")) == null) return;

	const object_text_width = displayTextWidth(document_object.innerHTML, element_style);
	const display_width = parseInt(element_style.width);

	const animation_speed = (object_text_width < display_width / 2)? 0 : (display_width + object_text_width) * 20;

	document_object.style["animation-duration"] = animation_speed + "ms";
	document_object.style["-webkit-animation-duration"] = animation_speed + "ms";
}

export function GenerateLinkButton(pText, pUrl){
  let document_button = document.createElement("button");
  document_button.innerHTML = pText;
  document_button.value = pUrl;
  document_button.id = pText + "-button";
  return document_button;
}

export function OpenPage(element, color){
	let active_page;

	const display_width = (window.innerWidth > 0)? window.innerWidth: screen.width;
	const tab_content = document.getElementsByClassName("flexbox-container");
	const tab_links = document.getElementsByClassName("Navbar-link");

	active_page = document.getElementById(element.innerHTML);

	for (let content of tab_content) content.style.display = "none";
	for (let button of tab_links) button.style.backgroundColor = "#555";

	active_page.style.display = (display_width > 800)? "flex" : "inline-block";
	element.style.backgroundColor = color;
}