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
    const deck = deckBuilder();

    //deal hand
    const hand = handBuilder(deck);

    //Find value of hand
    const handValue = handAnalyzer(hand);

    // create Html of hand/cards
    const cards = document.querySelector('.cards');

    //Empty hand to replace with new cards
    cards.replaceChildren();
    hand.forEach(cardString => {
        const value = cardString.slice(0,1);
        const suite = cardString.slice(1,2);
        const card = cardBuilder(value, suite);
        cards.append(card);
    });

    const handValueHtml = (handValue[0] == 0) ? 'High card'
                        : (handValue[0] == 1) ? 'Pair'
                        : (handValue[0] == 2) ? 'Two pairs'
                        : (handValue[0] == 3) ? 'Three of a kind'
                        : (handValue[0] == 4) ? 'Straight'
                        : (handValue[0] == 5) ? 'Flush'
                        : (handValue[0] == 6) ? 'Full House'
                        : (handValue[0] == 7) ? 'Four of a kind'
                        : 'Straight Flush';

    //Visualize hand value
    const htmlHand = document.querySelector('.hand');
    htmlHand.innerHTML = `Hand: ${handValueHtml}` 
}
