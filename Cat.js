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


    get size() { return this.#size }

    get breed() { return this.#breed }

    get color() { return this.#color }




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
