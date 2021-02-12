import {GetRepos} from './scripts/GitChart.js'
import {SetPointPositions} from './scripts/GitChart.js'
import {DrawChart} from './scripts/GitChart.js'
function Resize()
{
  SetPointPositions();
  DrawChart();
}

function PageLoad() {
	switch(document.getElementById("page-name").innerHTML)
	{
		case "Paul Manley - Portfolio":
			GetRepos('https://api.github.com/users/pjmanley671/repos');
			break;
		default:
			break;
	}
}

window.onload = PageLoad;
window.onresize = Resize;


/*
 * https://stackoverflow.com/questions/17147821/how-to-make-a-whole-row-in-a-table-clickable-as-a-link
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"/>

<table class="table table-hover">
  <tbody>
    <tr style="transform: rotate(0);">
    <th scope="row"><a href="#" class="stretched-link">1</a></th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> 
 */