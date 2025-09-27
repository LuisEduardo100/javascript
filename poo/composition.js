// Composition
class Page {
  constructor(pageNumber) {
    this.pageNumber = pageNumber;
  }
}

class Book {
  constructor(title) {
    this.title = title;
    this.pages = [];
  }

  addPage(pageNumber) {
    const newPage = new Page(pageNumber);
    this.pages.push(newPage);
  }
}

// const book1 = new Book('Percy Jackson');
// book1.addPage(1);
// book1.addPage(2);
// console.log(book1.pages.length);

// Association 1:N (1 para muitos)
class Order {
  constructor(description) {
    this.description = description;
  }
}

class Customer {
  constructor(name) {
    this.name = name;
    this.pedidos = [];
  }

  addOrder(order) {
    this.pedidos.push(order);
  }

  showOrders() {
    return this.pedidos.map((o) => o.description);
  }
}

const c1 = new Customer('Luís');
const p1 = new Order('coxinhas fritas');
const p2 = new Order('coxinhas cozidas');
const p3 = new Order('coxinhas cruas');

c1.addOrder(p1);
c1.addOrder(p2);
c1.addOrder(p3);
console.log(c1.showOrders());
