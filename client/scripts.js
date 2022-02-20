import cardBuilder from './modules/cardBuilder.js'
import deckBuilder from './modules/deckBuilder.js'

//Handlers
//Get hand on pageload
document.getElementById('main').onload = function() {
    main()
}

//Get hand on redraw button click
document.querySelector('#redraw').addEventListener('click', function (e) {
    e.preventDefault();
    main();
});

//Main

/////This function needs a better name
function main() {
    let deck = deckBuilder()

    let hand = dealHand(deck);

    //Create function to find value of hand
    //Create function to show hand value on page

    //Create function whiuch takes hand and visualizes function visualizeHand() (code below)

    let cards = document.querySelector('.cards');
    let card1 = cardBuilder('8', 'd');
    let card2 = cardBuilder('8', 'd');
    let card3 = cardBuilder('8', 'd');
    let card4 = cardBuilder('8', 'd');
    let card5 = cardBuilder('8', 'd');

    cards.append(card1, card2, card3, card4, card5)
}


function dealHand(deck) {
    let hand = [];
    return hand;
}
