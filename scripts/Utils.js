// https://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript
export function convertTZ(date, tzString){
    return new Date((typeof date === "string"? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

// https://www.reddit.com/r/javascript/comments/ti1gfd/askjs_switch_case_worth_it_for_this/
export function SendDataToTable(table, args=[]){
	let table_row = document.createElement("tr")

	for( let data of args ){
		const row_column = document.createElement("td")
		if( data instanceof Element )
			row_column.appendChild(data)
    else
      row_column.innerHTML = data
    
		table_row.appendChild(row_column)
	}
	table.appendChild(table_row)
}

function displayTextWidth(text, font){
	let canvas, context, metrics;
	// https://www.w3docs.com/snippets/javascript/how-to-calculate-text-width-with-javascript.html
  canvas = displayTextWidth.canvas
	|| (displayTextWidth.canvas = document.createElement("canvas"));
  context = canvas.getContext("2d");
  context.font = font;
  metrics = context.measureText(text);
  return metrics.width;
}

export function AdjustAnimationSpeedByText(pId){
	let document_object, element_style, object_text_width, display_width, animation_speed;  
	document_object = document.getElementById(pId);
	if(document_object == null) return;

	element_style = window.getComputedStyle(document_object, null);
	if((element_style.getPropertyValue("animation-duration")
	|| element_style.getPropertyValue("-webkit-animation-duration")) == null) return;

	object_text_width = displayTextWidth(document_object.innerHTML, element_style);
	display_width = parseInt(element_style.width);

	animation_speed = (object_text_width < (display_width / 2))?
	0 : (display_width + object_text_width) * 20;

	document_object.style["animation-duration"] = animation_speed + "ms";
	document_object.style["-webkit-animation-duration"] = animation_speed + "ms";
}

export function GenerateLinkButton(pText, pUrl){
  let document_button = document.createElement("button");
	document_button.innerHTML = pText;
  document_button.value = pUrl;
  return document_button;
}

export function OpenPage(element, color){
	let tab_content, tab_links, active_page, display_width;

	tab_content = document.getElementsByClassName("flexbox-container");
	tab_links = document.getElementsByClassName("Navbar-link");
	active_page = document.getElementById(element.innerHTML);
	display_width = (window.innerWidth > 0)? window.innerWidth: screen.width;

	for (let content of tab_content) content.style.display = "none";
	for (let button of tab_links) button.style.backgroundColor = "#555";

	active_page.style.display = (display_width > 800)? "flex" : "inline-block";
	element.style.backgroundColor = color;
}