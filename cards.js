const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let deck = [];

function initializeDeck() {
    deck = [];
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push(`${rank}_of_${suit}.png`);
        }
    }
}

function drawCard() {
    if (deck.length === 0) {
        alert("No more cards in the deck!");
        return;
    }
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(randomIndex, 1)[0];
    document.getElementById('card').src = `cards/${card}`;
}

document.getElementById('drawButton').addEventListener('click', drawCard);

// Initialize the deck when the script loads
initializeDeck();
