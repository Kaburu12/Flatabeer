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
        flataBeer.textContent = beer.name
        beerList.appendChild(flataBeer)
        flataBeer.addEventListener('click', () => {
            const beer_image = document.getElementById("beer-image")
            beer_image.src = beer.image_url
            console.log(beer_image)
            const heading = document.querySelector('h2')
            heading.textContent = beer.name;
            const describe = document.getElementById("beer-description")
            describe.textContent = beer.description;
            const review = document.querySelector("#review-list")
            review.textContent = beer.reviews;
        });
      });
    }