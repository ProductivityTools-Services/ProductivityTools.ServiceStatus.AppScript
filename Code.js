function doGet(req) {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName("Configuration");
  var range =sheet.getRange(1,1,3,10);
  var values=range.getValues();
  
  var output = [];

  for (var i = 0; i < values.length; i++) {
    if (i == 0) {
      continue;
    }
    var row = {}; // Create a new row object for each row
    for (var j = 0; j < 100; j++) {
      if (!values[i][j]) {
        break;
      }
      row[values[0][j]] = values[i][j];
      }
      output.push(row); // Push the row object to the output array
      delete row;
    }
  return ContentService.createTextOutput(JSON.stringify({ data: output })).setMimeType(ContentService.MimeType.JSON);
}
