# Poker hand

### Ranked list of poker hands with value in app in brackets:
1. [8] Straight flush
2. [7] Four of a kind
3. [6] Full house
4. [5] Flush
5. [4] Straight
6. [3] Three of a kind
7. [2] Two pair
8. [1] Pair
9. [0] High card

### Ranked list of cards with value in app in brackets:

1. [14] Ace
2. [13] King
3. [12] Queen
4. [11] Jack
5. [10] 10
6. [9] 9
7. [8] 8
8. [7] 7
9. [6] 6
10. [5] 5
11. [4] 4
12. [3] 3
13. [2] 2
14. [1] Ace as part of ace to five straight

In this list royal flush has been ommited, since it is can be seen as a straight flush with high card Ace.

Suite does not have an impact on the hand but high card does.

We are assuming play with one standard card deck without any joker cards.


In this app we have given the hand a value from 0 to 8, where 8 is the best hand, and 0 is high card, and with a secondary evaluation of high card of the hand. Eg. ['4', '11'] is a straight with high card Jack. 

### Hand evaluation logic
Check for:
1. Flush
2. Straight
    a. Special case ace low to five straight
3. Straight flush
    - If both straight and flush is true
4. Four of a kind
5. Three of a kind
6. Pair
7. Full House
    - If both three of a kind and separate pair of a kind
8. Two pairs
    - If two separate instances of pair
9. Find high card


## Further ideas
Note that we have created the structure for comparing hands based on hand value and high card value, as handValue is an array of `[hand, highCard]`. High card value is however not used in current version of app. 
