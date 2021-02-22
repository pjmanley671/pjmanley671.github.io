// https://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript
export function convertTZ(date, tzString){
    return new Date((typeof date === "string" ? 
		new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

export function GenerateLinkButton(p_Text, p_Url, p_confirm = false)
{
    var l_btn = document.createElement("button");
	l_btn.innerHTML = p_Text;
    l_btn.value = p_Url;

	l_btn.addEventListener("click", event => {
		var cnfrmd = false;
		if(p_confirm) cnfrmd = confirm("Page will leave default site or to an external site. Continue?");
		if(p_confirm === cnfrmd) window.open(event.target.value, "_self");
	})

    return l_btn;
}