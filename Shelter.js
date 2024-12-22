"use strict"
console.log(`Shelter class running ok`);


class Shelter {
    #id 
    #name
    #cityCode
    #petsArray
    

    constructor (id, name, cityCode) {
        this.#id = parseInt(id);
        this.#name = name;
        this.#cityCode = parseInt(cityCode);
        this.#petsArray = [];
    }

    getId() { return this.#id }
    getName() { return this.#name }
    getCityCode() { return this.#cityCode }

    setId(newId) { this.#id = newId }
    setName(newName) { this.#name = newName }

    addAnimalToShelter(newAnimal) {
        this.#petsArray.push(newAnimal);
    }

    toString() {
        // let showPetsArrayData = this._petsArray.map(pet => pet.toString().join("<br>"));
        let showPetsArrayData = "";

        for (pet of this.#petsArray) {
            showPetsArrayData = pet.toString().join("<br>");
        }

        return`
        Id: ${this.getId()}
        Name: ${this.getName()}
        CityCode: ${this.getCityCode()}
        Animals in the shelter: ${showPetsArrayData}
        `
    }
}