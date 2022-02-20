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

    //check for straight
    let straight = true;

    return handValue;
};