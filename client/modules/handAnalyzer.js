export default function handAnalyzer(hand) {
    const valuesArray = [];
    const suitsArray = [];
    const tempHandValue = [0,0];

    hand.forEach(cardString => {
        valuesArray.push(cardString.slice(0, 1));
        suitsArray.push(cardString.slice(1, 2));
    });

    //Make array of values as integers for simpler evaluation
    const evalValues = valuesToIntegers(valuesArray);

    //Make array for evaluating low ace to five straight
    const lowStraightEvalValues = createLowStraightArray(evalValues);

    //Sort from low to high
    evalValues.sort(function (a, b) { return (a - b) });
    lowStraightEvalValues.sort(function (a, b) { return (a - b) });

    //Check for flush
    const flush = checkFlush(suitsArray);

    //check for high and low straight
    const highStraight = checkStraight(evalValues);

    const lowStraight = checkStraight(lowStraightEvalValues);
    //Set highcard for this special case
    tempHandValue[1] = lowStraight ? 5 : 0;

    const straight = (lowStraight || highStraight) ? true : false;

    // Count cards of equal value
    const cardCountValues = countCards(evalValues);

    // find amount of pairs
    const pairs = countPairs(cardCountValues)

    // Evaluate hand
    const handValue = evaluateHand(tempHandValue, cardCountValues, flush, straight, pairs, evalValues);
    
    return handValue;
};


//Helpers

function valuesToIntegers(valuesArray) {
    const evalValues = []
    valuesArray.forEach(value => {
        if (value == 't') evalValues.push(10);
        else if (value == 'j') evalValues.push(11);
        else if (value == 'q') evalValues.push(12);
        else if (value == 'k') evalValues.push(13);
        else if (value == 'a') evalValues.push(14);
        else evalValues.push(parseInt(value));
    })
    return evalValues;
};

function createLowStraightArray(evalValues) {
    const lowStraightEvalValues = [];
    evalValues.forEach(value => {
        if (value == 14) lowStraightEvalValues.push(1);
        else lowStraightEvalValues.push(value);
    });
    return lowStraightEvalValues;
};

function checkFlush(suitsArray) {
    let flush = true;
    for (let i = 0; i < 4; i++) {
        if (suitsArray[i] != suitsArray[i + 1]) flush = false;
    };
    return flush;
};

function checkStraight(evalValues) {
    let straight = true;
    for (let i = 0; i < 4; i++) {
        if (evalValues[i] != evalValues[i + 1] - 1) straight = false;
    };
    return straight;
};

function countCards(evalValues) {
    const cardCount = {};
    for (let value of evalValues) {
        cardCount[value] = (cardCount[value] || 0) + 1;
    };
    const cardCountValues = Object.values(cardCount);
    return cardCountValues;
};

function countPairs(cardCountValues) {
    let pairs = 0;
    for (let value of cardCountValues) {
        if (value == 2) pairs++;
    };
    return pairs;
};

function evaluateHand(tempHandValue, cardCountValues, flush, straight, pairs, evalValues) {
    const handValue = tempHandValue;
    if (straight == true && flush == true) handValue[0] = 8;
    else if (cardCountValues.includes(4)) handValue[0]= 7;
    else if (cardCountValues.includes(3) && cardCountValues.includes(2)) handValue[0] = 6;
    else if (flush) handValue[0] = 5;
    else if (straight) handValue[0] = 4;
    else if (cardCountValues.includes(3)) handValue[0] = 3;
    else if (pairs == 2) handValue[0] = 2;
    else if (pairs == 1) handValue[0] = 1;
    else handValue[0] = 0;

    //Find highcard if not allready set in special case (ace to five straight)
    handValue[1] = handValue[1] ? handValue[1] : evalValues[evalValues.length - 1];

    return handValue;
};