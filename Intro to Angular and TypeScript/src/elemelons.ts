//                                                       4. The Elemelons

abstract class Melon {
    public elementIndex: number
    constructor(public weight: number, public melonSort: string) {
        this.elementIndex = this.weight * this.melonSort.length;
    }
}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)
    }

    toString(): string {
        return `Element: Water
        Sort: ${this.melonSort}
        Element Index: ${this.elementIndex}`;
    }
}

class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)
    }

    toString(): string {
        return `Element: Fire
        Sort: ${this.melonSort}
        Element Index: ${this.elementIndex}`;
    }
}

class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)
    }

    toString(): string {
        return `Element: Earth
        Sort: ${this.melonSort}
        Element Index: ${this.elementIndex}`;
    }
}

class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)
    }

    toString(): string {
        return `Element: Air
        Sort: ${this.melonSort}
        Element Index: ${this.elementIndex}`;
    }
}

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");

console.log(watermelon);
