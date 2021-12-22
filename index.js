let deckId

let yourScore = 0
let computerScore = 0

const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const header = document.getElementById("header")
const remainingText = document.getElementById("remaining")

let computerScoreEl = document.getElementById("computer-score")
let yourScoreEl = document.getElementById("your-score")

async function handleClick() {
    const res= await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    const data = await res.json()
            remaining.textContent = `Remaining Cards: ${data.remaining}`
            deckId = data.deck_id
            console.log(deckId)
        
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", async () => {
    const res = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    const data = await res.json()
      
            remaining.textContent = `Remaining Cards: ${data.remaining}`
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class = "card" />`

            cardsContainer.children[1].innerHTML = `   
                <img src=${data.cards[1].image} class = "card" />
            `
            const winnerText = determineCardWinner(data.cards[0], data.cards[1])
            header.textContent = winnerText

            if (data.remaining === 0){
                drawCardBtn.disabled = true
                if (computerScore > yourScore) {
                    header.textContent = "Computer won!"
                } else if (yourScore > computerScore){
                    header.textContent = "You won!"
                } else {
                    header.textContent = "It's a tie game. Play again!"
                }
            }
    
})


function determineCardWinner(card1, card2){
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9","10",
    "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)

    if (card1ValueIndex > card2ValueIndex){
        computerScore++
        computerScoreEl.textContent = `Computer's Score: ${computerScore}`
        return "Computer wins!"

    }   else if (card1ValueIndex < card2ValueIndex){
        yourScore++
        yourScoreEl.textContent = `Your Score: ${yourScore}`
        return "You win!"
    }   else {
        return "War!"
    }
}

// const card10bj = {
//    value: "7"
//}

//const card20bj = {
//    value: "KING"
//}

//determineCardWinner(card10bj, card20bj)




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