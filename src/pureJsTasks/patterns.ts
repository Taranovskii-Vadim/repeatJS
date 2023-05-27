type Config = { name: string; age: number };

// pattern module

const myModule = (function () {
  const name = 'vadim';
  const age = 18;

  const getShortInfo = () => ({ name, age });

  return { getShortInfo };
})();

// pattern singleton

const person = {
  name: 'vadim',
  age: 18,
  major: '',
  address: {
    city: '',
    district: '',
    street: '',
    home: '',
    appartment: '',
  },
};

const singleton = (function () {
  function User(this: any, { name, age }: Config) {
    this.name = name;
    this.age = age;
  }

  const getInstance = (config: Config) => new (User as any)(config);

  return { getInstance };
})();

const user1 = singleton.getInstance({ name: 'vadim', age: 18 });

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

// pattern decorator
