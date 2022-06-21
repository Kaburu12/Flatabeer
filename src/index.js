// Code here
//displaying drinks on main menu
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
      })

function fetchData() {
   fetch("http://localhost:3000/beers")
        .then(response => response.json())
            .then(data => {
                return renderBeers(data);
            })
    }     


    fetchData();
    function renderBeers(beers) {
        beers.forEach(beer => {   
        const beerList = document.getElementById("beer-list")
        const flataBeer = document.createElement("li")
    }