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

// pattern fabric

type StudentConfig = Config & { major: string };
type TeacherConfig = Config & { salary: number };

abstract class Person {
  name: string;

  age: number;

  constructor({ name, age }: Config) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  major: string;

  constructor({ major, ...common }: StudentConfig) {
    super(common);

    this.major = major;
  }
}

class Teacher extends Person {
  salary: number;
  constructor({ salary, ...common }: TeacherConfig) {
    super(common);
    this.salary = salary;
  }
}

class Guard extends Teacher {
  canSolveSudoku: boolean;

  constructor({ canThink, ...other }: TeacherConfig & { canThink: boolean }) {
    super(other);

    this.canSolveSudoku = canThink;
  }
}

// TODO error OpenClosed
class Fabric {
  static createPersonCard(type: 'student' | 'teacher') {
    if (type === 'student') {
      return new Student({ name: 'vadim', age: 18, major: '' });
    }

    return new Teacher({ name: 'alla', age: 67, salary: 100 });
  }
}

// pattern decorator
