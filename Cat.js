"use strict"
console.log(`Cat class running ok`);



class Cat extends Animal {
    #size
    #breed
    #color

    constructor(id, name, age, sex, personality, familyType, fosterCare, size, breed, color) {
        super (id, name, age, sex, personality, familyType, fosterCare)
        this.#size = size;
        this.#breed = breed;
        this.#color = color;
    }


    getSize() { return this.#size }

    getBreed() { return this.#breed }

    getColor() { return this.#color }




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
