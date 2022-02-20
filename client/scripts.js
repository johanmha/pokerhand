import handBuilder from './modules/handBuilder.js'
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
    let hand = handBuilder(deck);

    // create Html of hand/cards
    let cards = document.querySelector('.cards');
    cards.replaceChildren();
    hand.forEach(cardString => {
        const value = cardString.slice(0,1);
        const suite = cardString.slice(1,2);
        const card = cardBuilder(value, suite);
        cards.append(card);
    });

    //Create function to find value of hand
    //Create function to show hand value on page

    //Create function which takes hand and visualizes function visualizeHand() (code below)

}

