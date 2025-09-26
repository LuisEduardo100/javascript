class BankAccount {
  #balance = 0;

  constructor(personName, initialBalance, address) {
    this.personName = personName;
    this.#balance = initialBalance;
    this.address = address;
  }

  get balance() {
    return this.#balance;
  }

  set balance(amount) {
    // this is a simple validation to ensure balance changes do not exceed $2000
    if (Math.abs(this.#balance - amount) > 2000) {
      throw new Error('Balance change exceeds $2000 limit.');
    }
    this.#balance = amount;
  }

  printInfo() {
    console.log(
      `Account holder: ${this.personName}, 
      resides at ${this.address} and
      has a balance of $${this.#balance}.`
    );
  }
}

const b1 = new BankAccount('Alice', 500, '123 Main St');
b1.printInfo();
b1.balance += 1000;
b1.printInfo();
b1.balance -= 1000;
b1.printInfo();
