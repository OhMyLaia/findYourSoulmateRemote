"use strict"
console.log(`Dog class running ok`);




class Dog extends Animal {
    #size
    #breed
    #color

    constructor (id, name, age, sex, personality, familyType, fosterCare, size, breed, color) {
        super (id, name, age, sex, personality, familyType, fosterCare )
        this.#size = size;
        this.#breed = breed;
        this.#color = color;
    }

    get size() { return this.#size }
    get breed() { return this.#breed }
    get color() { return this.#color }

    set size(newSize) { this.#size = newSize }
    set breed(newBreed) { this.#breed = newBreed }
    set color(newColor) { this.#color = newColor }

    toString() {
            return `
            <pre>
            ${super.toString()}
            Size: ${this.size}
            Breed: ${this.breed}
            Color: ${this.color}
            </pre>
            `
        
    }
}