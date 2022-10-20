class Hand{
    constructor(){
        this.arrayOfCards = [];
    }

    addCard(card){
        this.arrayOfCards.push(card);
        // console.log(`Print this hand: `+this.arrayOfCards);
    }

    playCard(card){
        console.log(`playCard called\n
        `);
        if (this.arrayOfCards.includes(card)){
            // Checks to see if this array of cards has a card
            console.log(`this.arrayOfCards includes card evaluates true\n
            `);
            this.arrayOfCards.splice(this.arrayOfCards.indexOf(card));
            // indexOf grabs the index the card is at; splice removes that index.

            console.log(this.arrayOfCards);
            
        } else {
            return null;
        }
    }
}


