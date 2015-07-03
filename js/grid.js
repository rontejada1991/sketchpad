// Grid size
var rows = 16;
var columns = 16;

$(document).ready(function() {
  // Empty row
  $row = $("<div class='row'></div>");

  // Fills empty row with divs
  for (var i = 0; i < rows; i++) {
    $row.append("<div class='square'></div>");
  }

  for (var i = 0; i < columns; i++) {
    $("div#container").append($row.clone());
  }

});