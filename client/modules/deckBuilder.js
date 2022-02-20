export default function deckBuilder() {
    let deck = initDeck();
    let deckShuffeled = shuffelDeck(deck);
    return deckShuffeled;
}

//Deck helpers
//Create new deck
function initDeck() {
    let clubs = ['2k', '3k', '4k', '5k', '6k', '7k', '8k', '9k', 'tk', 'jk', 'qk', 'kk', 'ak'];
    let diamonds = ['2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'td', 'jd', 'qd', 'kd', 'ad'];
    let hearts = ['2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'th', 'jh', 'qh', 'kh', 'ah'];
    let spades = ['2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'ts', 'js', 'qs', 'ks', 'as'];
    let deck = [...clubs, ...diamonds, ...hearts, ...spades];

    return deck;
};

//Shuffel deck
function shuffelDeck(deck) {
    let i = deck.length;
    if (i == 0) return false;
    while (--i) {
        let j = Math.floor(Math.random() * (i + 1));
        let tempi = deck[i];
        let tempj = deck[j];
        deck[i] = tempj;
        deck[j] = tempi;
    }
    return deck
};
