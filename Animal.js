"use strict"
console.log(`Animal class running ok`);

// const sex = Object.freeze({
//     female: "female",
//     male: "male",
// })


class Animal {
    #id
    #name
    #age
    #sex
    #personality
    #familyType
    #fosterCare


    constructor (id, name, age, sex, personality, familyType, fosterCare) {
        this.#id = parseInt(id);
        this.#name = name;
        this.#age = parseInt(age);
        this.#sex = sex;
        this.#personality = personality;
        this.#familyType = familyType;
        this.#fosterCare = fosterCare;
    }

    getId() { return this.#id }
    getName() { return this.#name }
    getAge() { return this.#age }
    getSex() { return this.#sex }
    getPersonality() { return this.#personality }
    getFamilyType() { return this.#familyType }
    getFosterCare() { return this.#fosterCare }


    setId(newId) {

        let pass = prompt(`Magic password required: `);
        if (pass = 727284) {
            return this.#id = newId;
        } else {
            return alert(`Incorrect password, who are you? ('e.e)`);
        }
    }


    setName(newName) { return this.#name = newName }

    setFosterCare() { return this.#fosterCare = true }

    toString() {
        return `
        <pre>
        Id: ${this.getId()}
        Name: ${this.getName()}
        Age: ${this.getAge()}
        Sex: ${this.getSex()}
        Personality type: ${this.getPersonality()}
        Purrfect family type: ${this.getFamilyType()}
        Currently in foster care: ${this.getFosterCare()}
        </pre>
        `
    }
}