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
function main() {
    //get shuffeled deck
    let deck = deckBuilder();

    //deal hand
    let hand = dealHand(deck);

    //Create function to find value of hand
    //Create function to show hand value on page

    //Create function which takes hand and visualizes function visualizeHand() (code below)

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
    while (hand.length < 5) {
        console.log(hand.length)
        hand.push(deck.pop());
    }
    return hand;
}
