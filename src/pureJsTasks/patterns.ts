type Config = { name: string; age: number };

// create patterns
// pattern constructor

function Animal(this: any, name: string) {
  this.name = name;
}

Animal.prototype.logName = function () {
  return this.name;
};

function Cat(this: any, lifesRemain: number, name: string) {
  Animal.call(this, name);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

const cat = new (Cat as any)(7, 'cit');

// pattern fabric

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Simple extends Person {
  cost: number;

  constructor(name: string) {
    super(name);
    this.cost = 50;
  }
}

class Permium extends Person {
  cost: number;

  constructor(name: string) {
    super(name);
    this.cost = 500;
  }
}

class Factory {
  static list = {
    simple: Simple,
    premium: Permium,
  };

  create(name: string, type: 'simple' | 'premium' = 'simple') {
    const Membership = Factory.list[type] || Factory.list.simple;

    return new Membership(name);
  }
}

const factory = new Factory();

factory.create('vadim', 'premium');

// pattern prototype

const car = {
  wheels: 4,
  init() {
    return this.wheels + this.owner;
  },
};

const carWithOwner = Object.create(car);

carWithOwner.owner = 'Vadim';

// pattern singleton

class DB {
  data: string;

  private static instance: any;

  private static exists: boolean = false;

  constructor(data: string) {
    if (DB.exists) {
      return DB.instance;
    }

    DB.exists = true;
    DB.instance = this;
    this.data = data;
  }
}

const mongoDB = new DB('mongo');

const sql = new DB('sql');

// structure patterns
// adapter pattern

class OldCalc {
  operations(value1: number, value2: number, operation: 'add' | 'sub') {
    switch (operation) {
      default:
      case 'add':
        return value1 + value2;
      case 'sub':
        return value1 - value2;
    }
  }
}

class NewCalc {
  add(value1: number, value2: number): number {
    return value1 + value2;
  }

  sub(value1: number, value2: number): number {
    return value1 - value2;
  }
}

class Adapter {
  calc: NewCalc;

  constructor() {
    this.calc = new NewCalc();
  }

  operations(value1: number, value2: number, operation: 'add' | 'sub') {
    switch (operation) {
      default:
      case 'add':
        return this.calc.add(value1, value2);
      case 'sub':
        return this.calc.sub(value1, value2);
    }
  }
}

// pattern decorator

class Server {
  private ip: string;

  port: number = 3000;

  constructor(ip: string) {
    this.ip = ip;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

function port(server: Server, port: number) {
  server.port = port;

  return server;
}

const server = port(new Server('localhost'), 3001);

// pattern facade

function $(selector: string) {
  return document.querySelector(selector);
}

$('#id');

// pattern flyweight

type CarConfig = {
  brand: string;
  model: string;
  price: number;
};

class Car {
  brand: string;
  model: string;
  price: number;

  constructor({ brand, model, price }: CarConfig) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  cars: CarConfig[] = [];

  getCar({ brand, model }: Omit<CarConfig, 'price'>): CarConfig | undefined {
    return this.cars.find((item) => item.brand === brand && item.model === model);
  }

  create({ price, ...other }: CarConfig) {
    const candidate = this.getCar(other);

    if (candidate) return candidate;

    const newCar = new Car({ ...other, price });

    this.cars.push(newCar);

    return newCar;
  }
}

// behave patterns

// pattern module

// const myModule = (function () {
//   const name = 'vadim';
//   const age = 18;

//   const getShortInfo = () => ({ name, age });

//   return { getShortInfo };
// })();
