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

class HttpError extends Error {
  code: number;
  constructor(message: string, code?: number) {
    super(message);
    this.code = code ?? 500;
  }
}

class User3 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class UserList extends Array<User3> {
  push(u: object) {
    this.push(u);
  }
}

class UserList2 {
  users: User3[];
  push(u: User3) {
    this.users.push(u);
  }
}

class UserWithPayment {
  user: User3;
  payment: Payment3;

  constructor(user: User3, payment: Payment3) {
    this.user = user;
    this.payment = payment;
  }
}