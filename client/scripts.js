
//Handler
document.querySelector('#redraw').addEventListener('click', function(e){
        e.preventDefault();
        console.log('sniksnæk');
        dealHand();
});

//Helpers
function dealHand() {
    cardBuilder('8', 'h')
}

function cardBuilder(value, suite) {
    let htmlSuite = ''
    let htmlValue = ''

    switch (value) {

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
        <i class="clubs">&clubsuit;</i>
        <i class="value">9</i>
    `;
    card.appendChild(cardSection).appendChild(cardTopContainer).appendChild(cardTop);
    cards.appendChild(card)
    console.log(card);
}