//                                                        5. Boxes

class Box<T> {
    private elements: T[] = [];

    add(element: T): void {
        this.elements.unshift(element)
    }

    remove(): void {
        this.elements.shift()

    }

    get count() {
        return this.elements.length
    }
}

let boxA = new Box<Number>();
boxA.add(1);
boxA.add(2);
boxA.add(3);
console.log(boxA.count);

let boxB = new Box<String>();
boxB.add("Pesho");
boxB.add("Gosho");
console.log(boxB.count);
boxB.remove();
console.log(boxB.count);

