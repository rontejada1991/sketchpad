// Assign hover properties to our cells
function assignCellHover() {
  $("div.square").hover(function() {
    $(this).addClass("hovered");
  });
}

// Clearing out our grid on click of our clear button
function cleargrid() {
  $("div.square").removeClass("hovered");

  // Asks / Stores how many cells per side
  var gridSize = prompt("How many squares per side should I make your canvas? (Up to 128)", 64);

  // Check for validation if less than min / max or not a number
  while (!$.isNumeric(gridSize) || gridSize < 1 || gridSize > 128)
  if (gridSize < 1) {
    var gridSize = prompt("Please enter a higher number.");
  } else if (gridSize > 128) {
    var gridSize = prompt("Please enter a lower number.", 64);      
  } else {
    var gridSize = prompt("Please enter a valid number.", 64);
  }

  // Assign new grid size to our rows and column variables
  current_columns = gridSize;
  current_rows = gridSize;

  // Remove current grid
  $("div#container").empty();

  // Create a new grid and assign the hover property to each
  makeGrid(current_columns, current_rows);
  stretchCells(current_columns, current_rows);
  assignCellHover();

}

$(document).ready(function() {
  assignCellHover();

});