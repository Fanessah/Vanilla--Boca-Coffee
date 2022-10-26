const coffeeContainer = document.querySelector('main')

function setLoading() {
    coffeeContainer.innerHTML = " "
    const h2 = document.createElement("h2")
    const loading = document.createTextNode("LOADING...")
    h2.appendChild(loading)
    coffeeContainer.appendChild(h2)
}

function displayCoffeeList(coffeelist) {
    coffeeContainer.innerHTML = " " 
    coffeelist.map(coffee => {
     const card = document.createElement('div')  
     //const img = document.createElement('img')
     const title = document.createElement('h3')
     const description = document.createElement('p')
     title.appendChild(document.createTextNode(coffee.title))
     description.appendChild(document.createTextNode(coffee.description))
     card.appendChild(title)
     card.appendChild(description) 
     coffeeContainer.appendChild(card)
    })
}

function getCoffee(temp) {
    setLoading()
    fetch(`https://api.sampleapis.com/coffee/hot${temp}`)
    .then(response => response.json()) 
    .then(coffeelist => display(coffeelist))
    .catch(console.error) //TODO:DISPLAY ERROR FOR USER

}
 
getCoffee('hot')