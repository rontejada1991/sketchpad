// Grid size
var current_columns = 16;
var current_rows = 16;

// Makes our grid based on the number of columns, rows given
var makeGrid = function(columns, rows) {
  // Empty row
  $row = $("<div class='row'></div>");

  // Fills empty row with divs
  for (var i = 0; i < rows; i++) {
    $row.append("<div class='square'></div>");
  }

  // Fills the rest of the columns with rows
  for (var i = 0; i < columns; i++) {
    $("div#container").append($row.clone());
  }

};

// Stretches the size of our cells based on the number of rows/columns selected and the size of our container
var stretchCells = function(columns, rows) {
  // Grab the height and width of our container
  var container_height = $("div#container").height();
  var container_width = $("div#container").width();

  // Calculate each individual each individual cells height and width to fit our container evenly
  var cell_height = container_height / rows;  
  var cell_width = container_width / columns;

  // Change our selectors height and width properties for our cells
  $(".square").css("height", cell_height + "px");
  $(".square").css("width", cell_width + "px");

};

$(document).ready(function() {
  makeGrid(current_columns, current_rows);
  stretchCells(current_columns, current_rows);

});
