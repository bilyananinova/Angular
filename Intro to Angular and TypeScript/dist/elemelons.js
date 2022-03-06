class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.elementIndex = this.weight * this.melonSort.length;
    }
}
class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    toString() {
        return `Element: Water
        Sort: ${this.melonSort}
        Element Index: ${this.elementIndex}`;
    }
}
class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    toString() {
        return `Element: Fire
        Sort: ${this.melonSort}
        Element Index: ${this.elementIndex}`;
    }
}
class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    toString() {
        return `Element: Earth
        Sort: ${this.melonSort}
        Element Index: ${this.elementIndex}`;
    }
}
class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    toString() {
        return `Element: Air
        Sort: ${this.melonSort}
        Element Index: ${this.elementIndex}`;
    }
}
let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon);
//# sourceMappingURL=elemelons.js.map