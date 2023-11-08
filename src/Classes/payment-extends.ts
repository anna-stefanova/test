type PaymentStatus3 = 'new' | 'paid'
class Payment3 {
  id: number;
  status: PaymentStatus3 = 'new'

  constructor(id:number) {
    this.id = id;
  }

  pay() {
    this.status = 'paid';
  }
}

class PersistedPayment3 extends Payment3 {
  databaseId: number;
  paidAt: Date;
  constructor(id: number) {
    super(id);
  }

  override pay(date?: Date) {
    if (date) {
      this.paidAt = date;
    }
  }

}