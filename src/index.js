

function beerNavList() {
	fetch("http://localhost:3000/beers")
		.then((res) => res.json())
}   
