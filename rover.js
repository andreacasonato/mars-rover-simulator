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

// Initialize when DOM is loaded.
// We wait for the 'DOMContentLoaded' event to fire, which ensures that all
// of our HTML elements are available and ready to be manipulated by JavaScript.
document.addEventListener('DOMContentLoaded', function () {
    // Get references to all the necessary HTML elements using their unique IDs.
    // The getElementById() method is a fast and simple way to do this.
    positionElement = document.getElementById('position');
    directionElement = document.getElementById('direction');
    missionLogElement = document.getElementById('missionLog');
    travelLogElement = document.getElementById('travelLog');
    marsGrid = document.getElementById('marsGrid');
    obstacleCountElement = document.getElementById('obstacleCount');

    // After getting the elements, we'll initialize the Mars grid.
    initializeMarsGrid();
});

// Function to initialize and draw the Mars grid.
function initializeMarsGrid() {
    // Clear any existing content in the grid container.
    // This is important for when we might need to "reset" the grid later.
    marsGrid.innerHTML = '';

    // Loop through each row (y-coordinate)
    for (let y = 0; y < 10; y++) {
        // Loop through each column (x-coordinate)
        for (let x = 0; x < 10; x++) {
            // Create a new div element for each cell.
            const cell = document.createElement('div');
            // Add a class for styling.
            cell.classList.add('grid-cell');
            // Set a unique ID for each cell based on its coordinates.
            // This makes it easy to find a specific cell later.
            cell.id = `cell-${x}-${y}`;
            // Append the new cell to the main grid container.
            marsGrid.appendChild(cell);
        }
    }
}

// Function to update the UI based on the rover's current state.
// This is a central function we'll call whenever the rover's state changes.
function updateUI() {
    // Update the position display. We use a template literal for easy formatting.
    positionElement.textContent = `(${rover.x}, ${rover.y})`;

    // Update the direction display using the directionMap for the emoji and name.
    directionElement.innerHTML = `${directionMap[rover.direction].name} ${directionMap[rover.direction].emoji}`;

    // Remove the 'rover' class from the previous position.
    // This ensures we only have one rover on the map at a time.
    const allCells = document.querySelectorAll('.grid-cell.rover');
    allCells.forEach(cell => cell.classList.remove('rover'));

    // Add the 'rover' class to the rover's current cell.
    // This will apply the CSS styling to show the rover's icon.
    const currentCell = document.getElementById(`cell-${rover.x}-${rover.y}`);
    if (currentCell) {
        currentCell.classList.add('rover');
    }
}