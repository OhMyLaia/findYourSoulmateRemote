"use strict"
console.log(`Script running ok`);

const allAnimalsArr = [];
const catsArr = [];
const dogsArr = [];
const adoptersArr = [];
const sheltersArr = [];


// PET CRUD //

function newAnimalInputs() {
    let animalType = document.getElementById("animalType").value;
    let animalName = document.getElementById("animalName").value;
    let animalAge = document.getElementById("animalAge").value;
    let animalSex = document.getElementById("animalSex").value;
    let animalPersonality = document.getElementById("animalPersonality").value; // NO, porque sera un array, pero bueno
    let animalFamilyType = document.getElementById("selectAnimalFamilyType").value; // me da boolean lol
    let animalSize = document.getElementById("animalSize").value;
    let animalBreed = document.getElementById("animalBreed").value;
    let animalColor = document.getElementById("animalColor").value;


    // let animalType = "cat"
    // let animalId = "12345"
    // let animalName = "pepe"
    // let animalAge = "35"
    // let animalSex = "male"
    // let animalPersonality = "whatever"
    // let animalFamilyType = "brothers"
    // let animalSize = "M"
    // let animalBreed = "aria"
    // let animalColor = "white" if (!animalType) { console.log(`error`) return true }} 
    
    if (!animalName) { showMessageAnimal(missingDataMessage("name")); return false }
    
    if (!animalAge || isNaN(animalAge)) { showMessageAnimal(missingDataMessage("age")); return false }
    
    if (!animalSex) { showMessageAnimal(missingDataMessage("sex")); return false }
    
    if (!animalPersonality) { showMessageAnimal(missingDataMessage("personality")); return false }
    
    if (!animalSize) { showMessageAnimal(missingDataMessage("size")); return false }
    
    if (!animalBreed || isNaN(animalBreed) === false) { showMessageAnimal(missingDataMessage("breed")); return false }
    
    if (!animalColor || isNaN(animalColor) === false) { showMessageAnimal(missingDataMessage("color")); return false }

    return {
        animalType, 
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

// constructor(id, name, age, sex, personality, familyType, fosterCare, size, breed, color) {
//     // 
function createInstances() {

    let newInstance = new Cat ("dafne", 4, "female", "clingy", "only child", false, "s", "european", "black/white")

    let newHardcodedCatto = new Cat ("Esme-chan", 6, "female", "clingy", "family?...whatever", true, "S", "siamese", "white/brown");
    let newHardcodedDoggie = new Dog ("Turron", 31, "male", "whatever", "brothers? yes!", true, "L", "lupus vulgaris", "brown");
    let newHardcodedAdopter = new Adopter (12345, "Laia", "Martinez", "familyValue");
    let newHardcodedShelter = new Shelter ("RainbowCity", 902);


    allAnimalsArr.push(newHardcodedCatto, newHardcodedDoggie);
    catsArr.push(newHardcodedCatto);
    dogsArr.push(newHardcodedDoggie);
    adoptersArr.push(newHardcodedAdopter);
    sheltersArr.push(newHardcodedShelter);

    alert(`consider it done baby`);
}


function createNewAnimal () {

    cleanDiv()

    let {
        animalType,
        animalName,
        animalAge,
        animalSex,
        animalPersonality,
        animalFamilyType,
        animalSize,
        animalBreed,
        animalColor
    } = newAnimalInputs();


    // a partir de este punto tengo que estar segura de que tengo un objeto animal VALIDO

    if (newAnimalInputs() === false) { return showMessageAnimal(failureMessage("animal", "created" + " Maybe some data is missing...")); }

    if (animalType === "cat") {
        const newCatInstance = new Cat (animalName, animalAge, animalSex,
            animalPersonality, animalFamilyType, false, animalSize, animalBreed, animalColor);
        
        catsArr.push(newCatInstance);
        allAnimalsArr.push(newCatInstance);
        showMessageAnimal(newCatInstance.toString());

    } else if (animalType === "dog") {
        const newDogInstance = new Dog (animalName, animalAge, animalSex,
            animalPersonality, animalFamilyType, false, animalSize, animalBreed, animalColor);
        
        dogsArr.push(newDogInstance);
        allAnimalsArr.push(newDogInstance);
        showMessageAnimal(newDogInstance.toString());

    } else {
        showMessageAnimal(failureMessage("pet", "created"));
    }

    console.table(allAnimalsArr);
}


function deleteAnimal() {

    cleanDiv()

    let animalId = document.getElementById("animalId").value;
    let foundAnimalIndex = toFindIndexOfAnimal(animalId);

    if (foundAnimal) {
        let confirmDeleting = confirm(`Do you want to delete ${animalNameInput}?`);

        if (confirmDeleting) {
            allAnimalsArr.splice(foundAnimalIndex, 1);
            showMessageAnimal(successMessage(animalId, "deleted"));
    
        } else {
            showMessageAnimal(`Cancelled.`)
        }

    } else {
        showMessageAnimal(notFoundMessage(animalId));
    }


}


function showDataAnimal() {

    cleanDiv()

    let animalId = document.getElementById("animalId").value;
    let foundAnimal = toFindAnimal(animalId);

    console.log(`foundanimal is -> ${foundAnimal}`);

    if (foundAnimal) {
        console.log(`dentro del if, foundanimal -> ${foundAnimal}`);
        showMessageAnimal(foundAnimal.toString());
    } else {
        showMessageAnimal(notFoundMessage(animalNameInput));
    }
}



// ADOPTER CRUD //


function newAdopterInputs() {

    cleanDiv()

    let adopterId = document.getElementById("adopterId").value;
    let adopterName = document.getElementById("adopterName").value;
    let adopterLastName = document.getElementById("adopterLastName").value;
    let adopterFamilyType = document.getElementById("selectAdopterFamilyType").value;

    if (!adopterId) { showMessageAdopter(missingDataMessage("id")); return false }
    
    if (!adopterName) { showMessageAdopter(missingDataMessage("name")); return false }
    
    if (!adopterLastName) { showMessageAdopter(missingDataMessage("last name")); return false }
    
    if (!adopterFamilyType) { showMessageAdopter(missingDataMessage("family type")); return false }
    
    
    return {
        adopterId, 
        adopterName,
        adopterLastName,
        adopterFamilyType
    }
}


function createNewAdopter() {

    cleanDiv()

    let {
        adopterId,
        adopterName,
        adopterLastName,
        adopterFamilyType
    } = newAdopterInputs();

    // a partir de este punto tengo que estar segura de que tengo un objeto adopter VALIDO

    if (newAdopterInputs() === false) { return showMessageAdopter(failureMessage("adopter", "created")); }

    const newAdopterInstance = new Adopter (adopterId, adopterName, adopterLastName, adopterFamilyType);
    
    adoptersArr.push(newAdopterInstance);
    showMessageAdopter(newAdopterInstance.toString())
    console.table(adoptersArr);
}


function deleteAdopter() {

    cleanDiv()

    let adopterId = document.getElementById("adopterId").value;
    let foundAdopter = toFindIndexOfAdopter(adopterId);

    if (foundAdopter) {
        let confirmDeleting = confirm(`Do you want to delete ${adopterId}?`);

        if (confirmDeleting) {
            adoptersArr.splice(foundAdopter, 1);
            showMessageAdopter(successMessage(adopterId, "deleted"));

        } else {
            showMessageAdopter(`Cancelled.`)
        }

    } else {
        showMessageAdopter(notFoundMessage(adopterId));
    }

}


function showDataAdopter() {

    cleanDiv()

    let adopterId = document.getElementById("adopterId").value;
    let foundAdopter = toFindAdopter(adopterId);

    console.log(`foundAdopter is -> ${foundAdopter}`);

    if (foundAdopter) {
        console.log(`dentro del if foundAdopter -> ${foundAdopter}`);
        showMessageAdopter(foundAdopter.toString());
    } else {
        showMessageAdopter(notFoundMessage(adopterId));
    }
}