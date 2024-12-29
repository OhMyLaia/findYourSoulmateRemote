"use strict"
console.log(`Adopter class running ok`);

class Adopter {
    #id
    #name
    #lastName
    #familyType
    #personalityArray
    #adoptedPetsArray

    static messageNotFound = `No pets found`;


    constructor (id, name, lastName, familyType) {
        this.#id = id;
        this.#name = name;
        this.#lastName = lastName;
        this.#familyType = familyType;
        this.#personalityArray = [];
        this.#adoptedPetsArray = [];
    }

    get id() { return this.#id }
    get name() { return this.#name }
    get lastName() { return this.#lastName }
    get familyType() { return this.#familyType }


    set name(newName) { this.#name = newName }
    set lastName(newLastName) { this.#lastName = newLastName }
    set familyType(newFamilyType) { this.#familyType = newFamilyType }

    addToPersonalityArray(newQuality) { this.#personalityArray.push(newQuality) }
    addToAdoptedPetsArray(newAnimal) { this.#adoptedPetsArray.push(newAnimal) }


    toString() {
        return `
        <pre>
        Id: ${this.id}
        Name: ${this.name}
        LastName: ${this.lastName}
        Purrfect family type: ${this.familyType}
        Personality type: ${this.#adoptedPetsArray.join("<br>")}

        Adopted pets: ${this.#adoptedPetsArray.length === 0 ? Adopter.messageNotFound : this.#adoptedPetsArray.join("<br>")}
        </pre>
        `
    }




}

