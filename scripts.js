// Initialize game variables
let cards = []          // Array to store the player's cards
let sum = 0             // Sum of the card values
let hasBlackJack = false // Flag to check if player has blackjack
let isAlive = false     // Flag to check if player is still in the game
let message = ""        // Message to display game status

// Get references to HTML elements
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Function to get a random card
function getRandomCard() {
    // Generate a random number between 1 and 13
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    // Convert face cards (Jack, Queen, King) to 10
    if (randomNumber > 10) {
        return 10
    // Convert Ace to 11
    } else if (randomNumber === 1) {
        return 11
    // Return the number for cards 2-10
    } else {
        return randomNumber
    }
}

// Function to start a new game
function startGame() {
    isAlive = true
    // Get two random cards
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    // Initialize the cards array and sum
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Render the game state
    renderGame()
}

// Function to render the game state
function renderGame() {
    // Display the cards
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // Display the sum
    sumEl.textContent = "Sum: " + sum

    // Check game state and set appropriate message
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // Display the message
    messageEl.textContent = message
}

// Function to draw a new card
function newCard() {
    // Only allow drawing a new card if the player is still in the game and doesn't have blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
