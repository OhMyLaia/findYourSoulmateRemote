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

    getSize() { return this.#size }
    getBreed() { return this.#breed }
    getColor() { return this.#color }

    setSize(newSize) { this.#size = newSize }
    setBreed(newBreed) { this.#breed = newBreed }
    setColor(newColor) { this.#color = newColor }

    toString() {
            return `
            <pre>
            ${super.toString()}
            Size: ${this.getSize()}
            Breed: ${this.getBreed()}
            Color: ${this.getColor()}
            </pre>
            `
        
    }
}