class Address {
  constructor(neighborhood, street, city, state, number) {
    this.neighborhood = neighborhood;
    this.street = street;
    this.city = city;
    this.state = state;
    this.number = number;
  }

  getAddressDetails() {
    return `${this.city} (${this.state.toUpperCase()}), ${this.neighborhood}, ${
      this.street
    } - ${this.number}`;
  }
}

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getPersonDetails() {
    return console.log(
      `${this.name} lives at the address ${this.address.getAddressDetails()}`
    );
  }
}

// const p1 = new Person(
//   'Luís Eduardo',
//   new Address(
//     'Lagoa quadrada',
//     'Professor Brook do Pokemon',
//     'Fortal',
//     'Ceasa',
//     '2333'
//   )
// );

// association 1:1

// const addressP1 = new Address(
//   'Lagoa quadrada',
//   'Professor Brook do Pokemon',
//   'Fortal',
//   'Ceasa',
//   '2333'
// );
// const p1 = new Person('Luís Eduardo', addressP1);
// p1.getPersonDetails();

// agreggation

class Wheel {
  constructor(type) {
    this.type = type;
  }
}

class Car {
  constructor(model) {
    this.model = model;
    this.wheels = [];
  }

  addWheels(wheel) {
    this.wheels.push(wheel);
  }

  // formatWheelsInfo() {
  //   const wheelsInfo = this.wheels.map((wheel) => wheel).join(' => ');
  //   return wheelsInfo;
  // }

  // printInfo() {
  //   console.log(
  //     `Car model: ${this.model}\nCar wheels: ${this.formatWheelsInfo()}`
  //   );
  // }

  printInfo() {
    console.log(
      `Car model: ${this.model}\nCar wheels: ${this.wheels.join(' => ')}`
    );
  }

  // printInfo() {
  //   console.log(`Car model: ${this.model}\nCar wheels: ${this.wheels}`);
  // }
}

const car1 = new Car('volkswagen');
car1.addWheels('Front left');
car1.addWheels('Front right');
car1.addWheels('Rear left');
car1.addWheels('Rear right');

console.log(typeof car1.wheels);
car1.printInfo();
