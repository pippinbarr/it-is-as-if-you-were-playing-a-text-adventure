/**
 * It is as if you were playing a text adventure
 * Pippin Barr
 * 
 * Eventually to be a way of telling a story by having the user
 * type in commands you would use in a text adventure.
 */

"use strict";

// Our meta data
let meta = undefined;
// Our story data
let story = undefined;
// Where we are in the story
let index = -1;
// For tracking points, seems funny
let points = 0;

// Elements from the page itself
const historyElement = document.getElementById("history");
const pointsElement = document.getElementById("points");
const preactionElement = document.getElementById("preaction");
const inputElement = document.getElementById("input");
const reactionElement = document.getElementById("reaction");
const locationElement = document.getElementById("location");

// Load the data
fetch("data/en.json")
    .then(response => response.json())
    .then(json => {
        // Split it out into the meta and story stuff
        meta = json.meta;
        story = json.story;
        start();
    });

/**
 * Gets things going
 */
function start() {
    // Set up the meta data
    document.getElementById("title").textContent = meta["title"];
    document.getElementById("author").textContent = meta["author"];
    document.getElementById("release-nonsense").textContent = meta["release-nonsense"];

    // We want to know when they type in our input box
    inputElement.addEventListener("keydown", processInput);

    // Set the starting location
    locationElement.textContent = meta.startLocation;

    // Let's go!
    nextInput();
}

/**
 * Chooses what the player should do next
 */
function nextInput() {
    // Advance to the next beat
    index++;

    // Check if we've finished
    if (index === story.length) {
        // Some kind of ending 
        addP("<strong>The End</strong>");
    }
    else {
        displayState();
    }
}

/**
 * Resets the input and adds the current instruction
 */
function displayState() {
    // Reset the input box
    inputElement.value = "";

    // Move if it was a move
    locationElement.textContent = story[index].location;

    addP(story[index].preaction, "preaction");

    // Prompt the command
    const command = `Type "${story[index].command}" and press ENTER.`;
    addP(command);
}

/**
 * Adds the specified HTML in a <p> tag to the history element
 */
function addP(html, style) {
    // Prompt the command
    const p = document.createElement("p");
    p.innerHTML = html;
    historyElement.appendChild(p);

    if (style) {
        p.classList.add(style);
    }
}

/**
 * Handles user input, mostly to check if they typed the correct text
 * and pressed enter.
 */
function processInput(event) {
    // Did they just hit enter?
    if (event.keyCode === 13) {
        // Check if they typed the right thing...
        if (inputElement.value.toLowerCase() === story[index].command) {
            // Yes? Add the points
            points += story[index].points || 0;
            pointsElement.textContent = points;

            // Clear the input
            clearInput();

            setTimeout(() => {
                // Display the reaction
                addP(story[index].reaction, "reaction");

                setTimeout(() => {
                    // And choose the next thing to type
                    nextInput();
                }, 1000);
            }, 1000);

        }
        else {
            // If they typed the wrong thing, reiterate the current node
            displayState();
        }
    }
}

function clearInput() {
    input.value = "";
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