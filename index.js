const newDeck = document.getElementById("newDeck")
function mynewDeck() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
    .then(response => response.json())
    .then(data => console.log(data));
}

newDeck.addEventListener("click", mynewDeck)

