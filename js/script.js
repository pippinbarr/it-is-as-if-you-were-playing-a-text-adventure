/**
 * It is as if you were playing a text adventure
 * Pippin Barr
 * 
 * Eventually to be a way of telling a story by having the user
 * type in commands you would use in a text adventure.
 */

"use strict";

// Some dummy data to get started
let data = undefined;
// Which node are we in? Unsure this is the right way yet.
let current = undefined;
// For tracking points if we want to, seems funny
let points = 0;

// Elements from the page itself
const historyElement = document.getElementById("history");
const pointsElement = document.getElementById("points");
const inputElement = document.getElementById("input");
const locationElement = document.getElementById("location");

// The player
const player = {
    location: undefined,
    inventory: []
};

fetch("data/en.json")
    .then(response => response.json())
    .then(json => {
        data = json;
        start();
    });

function start() {
    document.getElementById("title").textContent = data["title"];
    document.getElementById("author").textContent = data["author"];
    document.getElementById("release-nonsense").textContent = data["release-nonsense"];

    // We want to know when they type in our input box
    inputElement.addEventListener("keydown", processInput);

    // Put the player in the start location
    player.location = data["start-location"];
    locationElement.textContent = data.rooms[player.location].name;

    // Let's go!
    nextInput();
}

/**
 * Chooses what the player should do next
 */
function nextInput() {
    if (Math.random() < 0.2) {
        // Choose an exit
        current = randomElement(data.rooms[player.location].exits);
    }
    else {
        // Choose an action
        current = randomElement(data.rooms[player.location].actions);
    }

    displayState();
}

/**
 * Resets the input and adds the current instruction
 */
function displayState() {
    inputElement.value = "";
    const command = `Type "${current.command}" and press ENTER.`;
    const p = document.createElement("p");
    p.textContent = command;
    historyElement.appendChild(p);
}

/**
 * Handles user input, mostly to check if they typed the correct text
 * and pressed enter.
 */
function processInput(event) {
    // Did they just hit enter?
    if (event.keyCode === 13) {
        // Check if they typed the right thing...
        if (inputElement.value.toLowerCase() === current.command) {
            // Yes? Add the points
            points += current.points || 0;
            pointsElement.textContent = points;
            // Move if it was a move
            player.location = current.to || player.location;
            locationElement.textContent = data.rooms[player.location].name;
            // And choose the next thing to type
            nextInput();
        }
        else {
            // If they typed the wrong thing, reiterate the current node
            displayState();
        }
    }
}

/**
 * A helper function to return random array elements
 * @param {array} array 
 * @returns {element} a random element in the array
 * @example 
 * const a = [1, 2, 3];
 * const b = randomElement(a); // 1 or 2 or 3
 */
function randomElement(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}