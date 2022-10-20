// --------------------------
//#region ## Possible Ranks & Possible Suits
// --------------------------
;
const POSSIBLE_SUITS = [`Sages`, `Heroes`, `Peasants`, `Weavers`, `Nobles`, `Reapers`, `Adventurers`]

POSSIBLE_SUITS.sort()

const POSSIBLE_RANKS = [`R0`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`, `R7`]

;
//#endregion ## Possible Ranks & Possible Suits

6*8

class Deck{
    constructor(cardInDeck){
        this.deckRanks = null;
        this.deckSuits = null;
        this.deckCards = [];
    }

    generateCards(POSSIBLE_RANKS, POSSIBLE_SUITS){
        this.deckRanks = POSSIBLE_RANKS;
        this.deckSuits = POSSIBLE_SUITS;

        for (let num = 0; num < POSSIBLE_SUITS.length; num++) {
            // for every suit
            let thisCardSuit = `${POSSIBLE_SUITS[num]}`;

            for (let i = 0; i < POSSIBLE_RANKS.length; i++) {
                // we will will make one card of each rank
                let thisCardRank = `${POSSIBLE_RANKS[i]}`;
                // console.log(thisCardRank);
                let of = `Of`;
                let cardX = {
                    rank: thisCardRank,
                    suit: thisCardSuit,
                };


                // --------------------------
                //#region ## UNSUCESSFUL CODE; WISH TO UNDERSTAND
                // --------------------------
                ;
                
                // this.deckCards = (
                // eval(`let ${thisCardRank}${of}${thisCardSuit} = {
                //     rank: \`${POSSIBLE_SUITS[num]}\`,
                //     suit: \`${thisCardSuit}\`
                // }`)
                // );

                // window[`${thisCardRank}${of}${thisCardSuit}` = `{
                //     rank: ${thisCardRank},
                //     suit: ${thisCardSuit},
                // }`]
                
                ;
                //#endregion ## UNSUCESSFUL CODE; WISH TO UNDERSTAND

                this.deckCards.push(cardX);
            }
        }

    }

    shuffle() {
        let shuffled = this.deckCards.sort(() => Math.random() - 0.5);
    }

}


// --------------------------
//#region ##Initialize Deck
// --------------------------
;

const THIS_DECK = new Deck;
THIS_DECK.generateCards(POSSIBLE_RANKS, POSSIBLE_SUITS);
console.log(THIS_DECK.deckCards);
THIS_DECK.shuffle();

//#endregion ##Initialize Deck


