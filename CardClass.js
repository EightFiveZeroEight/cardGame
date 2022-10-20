// --------------------------
//#region ## Card Class
// --------------------------
;
class Card{
    constructor(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }
}
;
//#endregion ## Card Class

// --------------------------
//#region ## Card Subclasses
// --------------------------
;

class SixOfSages extends Card{
    constructor(){
        super(6, "Sages");
    }
}
const CARD_SIX_OF_SAGES = new SixOfSages;

;
//#endregion ## Card Subclasses

