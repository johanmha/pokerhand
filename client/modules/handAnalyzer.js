export default function handAnalyzer(hand) {
    let valuesArray = [];
    let suitsArray = [];

    hand.forEach(cardString => {
        valuesArray.push(cardString.slice(0, 1));
        suitsArray.push(cardString.slice(1, 2));
    });

    //Check for flush
    let flush = true;
    for (let i = 0; i < 4; i++) {
        if (suitsArray[i] != suitsArray[i + 1]) flush = false;
    }
};