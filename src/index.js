// Navlist display of beer

function beerNavList() {
	fetch("http://localhost:3000/beers")
		.then((res) => res.json())
       .then((beersData) => {
			let data1 = "";
			beersData.map((values) => {
				data1 += ` <ul id="beer-list">
				<li>${values.name}</li></ul>
				<div class="beer-details">
			
				<p>
				  <em id="beer-description">${values.description}</em>
				</p>
				<h3>${values.reviews}</h3> </div>
				`
			})
            document.querySelector("nav").innerHTML = data1;
		})
    }