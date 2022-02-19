
//Handler
document.querySelector('#redraw').addEventListener('click', function (e) {
    e.preventDefault();
    dealHand();
});

//Main
function dealHand() {
    card = cardBuilder('8', 'd')
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



//Helpers
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