class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    work() {
        this.tasks.forEach(t => {
            console.log(`${this.name} ${t}`);
        });
    }
    collectSalary() {
        console.log(`{this.name} received ${this.getSalary()} this month.`);
    }
    getSalary() {
        return this.salary;
    }
}
class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push('is working on a simple task');
    }
}
class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push('is working on a complicated task');
        this.tasks.push('is taking time off work');
        this.tasks.push('is supervising junior workers');
    }
}
class Manager extends Employee {
    constructor(name, age, dividend) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.dividend = dividend;
        this.tasks.push('scheduled a meeting');
        this.tasks.push('is preparing a quarterly meeting');
        this.dividend = 0;
    }
    getSalary() {
        return this.salary + this.dividend;
    }
}
let junior = new Junior('Ivan', 20);
let senior = new Senior('Peter', 27);
let manager = new Manager('George', 35, 5);
console.log(junior);
console.log(senior);
console.log(manager);
//# sourceMappingURL=people.js.map