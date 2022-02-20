import handBuilder from './modules/handBuilder.js';
import cardBuilder from './modules/cardBuilder.js';
import deckBuilder from './modules/deckBuilder.js';
import handAnalyzer from './modules/handAnalyzer.js';

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

    //Find value of hand
    let handValue = handAnalyzer(hand);

    //Empty hand to replace with new cards
    cards.replaceChildren();
    hand.forEach(cardString => {
        const value = cardString.slice(0,1);
        const suite = cardString.slice(1,2);
        const card = cardBuilder(value, suite);
        cards.append(card);
    });
}
