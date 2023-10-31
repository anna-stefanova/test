"use strict";
class Constructor {
    constructor(blockOrAmountBlocks, amountBlocks) {
        if (typeof blockOrAmountBlocks === 'string') {
            this.block = blockOrAmountBlocks;
        }
        else if (typeof blockOrAmountBlocks === 'number') {
            this.amountBlocks = blockOrAmountBlocks;
        }
        if (typeof amountBlocks === 'number') {
            this.amountBlocks = amountBlocks;
        }
    }
}
const c1 = new Constructor("cube");
const c2 = new Constructor();
const c3 = new Constructor(10);
const c4 = new Constructor('cone', 4);
//# sourceMappingURL=constructor.js.map