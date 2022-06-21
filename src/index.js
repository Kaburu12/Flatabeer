

function beerNavList() {
	fetch("http://localhost:3000/beers")
		.then((res) => res.json())
       .then((beersData) => {
			let data1 = "";
			beersData.map((values) => {
				data1 += ` <ul id="beer-list">
				<li></li></ul>
				<div class="beer-details">
			
				<p>
				  <em id="beer-description"></em>
				</p>
				<h3></h3> </div>
				`
			})
		})
    }