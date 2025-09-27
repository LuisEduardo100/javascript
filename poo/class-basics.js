class Member {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  authenticate(email, password) {
    if (email !== this.email || password !== this.password) {
      console.log('Email ou senha inválidos.');
      return;
    }
    console.log('Login efetuado com sucesso.');
  }
}

class Item {
  constructor(name, description, price, quantityAvailable = 0) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantityAvailable = quantityAvailable;
  }

  addToInventory(quantity) {
    this.quantityAvailable += quantity;
    return console.log(`Quantidade disponivel ${this.quantityAvailable}`);
  }

  applyOffer(discount) {
    this.price -= this.price * (discount / 100);
    // this.price * ((100 - discount) / 100);
    return 'R$' + this.price.toFixed(2);
  }
}

// const alice = new Member('Alice Johnson', 'alice@email.com', 'password123');
// alice.authenticate('alice@email.com', 'password123');

const chair = new Item(
  'Cadeira de Escritório',
  'Cadeira confortável com ajuste de altura',
  150
);

console.log(chair.applyOffer(10)); // 135
