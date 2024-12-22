"use strict"
console.log(`Script running ok`);


const allAnimalsArr = [];
const catsArr = [];
const dogsArr = [];

const adoptersArr = [];

const sheltersArr = [];


let newHardcodedCatto = new Cat (12345, "Esme-chan", 6, "female", "clingy", "family?...whatever", true, "S", "siamese", "white/brown");
let newHardcodedDoggie = new Dog (67890, "Turron", 31, "male", "whatever", "brothers? yes!", true, "L", "lupus vulgaris", "brown");
let newHardcodedAdopter = new Adopter (45673, "Laia", "Martinez", "familyValue");
let newHardcodedShelter = new Shelter (11276, "RainbowCity", 902);


allAnimalsArr.push(newHardcodedCatto, newHardcodedDoggie);
catsArr.push(newHardcodedCatto);
dogsArr.push(newHardcodedDoggie);
adoptersArr.push(newHardcodedAdopter);
sheltersArr.push(newHardcodedShelter);

// resultDiv.innerHTML = newHardcodedDoggie.toString();
// resultDiv.innerHTML = newHardcodedCatto.toString();

let resultDiv = document.getElementById("resultDivFoundAnimal");

const normalizeString = (stringInput) => stringInput.toUpperCase().trim();
const notFoundMessage = (notFoundElement) => `"${notFoundElement}" is not in our data base... `;


function newAnimalInputs() {
    // let animalType = document.getElementById("animalType").value;
    // let animalId = document.getElementById("animalId").value;
    // let animalName = document.getElementById("animalName").value;
    // let animalAge = document.getElementById("animalAge").value;
    // let animalSex = document.getElementById("animalSex").value;
    // let animalPersonality = document.getElementById("animalPersonality").value; // NO, porque sera un array, pero bueno
    // let animalFamilyType = document.getElementById("selectAnimalFamilyType").value; // me da boolean lol
    // let animalSize = document.getElementById("animalSize").value;
    // let animalBreed = document.getElementById("animalBreed").value;
    // let animalColor = document.getElementById("animalColor").value;


    let animalType = "cat"
    let animalId = "12345"
    let animalName = "pepe"
    let animalAge = "35"
    let animalSex = "male"
    let animalPersonality = "whatever"
    let animalFamilyType = "brothers"
    let animalSize = "M"
    let animalBreed = "aria"
    let animalColor = "white"
    


    if (animalType === null || animalType === undefined) {
        console.log(`error`)
        return true;

    } else if (isNaN(animalId) || animalId.length !== 5 || animalId === null || animalId === undefined) {
        console.log(`error`)
        return true;

    } else if (animalName === null || animalName === undefined) {
        console.log(`error`)
        return true;

    } else if (animalAge === null || animalAge === undefined || isNaN(animalAge)) {
        console.log(`error`)
        return true;

    } else if (animalSex === null || animalSex === undefined) {
        console.log(`error`)
        return true;

    } else if (animalPersonality === null || animalPersonality === undefined) {
        console.log(`error`)
        return true;

    } else if (animalSize === null || animalSize === undefined) {
        console.log(`error`)
        return true;

    } else if ( isNaN(animalBreed) === false || animalBreed === null || animalBreed === undefined) {
        console.log(`error`)
        return true;

    } else if ( isNaN(animalColor) === false || animalColor === null || animalColor === undefined) {
        console.log(`error`)
        return true;

    } else {
        return {
            animalType, 
            animalId,
            animalName,
            animalAge,
            animalSex,
            animalPersonality,
            animalFamilyType,
            animalSize,
            animalBreed,
            animalColor
        }
    }
}

// constructor(id, name, age, sex, personality, familyType, fosterCare, size, breed, color) {
//     // 
function createInstancePet() {

    let newInstance = new Cat (12345, "dafne", 4, "female", "clingy", "only child", false, "s", "european", "black/white")

    resultDiv.innerHTML = `done`
}


function createNewAnimal () {

    let errorMessage = `Invalid or incorrect data.`;
    let resultDiv = document.getElementById("resultDivFoundAnimal");

    let {
        animalType,
        animalId,
        animalName,
        animalAge,
        animalSex,
        animalPersonality,
        animalFamilyType,
        animalSize,
        animalBreed,
        animalColor
    } = newAnimalInputs();

    let newCatInstance;
    let newDogInstance;

    // a partir de este punto tengo que estar segura de que tengo un objeto animal VALIDO

    if (newAnimalInputs() === true) {
        alert(errorMessage);
        return alert(`Animal could not be created, missing data, mission aborted`);
    }

    if (animalType === "cat") {
        newCatInstance = new Cat (animalId, animalName, animalAge, animalSex,
            animalPersonality, animalFamilyType, false, animalSize, animalBreed, animalColor);
        
        catsArr.push(newCatInstance);
        allAnimalsArr.push(newCatInstance);
        resultDiv.innerHTML = newCatInstance.toString()

        } else if (animalType === "dog") {
            newDogInstance = new Dog (animalId, animalName, animalAge, animalSex,
                animalPersonality, animalFamilyType, false, animalSize, animalBreed, animalColor);
            
            dogsArr.push(newDogInstance);
            allAnimalsArr.push(newDogInstance);
            resultDiv.innerHTML = newDogInstance.toString();
        }

    console.table(allAnimalsArr);
    // alert(`${newCatInstance.getName()} submitted successfully!`);

}


function findAnimal(animalToBeFound = "") { //retorna (objeto encontrado + indice de ObjEnc) o false

    let userAnimalName = document.getElementById("animalName").value;
    animalToBeFound = normalizeString(userAnimalName);
    console.log(`animaltobefound -> ${animalToBeFound}`)
    // let normalizedAnimalName = userAnimalName.trim().toUpperCase();
    let foundAnimal;
    let actualAnimal;

    let indexOfFoundAnimal = 0;

    foundAnimal = allAnimalsArr.find(animal => animal.getName().toUpperCase() === animalToBeFound);
    indexOfFoundAnimal = allAnimalsArr.findIndex(animal => animal.getName().toUpperCase() === animalToBeFound);
    console.log(`foundAnimal -> ${foundAnimal}`)
    console.log(`indexOfFoundAnimal -> ${indexOfFoundAnimal}`)



    // for (let i = 0; i < allAnimalsArr.length; i++) {
    //     actualAnimal = allAnimalsArr[i];
    //     console.log(`animales -> ${actualAnimal}`);

    //     if (animalToBeFound === actualAnimal.getName().toUpperCase()) {
    //         console.log(actualAnimal.getName());
    //         foundAnimal = actualAnimal;
    //         indexOfFoundAnimal = i;
    //         console.log(`index foundanimal -> ${indexOfFoundAnimal}`)
    //         break;
    //     }
    // }
    // console.log(`animal encontrado despues del for -> ${foundAnimal}`)
        if (foundAnimal !== undefined && foundAnimal !== null && indexOfFoundAnimal !== -1) {
            // resultDiv.innerHTML = foundAnimal.toString();
            return {foundAnimal, indexOfFoundAnimal};
        } else {
            resultDiv.innerHTML = notFoundMessage(userAnimalName);
            return {undefined, indexOfFoundAnimal};
        }
}


function deleteAnimal() {

    let animalNameInput = document.getElementById("animalName").value;
    let animalToBeFound = normalizeString(animalNameInput);
    let {foundAnimal, indexOfFoundAnimal} = findAnimal(animalToBeFound);
    let confirmDeleting = confirm(`Do you want to delete ${animalNameInput}?`);

    if (confirmDeleting) {
        allAnimalsArr.splice(indexOfFoundAnimal, 1);
        resultDiv.innerHTML = `${animalNameInput} deleted from our database.`

    } else {
        resultDiv.innerHTML = `Cancelled.`
    }
}


function showDataAnimal() {
    let animalNameInput = document.getElementById("animalName").value;
    let animalToBeFound = normalizeString(animalNameInput);
    let {foundAnimal, indexOfFoundAnimal} = findAnimal(animalToBeFound);

    console.log(`foundanimal -> ${foundAnimal}`);

    if (foundAnimal !== undefined && foundAnimal !== null && indexOfFoundAnimal !== -1) {
        console.log(`dentro del if foundanimal -> ${foundAnimal}`);
        resultDiv.innerHTML = foundAnimal.toString();
    } else {
        resultDiv.innerHTML = notFoundMessage(animalNameInput);
    }
}