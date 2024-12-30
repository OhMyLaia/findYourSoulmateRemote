"use strict"
console.log(`functions running ok`);

const normalizeString = stringInput => stringInput.toUpperCase().trim();

const toFindAnimal = id => allAnimalsArr.find(animal => animal.id === id);
const toFindAdopter = id => adoptersArr.find(adopter => adopter.id === id);
const toFindShelter = id => adoptersArr.find(shelter => shelter.id === id);
const toFindUserByUsername = username => usersArr.find( user => user.username === username);
const toFindUserByEmail = email => usersArr.find(user => user.email === email);
const toFindPassword = pass => usersArr.find(user => user.password === pass);

const toFindIndexOfAnimal = id => allAnimalsArr.findIndex(animal => animal.id === id);
const toFindIndexOfAdopter = id => adoptersArr.findIndex(adopter => adopter.id === id);
const toFindIndexOfShelter = id => sheltersArr.findIndex(shelter => shelter.id === id);
const toFindIndexOfUserByUsername = usernameFind => usersArr.findIndex( user.username === usernameFind);

const resultDiv = document.getElementById("resultDiv");
const resultDivAnimal = document.getElementById("resultDivAnimal");
const resultDivAdopter = document.getElementById("resultDivAdopter");
const resultDivShelter = document.getElementById("resultDivShelter");
const resultDivLogin = document.getElementById("resultDivLogin");
const resultDivReg = document.getElementById("resultDivReg");

const notFoundMessage = element => `Error, "${element}" not found.`;
const successMessage = (element = "", procedure) => `${element} ${procedure} has been successful!`;
const failureMessage = (element = "", procedure) => `Error, ${element} could not be ${procedure}. Mission aborted...`;
const missingDataMessage = missingData => `Please, fill all the gaps, for example, "${missingData}" is incorrect or missing`;
const invalidDataMessage = data => `Invalid data, please, submit a valid ${data}.`;
const alreadyExistsMessage = data => `This ${data} already exists in our database, please, try again.`;
const couldNotVerifyData = (data, explanation) => `Invalid ${data}. ${explanation}`
const errorMessage = `Ups! Something went wrong, please, try again...`;

function showMessageDiv(message) { resultDiv.innerHTML = message; }
function showMessageAnimal(message) { resultDivAnimal.innerHTML = message; }
function showMessageAdopter(message) { resultDivAdopter.innerHTML = message; }
function showMessageShelter(message) { resultDivShelter.innerHTML = message; }
function showMessageLogin(message) { resultDivLogin.innerHTML = message; }
function showMessageReg(message) { resultDivReg.innerHTML = message; }


function cleanDiv() { return resultDiv.innerHTML = ""; }