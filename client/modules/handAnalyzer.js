export default function handAnalyzer(hand) {
    let valuesArray = [];
    let suitsArray = [];
    let handValue = [];

    hand.forEach(cardString => {
        valuesArray.push(cardString.slice(0, 1));
        suitsArray.push(cardString.slice(1, 2));
    });

    //Check for flush
    let flush = true;
    for (let i = 0; i < 4; i++) {
        if (suitsArray[i] != suitsArray[i + 1]) flush = false;
    };

    //Make array of values as integers for simpler evaluation
    let evalValues = []
    valuesArray.forEach(value => {
        if (value == 't') evalValues.push(10);
        else if (value == 'j') evalValues.push(11)
        else if (value == 'q') evalValues.push(12);
        else if (value == 'k') evalValues.push(13);
        else if (value == 'a') evalValues.push(14);
        else evalValues.push(parseInt(value));
    })

    //Make array for evaluating low ace to five straight
    let lowStraightEvalValues = []
    evalValues.forEach(value => {
        if (value == 14) lowStraightEvalValues.push(1);
        else lowStraightEvalValues.push(value);
    });

    //Sort from low to high
    evalValues.sort(function (a, b) { return(a - b) });
    lowStraightEvalValues.sort(function (a, b) { return(a - b) });
    
    //check for straight
    let straight = true;
    for (let i = 0; i < 4; i++) {
        if (evalValues[i] != evalValues[i + 1] - 1 ) straight = false;
    };

    //If there is an ace in the hand, and the hand is not an ace high straight
    if (lowStraightEvalValues.includes(1) && !straight) {
        straight = true;
        for (let i = 0; i < 4; i++) {
            if (lowStraightEvalValues[i] != lowStraightEvalValues[i + 1] - 1 ) straight = false;
        };
    };

    // Count cards of equal value
    const cardCounter = {};
    for (let value of evalValues) {
        cardCounter[value] = (cardCounter[value] || 0) + 1;
    };

    return handValue;
};
