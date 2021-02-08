function CanvasFill()
{
	var canvas = document.getElementById("GitHubCanvas");
	var ctx = canvas.getContext("2d");
	ctx.globalAlpha = 0.2; // location matters
	ctx.fillStyle = "#383838";
	ctx.fillRect(0, 0, 300, 150);
}

function PageLoad()
{
	switch(document.getElementById("page-name").innerHTML)
	{
		case "Paul Manley - Portfolio":
			CanvasFill();
			break;
		default:
			break;
	}
}
