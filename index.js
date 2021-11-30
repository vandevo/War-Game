const newDeck = document.getElementById("newDeck")
function handleClick() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
    .then(response => response.json())
    .then(data => console.log(data));
}

newDeck.addEventListener("click", handleClick)

function callBack(){
    }

    setTimeout(callBack, 20000)