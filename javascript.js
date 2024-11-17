const container = document.getElementById('container');
const changeGridButton = document.getElementById('changeGridButton');

// Create the initial 16x16 grid
let grid = 16;

function createGrid(size) {
    // Clear the existing grid
    container.innerHTML = '';

    // Create the new grid based on the size
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('square');

        // Create a hovering effect
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red";
        });

        container.appendChild(div);
    }

    // Style the squares (size of each square)
    const squareSize = 500 / size;  // Adjust square size based on grid size
    const squares = container.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    });
}

// Set the initial grid
createGrid(grid);

// Event listener for the "Change Grid Size" button
changeGridButton.addEventListener('click', () => {
    let newGridSize = prompt("Enter new number of squares per side (max 100)");

    newGridSize = parseInt(newGridSize);

    // Validate the input
    if (isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    // Update the grid size and create a new grid
    grid = newGridSize;
    createGrid(grid);
});
