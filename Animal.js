"use strict"
console.log(`Animal class running ok`);

const sex = Object.freeze({
    female: "female",
    male: "male",
})


class Animal {
    #id
    #name
    #age
    #sex
    #personality
    #familyType
    #fosterCare

    static idGenerator = 0;


    constructor (name, age, sex, personality, familyType, fosterCare) {
        this.#id = ++Animal.idGenerator;
        this.#name = name;
        this.#age = parseInt(age);
        this.#sex = sex;
        this.#personality = personality;
        this.#familyType = familyType;
        this.#fosterCare = fosterCare;
    }

    get id() { return this.#id }
    get name() { return this.#name }
    get age() { return this.#age }
    get sex() { return this.#sex }
    get personality() { return this.#personality }
    get familyType() { return this.#familyType }
    get fosterCare() { return this.#fosterCare }


    set id(newId) {

        let pass = prompt(`Magic password required: `);
        if (pass = 727284) {
            return this.#id = newId;
        } else {
            return alert(`Incorrect password, who are you? ('e.e)`);
        }
    }


    set name(newName) { return this.#name = newName }

    setFosterCare() { return this.#fosterCare = !this.#fosterCare }

    toString() {
        return `
        <pre>
        Id: ${this.id}
        Name: ${this.name}
        Age: ${this.age}
        Sex: ${this.sex}
        Personality type: ${this.personality}
        Purrfect family type: ${this.familyType}
        Currently in foster care: ${this.fosterCare}
        </pre>
        `
    }
}