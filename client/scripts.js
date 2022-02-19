
//Handler
document.querySelector('#redraw').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('sniksnæk');
    dealHand();
});

//Helpers
function dealHand() {
    cardBuilder('8', 'd')
}

function cardBuilder(value, suite) {
    let htmlValue = ''
    let htmlSuite = ''
    let cssSuite = ''


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

    let cards = document.querySelector('.cards');
    let card = document.createElement('span');
    let cardSection = document.createElement('div');
    let cardTopContainer = document.createElement('div');
    let cardTop = document.createElement('span');

    card.classList.add('card');
    cardSection.classList.add('card-section');
    cardTopContainer.classList.add('card-top-container');
    cardTop.classList.add('card-top');

    cardTop.innerHTML = `
        <i class="${cssSuite}">${htmlSuite}</i>
        <i class="value">${htmlValue}</i>
    `;
    card.appendChild(cardSection).appendChild(cardTopContainer).appendChild(cardTop);
    cards.appendChild(card)
    console.log(card);
}