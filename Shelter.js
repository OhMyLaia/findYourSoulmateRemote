"use strict"
console.log(`Shelter class running ok`);


class Shelter {
    #id 
    #name
    #cityCode
    #petsArray

    static messageNotFound = `No shelters found`;
    static idGenerator = 0;
    

    constructor (name, cityCode) {
        this.#id = ++Shelter.idGenerator;
        this.#name = name;
        this.#cityCode = parseInt(cityCode);
        this.#petsArray = [];
    }

    get id() { return this.#id }
    get name() { return this.#name }
    get cityCode() { return this.#cityCode }

    set id(newId) { this.#id = newId }
    set name(newName) { this.#name = newName }

    addAnimalToShelter(newAnimal) {
        this.#petsArray.push(newAnimal);
    }

    toString() {
        // let showPetsArrayData = this._petsArray.map(pet => pet.toString().join("<br>"));
        let showPetsArrayData = "";

        for (pet of this.#petsArray) {
            showPetsArrayData = pet.toString().join("<br>");
        }

        return` <pre>
        Id: ${this.id}
        Name: ${this.name}
        CityCode: ${this.#cityCode}
        
        Animals in the shelter:
        ${this.#petsArray.length === 0 ? Shelter.messageNotFound : this.#petsArray.join("<br>")}
        </pre>
        `
    }
}