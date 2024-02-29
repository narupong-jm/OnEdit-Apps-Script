function onEdit(e) {
  var range = e.range;
  var sheet = range.getSheet();
  var column = range.getColumn();
  var row = range.getRow();
  
  // Define the column where your checkboxes are located
  var criteriaColumn = 4;
  // Define the column where your checkboxes are located
  var checkboxColumn = 8;
  // Define the column where you want to insert the timestamp
  var timestampColumn = 9;

  // Check if the edited cell is in the criteria column
  if (column == criteriaColumn && sheet.getName() == "Risk Assessment") {
    var checkboxCell = sheet.getRange(row, checkboxColumn);
    var criteria = range.getValue();
    
    // Check if the criteria is true or false
    if (criteria == "Acc") {
      // If true, automatically check the checkbox
      checkboxCell.setValue(true);
      // Record timestamp in the next column
      sheet.getRange(row, timestampColumn).setValue(new Date());
    } else {
      // If false, leave the checkbox as it is
      // User will manually check or uncheck it
    }
  }
  
  // Check if the edited cell is in the checkbox column
  if (column == checkboxColumn && sheet.getName() == "Risk Assessment") {
    
    // If checkbox is checked manually
    if (range.getValue() == true) {
         sheet.getRange(row, timestampColumn).setValue(new Date());
       } else  {
         sheet.getRange(row, timestampColumn).setValue("");
       }
  }
}
