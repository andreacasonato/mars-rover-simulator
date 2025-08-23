// Rover object: This object is the brain of our rover. 
// It holds all the key information about its current state.
const rover = {
    direction: "N", // The direction the rover is facing: "N"orth, "S"outh, "E"ast, or "W"est.
    x: 0,           // The rover's current X-coordinate on the grid (columns).
    y: 0,           // The rover's current Y-coordinate on the grid (rows).
    travelLog: []   // An array to store the rover's path, which we'll update with each move.
};

// Obstacles Set: A Set is a special JavaScript data structure that stores unique values.
// We use a Set here because we only want one obstacle at a specific coordinate.
const obstacles = new Set();

// Direction mappings for display: This object helps us translate our simple direction codes 
// ("N", "S", etc.) into more descriptive names and visual emojis for the user interface.
const directionMap = {
    "N": { name: "North", emoji: "⬆️" },
    "S": { name: "South", emoji: "⬇️" },
    "E": { name: "East", emoji: "➡️" },
    "W": { name: "West", emoji: "⬅️" }
};

// DOM elements: These variables will hold references to the HTML elements
// Placing these references at the start in order to make our code cleaner and more efficient.
let positionElement, directionElement, missionLogElement, travelLogElement, marsGrid, obstacleCountElement;