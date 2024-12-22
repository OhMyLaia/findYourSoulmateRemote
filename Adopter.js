"use strict"
console.log(`Adopter class running ok`);

class Adopter {
    #id
    #name
    #lastName
    #familyType
    #personalityArray
    #adoptedPetsArray


    


    constructor (id, name, lastName, familyType) {
        this.#id = id;
        this.#name = name;
        this.#lastName = lastName;
        this.#familyType = familyType;
        this.#personalityArray = [];
        this.#adoptedPetsArray = [];
    }

    getId() { return this.#id }
    getName() { return this.#name }
    getLastName() { return this.#lastName }
    getFamilyType() { return this.#familyType }


    setName(newName) { this.#name = newName }
    setLastName(newLastName) { this.#lastName = newLastName }
    setFamilyType(newFamilyType) { this.#familyType = newFamilyType }


    //duda!! si solo pongo un parametro, solo me dejara introducir uno por uno?
    addToPersonalityArray(newQuality) { this.#personalityArray.push(newQuality) }
    addToAdoptedPetsArray(newAnimal) { this.#adoptedPetsArray.push(newAnimal) }


    toString() {

        let showPersonalityArrayData = "";
        let showAdoptedPetsArrayData = "";


        for (personalityTreat of this.#personalityArray) {
            showPersonalityArrayData = personalityTreat.toString().join("<br>");
        }


        for (pet of this.#adoptedPetsArray) {
            showAdoptedPetsArrayData = pet.toString().join("<br>");
        }

        return `
        Id: ${this.getId()}
        Name: ${this.getName()}
        LastName: ${this.getLastName()}
        Purrfect family type: ${this.getFamilyType()}
        Personality type: ${showPersonalityArrayData}
        Adopted pets: ${showAdoptedPetsArrayData}
        `
    }




}

