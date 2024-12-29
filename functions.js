"use strict"
console.log(`functions running ok`);


const notFoundMessage = element => `Error, "${element}" not found.`;
const successMessage = (element = "", procedure) => `${element} ${procedure} successfully!`;
const failureMessage = (element = "", procedure) => `Error, ${element} could not be ${procedure}. Mission aborted...`;
const missingDataMessage = missingData => `Please, fill all the gaps, for example, "${missingData}" is incorrect or missing`;
const normalizeString = stringInput => stringInput.toUpperCase().trim();


const toFindAnimal = id => allAnimalsArr.find(animal => animal.id === id);
const toFindAdopter = id => adoptersArr.find(adopter => adopter.id === id);
const toFindShelter = id => adoptersArr.find(shelter => shelter.id === id);


const toFindIndexOfAnimal = id => allAnimalsArr.findIndex(animal => animal.id === id);
const toFindIndexOfAdopter = id => adoptersArr.findIndex(adopter => adopter.id === id);
const toFindIndexOfShelter = id => sheltersArr.findIndex(shelter => shelter.id === id);

const resultDiv = document.getElementById("resultDiv");
const resultDivAnimal = document.getElementById("resultDivAnimal");
const resultDivAdopter = document.getElementById("resultDivAdopter");
const resultDivShelter = document.getElementById("resultDivShelter");

function showMessageDiv(message) { resultDiv.innerHTML = message; }
function showMessageAnimal(message) { resultDivAnimal.innerHTML = message; }
function showMessageAdopter(message) { resultDivAdopter.innerHTML = message; }
function showMessageShelter(message) { resultDivShelter.innerHTML = message; }


function cleanDiv() { return resultDiv.innerHTML = ""; }