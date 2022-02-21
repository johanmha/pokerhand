export default function handAnalyzer(hand) {
    let valuesArray = [];
    let suitsArray = [];
    let handValue = [0,0];

    // hand = ['ad', '3d', '2d', '5d', '4d']
    // hand = ['ad', '4h', '4d', '4d', '4d']
    // hand = ['3s', '3s', 'qs', 'qk', '3s']
    // hand = ['ad', 'kh', 'td', 'qd', 'jd']
    // hand = ['as', '3s', 'js', 'js', 'js']
    // hand = ['as', '3s', 'js', 'jk', 'js']    
    // hand = ['as', 'qs', 'qs', 'jk', 'js']    
    // hand = ['as', '3s', 'qs', 'qk', 'js']    
    // hand = ['as', '3s', '7s', 'qk', 'js']    


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
    evalValues.sort(function (a, b) { return (a - b) });
    lowStraightEvalValues.sort(function (a, b) { return (a - b) });

    //check for straight
    let straight = true;
    for (let i = 0; i < 4; i++) {
        if (evalValues[i] != evalValues[i + 1] - 1) straight = false;
    };

    //If there is an ace in the hand, and the hand is not an ace high straight
    if (lowStraightEvalValues.includes(1) && !straight) {
        straight = true;
        for (let i = 0; i < 4; i++) {
            if (lowStraightEvalValues[i] != lowStraightEvalValues[i + 1] - 1) straight = false;
        };
        //Set highcard for this special case
        handValue[1] = straight ? 5 : 0;
    };

    // Count cards of equal value
    const cardCounter = {};
    for (let value of evalValues) {
        cardCounter[value] = (cardCounter[value] || 0) + 1;
    };
    const cardCounterValues = Object.values(cardCounter);

    // find amount of pairs

    let pairs = 0;
    for (let value of cardCounterValues) {
        if (value == 2) pairs++
    };
    // Evaluate hand
    if (straight == true && flush == true) handValue[0] = 8;
    else if (cardCounterValues.includes(4)) handValue[0]= 7;
    else if (cardCounterValues.includes(3) && cardCounterValues.includes(2)) handValue[0] = 6;
    else if (flush) handValue[0] = 5;
    else if (straight) handValue[0] = 4;
    else if (cardCounterValues.includes(3)) handValue[0] = 3;
    else if (pairs == 2) handValue[0] = 2;
    else if (pairs == 1) handValue[0] = 1;
    else handValue[0] = 0;

    //Find highcard if not allready set in special case (ace to five straight)
    handValue[1] = handValue[1] ? handValue[1] : evalValues.pop();

    return handValue;
};
