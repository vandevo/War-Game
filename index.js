const newDeck = document.getElementById("newDeck")
function handleClick() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
    .then(response => response.json())
    .then(data => console.log(data));
}

newDeck.addEventListener("click", handleClick)

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