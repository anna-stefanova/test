class Constructor {
    block: string;
    amountBlocks: number;

    constructor();
    constructor(block: string);
    constructor(amountBlocks: number);
    constructor(block: string, amountBlocks: number);

    constructor(blockOrAmountBlocks?: string | number, amountBlocks?: number) {
        if (typeof blockOrAmountBlocks === 'string') {
            this.block = blockOrAmountBlocks;
        } else if(typeof blockOrAmountBlocks === 'number') {
            this.amountBlocks = blockOrAmountBlocks;
        }
        if (typeof amountBlocks === 'number') {
            this.amountBlocks = amountBlocks;
        }

    }
}

const c1 = new Constructor("cube");
const c2 = new Constructor()
const c3 = new Constructor(10);
const c4 = new Constructor('cone', 4);