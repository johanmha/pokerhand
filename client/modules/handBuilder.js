export default function handBuilder(deck) {
    let hand = [];
    while (hand.length < 5) {
        hand.push(deck.pop());
    }
    return hand;
}