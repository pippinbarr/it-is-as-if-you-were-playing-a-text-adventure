/**
 * It is as if you were playing a text adventure
 * Pippin Barr
 * 
 * Eventually to be a way of telling a story by having the user
 * type in commands you would use in a text adventure.
 */

"use strict";

// Some dummy data to get started
const data = [
    {
        "input": "look",
        "points": 0
    },
    {
        "input": "jump",
        "points": 1
    }
];
// Which node are we in? Unsure this is the right way yet.
let current = undefined;
// For tracking points if we want to, seems funny
let points = 0;

// Elements from the page itself
const historyElement = document.getElementById("history");
const pointsElement = document.getElementById("points");
const inputElement = document.getElementById("input");

// We want to know when they type in our input box
inputElement.addEventListener("keydown", processInput);

// Let's go!
nextPrompt();

/**
 * Chooses a random node and displays it
 */
function nextPrompt() {
    current = randomElement(data);
    displayPrompt();
}

/**
 * Resets the input and adds the current instruction
 */
function displayPrompt() {
    inputElement.value = "";
    const instruction = `Type "${current.input}" and press ENTER.`;
    const p = document.createElement("p");
    p.textContent = instruction;
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
        if (inputElement.value.toLowerCase() === current.input) {
            // Yes? Add the points
            points += current.points;
            pointsElement.textContent = points;
            // And choose the next thing to type
            nextPrompt();
        }
        else {
            // If they typed the wrong thing, reiterate the current node
            displayPrompt();
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