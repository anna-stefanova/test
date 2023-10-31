interface ILogger {
    log(...args: string[]): void;
    err(...args: string[]): void;
}

class Logger implements ILogger{
    err(...args: string[]): void {
    }

    log(...args: string[]): void {
    }

}

interface IPayable {
    pay(paymentId: number): boolean;
    price?: number;
}

interface IDelete {
    delete(userId: string | number): void;
}

class Payment2 implements IPayable, IDelete {
    userId: number | string;
    pay(paymentId: number | string): boolean {
        return false;
    }
    delete(userId: string | number) {
    }
    unholdPayment() {

    }

}