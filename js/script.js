function calculateCircumference() {
    // Get the input values
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    // Check if the inputs are valid numbers
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
      alert('Please enter valid numerical values for all sides.');
      return;
    }

    // Check if the given sides form a valid triangle
    if (sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB) {
      // Calculate the result
      var area = sideA + sideB + sideC;
      // Display the result
      document.getElementById('result').textContent = 'The Circumference of The Triangle is: ' + area.toFixed();
    } else {
        alert('Invalid sides! The given sides do not form a valid triangle.');
    }
  }
function resetForm() {
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';
    document.getElementById('result').innerHTML = '';
  }
  document.addEventListener('DOMContentLoaded', function() {
  var inputFields = document.querySelectorAll('input[type="text"]');
  inputFields.forEach(function(inputField) {
  inputField.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault();
          calculateCircumference();
  }
});
});
});