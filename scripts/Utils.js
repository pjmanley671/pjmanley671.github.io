// https://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript
export function convertTZ(date, tzString){
    return new Date((typeof date === "string" ? 
		new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

export function GenerateLinkButton(p_Text, p_Url)
{
    var l_btn = document.createElement("button");
	l_btn.innerHTML = p_Text;
    l_btn.value = p_Url;

	l_btn.addEventListener("click", event => {
		window.open(event.target.value, "_self");
	})
    return l_btn;
}