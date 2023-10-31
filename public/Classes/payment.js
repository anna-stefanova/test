"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Reversed"] = 1] = "Reversed";
    PaymentStatus[PaymentStatus["Processed"] = 2] = "Processed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.id = id;
        this.status = PaymentStatus.Holded;
        this.createAt = new Date();
        this.unholdPayment();
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createAt.getTime();
    }
    unholdPayment() {
        if (this.status == PaymentStatus.Processed) {
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
//# sourceMappingURL=payment.js.map