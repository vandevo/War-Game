let deckId
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data.cards)
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class = "card" />`

            cardsContainer.children[1].innerHTML = `   
                <img src=${data.cards[1].image} class = "card" />
            `
        })
})







/**
 * Challenge
 * 
 * Task: Using the saved deckId, draw 2 new cards from the deck
 * 
 * Docs for original Deck of Cards API: https://deckofcardsapi.com/#draw-card
 * BaseUrl you'll use: https://apis.scrimba.com/deckofcards/api/deck/
 * (that will replace the base url of https://deckofcardsapi.com/api/deck/)
 * that you'll see in the deck of cards API docs.
 * 
 * 1. Create a new button that, when clicked, draws 2 cards from the deckId
 * you have saved
 *      Note: you'll need to get a new deck every time you refresh the page,
 *      since you're only saving your deckId in a local variable right now
 * 2. Log those 2 cards to the console
 */

/*function callBack(){
    }

    setTimeout(callBack, 20000)


const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]


function gimmeThePets(person){
    return person.hasPet
}

const peopleWithPets = people.filter(gimmeThePets)*/

function peopleHasPets(person, callback){
    
    
    const resultingArray = []
    
    for (let item of array){
        const shouldBeIncluded = callback(item)
        if (shouldBeIncluded){
            resultingArray.push(item)
        }
    }
        return resultingArray

}

const peopleWithPets = filterArray(people, function(person){
   
        return person.hasPet
    
} )

console.log(peopleWithPets)