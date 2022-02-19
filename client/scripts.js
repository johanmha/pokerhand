
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
    deck = initDeck();
    deckShuffeled = shuffelDeck(deck);

    hand = dealHand(deckShuffeled);

    //Create function to find value of hand
    //Create function to show hand value on page

    //Create function whiuch takes hand and visualizes function visualizeHand() (code below)

    cards = document.querySelector('.cards');
    card1 = cardBuilder('8', 'd');
    card2 = cardBuilder('8', 'd');
    card3 = cardBuilder('8', 'd');
    card4 = cardBuilder('8', 'd');
    card5 = cardBuilder('8', 'd');

    cards.append(card1, card2, card3, card4, card5)
}

//Deck helpers
//Create new deck
function initDeck() {
    clubs = ['2k', '3k', '4k', '5k', '6k', '7k', '8k', '9k', 'tk', 'jk', 'qk', 'kk', 'ak'];
    diamonds = ['2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'td', 'jd', 'qd', 'kd', 'ad'];
    hearts = ['2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'th', 'jh', 'qh', 'kh', 'ah'];
    spades = ['2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'ts', 'js', 'qs', 'ks', 'as'];
    deck = [...clubs, ...diamonds, ...hearts, ...spades];
    
    return deck;
};

//Shuffel deck
function shuffelDeck(deck) {
    let deckShuffeled = [];
    return deckShuffeled
};

function dealHand(deckShuffeled) {
    let hand = [];
    return hand;
}

// Create card
function cardBuilder(value, suite) {
    //Get value and suite suitable for HTML
    let [htmlSuite, cssSuite] = getHtmlSuite(suite);
    let htmlValue = getHtmlValue(value);
    
    let cards = document.querySelector('.cards');
    let card = document.createElement('span');
    card.classList.add('card');

    let topSection = buildSection('top', cssSuite, htmlSuite, htmlValue);
    let midSection = buildSection('middle', cssSuite, htmlSuite, htmlValue);
    let botSection = buildSection('bottom', cssSuite, htmlSuite, htmlValue);

    card.append(topSection, midSection, botSection);
    return card;
}

//Create card helpers
function getHtmlSuite(suite) {
    let htmlSuite = ''
    let cssSuite = ''

    switch (suite) {
        case 'h':
            htmlSuite = '&heartsuit;';
            cssSuite = 'hearts';
            break;
        case 'd':
            htmlSuite = '&diamondsuit;';
            cssSuite = 'diamonds';
            break;
        case 'k':
            htmlSuite = '&clubsuit;';
            cssSuite = 'clubs';
            break;
        case 's':
            htmlSuite = '&spadesuit;';
            cssSuite = 'spades';
            break;
        default:
            //Display suite input if there is error input
            htmlSuite = suite;
            cssSuite = 'spades';
    }
    return [htmlSuite, cssSuite];
};

function getHtmlValue(value) {
    let htmlValue = ''

    switch (value) {
        case 't':
            htmlValue = '10';
            break;
        case 'j':
            htmlValue = 'J';
            break;
        case 'q':
            htmlValue = 'Q';
            break;
        case 'k':
            htmlValue = 'K';
            break;
        case 'a':
            htmlValue = 'A';
            break;
        default:
            htmlValue = value;
    }
    return [htmlValue];
};

function buildSection(section, cssSuite, htmlSuite, htmlValue) {
    let cardSection = document.createElement('div');
    let cardSectionContainer = document.createElement('div');
    let cardItems = document.createElement('span');

    if (section == 'top' ) {
        cardSection.classList.add('card-section');
        cardSectionContainer.classList.add(`card-${section}-container`);
        cardItems.classList.add(`card-${section}`);
    
        cardItems.innerHTML = `
            <i class="value">${htmlValue}</i>
            <i class="${cssSuite}">${htmlSuite}</i>
        `;
    } else if (section == 'middle') {
        cardSection.classList.add('card-section');
        cardSectionContainer.classList.add(`card-${section}-container`);
        cardItems.classList.add(`card-${section}`);
    
        cardItems.innerHTML = `
            <i class="${cssSuite}">${htmlSuite}</i>
        `;
    } else if (section == 'bottom') {
        cardSection.classList.add('card-section');
        cardSectionContainer.classList.add(`card-${section}-container`);
        cardItems.classList.add(`card-${section}`);
    
        cardItems.innerHTML = `
            <i class="${cssSuite}">${htmlSuite}</i>
            <i class="value">${htmlValue}</i>
        `;
    }
    cardSection.appendChild(cardSectionContainer).appendChild(cardItems)
    return cardSection
};