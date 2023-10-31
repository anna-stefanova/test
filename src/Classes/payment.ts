enum PaymentStatus {
    Holded,
    Reversed,
    Processed
}
class Payment {
    id: number;
    status: PaymentStatus;
    createAt: Date;
    updateAt: Date;

    constructor(id: number) {
        this.id = id;
        this.status = PaymentStatus.Holded;
        this.createAt = new Date();
        this.unholdPayment();
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createAt.getTime();
    }

    unholdPayment(): void {
        if ( this.status == PaymentStatus.Processed) {
            throw new Error('Платеж не может быть возвращен');
        }
        this.status = PaymentStatus.Reversed;
        this.updateAt = new Date();
    }
}

const payment = new Payment(1);
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);