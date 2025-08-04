export interface GateWay {
    pay(amount: number): void;
}

export class CreditCardPayment implements GateWay {
    pay(amount: number): void {
        console.log(`Paid $${amount} using Credit Card.`);
    }
}

export class PayPalPayment implements GateWay {
    pay(amount: number): void {
        console.log(`Paid $${amount} using PayPal.`);
    }
}

export class CryptoPayment implements GateWay {
    pay(amount: number): void {
        console.log(`Paid $${amount} using Cryptocurrency.`);
    }
}

export class PaymentContext {
    private strategy!: GateWay;

    setStrategy(strategy: GateWay): void {
        this.strategy = strategy;
    }

    pay(amount: number): void {
        if (!this.strategy) {
            throw new Error("Payment strategy is not set.");
        }
        this.strategy.pay(amount);
    }
}

const payment = new PaymentContext();

payment.setStrategy(new CreditCardPayment());
payment.pay(100);

payment.setStrategy(new PayPalPayment());
payment.pay(75);

payment.setStrategy(new CryptoPayment());
payment.pay(250);
