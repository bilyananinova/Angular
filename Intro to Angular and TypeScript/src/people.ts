//                                                       3. People

abstract class Employee {
    public salary: number;
    public tasks: string[];

    constructor(public name: string, public age: number) {
        this.salary = 0;
        this.tasks = [];
    }

    work(): void {
        this.tasks.forEach(t => {
            console.log(`${this.name} ${t}`);
        })
    }

    collectSalary(): void {
        console.log(`{this.name} received ${this.getSalary()} this month.`);

    }

    getSalary(): number {
        return this.salary
    }
}

class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push('is working on a simple task')
    }
}

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push('is working on a complicated task');
        this.tasks.push('is taking time off work');
        this.tasks.push('is supervising junior workers');
    }
}

class Manager extends Employee {
    constructor(public name: string, public age: number, public dividend: number) {
        super(name, age);
        this.tasks.push('scheduled a meeting');
        this.tasks.push('is preparing a quarterly meeting');
        this.dividend = 0;
    }

    getSalary(): number {
        return this.salary + this.dividend
    }
}


let junior = new Junior('Ivan', 20);
let senior = new Senior('Peter', 27);
let manager = new Manager('George', 35, 5);

console.log(junior);
console.log(senior);
console.log(manager);