class Box {
    constructor() {
        this.elements = [];
    }
    add(element) {
        this.elements.unshift(element);
    }
    remove() {
        this.elements.shift();
    }
    get count() {
        return this.elements.length;
    }
}
let boxA = new Box();
boxA.add(1);
boxA.add(2);
boxA.add(3);
console.log(boxA.count);
let boxB = new Box();
boxB.add("Pesho");
boxB.add("Gosho");
console.log(boxB.count);
boxB.remove();
console.log(boxB.count);
//# sourceMappingURL=boxes.js.map