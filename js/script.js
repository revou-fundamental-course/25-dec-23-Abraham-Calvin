// Circumference of Triangle
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
      document.getElementById('resultCircumference').textContent = 'The Circumference of The Triangle is: ' + area.toFixed();
    } else {
        alert('Invalid sides! The given sides do not form a valid triangle.');
    }
  }
function resetCircumferenceForm() {
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';
    document.getElementById('resultCircumference').innerHTML = '';
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

// Area of Triangle
function calculateArea() {
    // Get the input values
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    // Check if the inputs are valid numbers
    if (isNaN(base) || isNaN(height)) {
        alert('Please enter valid numerical values for base and height.');
        return;
    }

    // Calculate the area using the formula: 1/2 * base * height
    var area = 0.5 * base * height;

    // Display the result
    document.getElementById('resultArea').textContent = 'The area of the triangle is: ' + area.toFixed(2);
}

function resetAreaForm() {
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('resultArea').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function () {
    var inputFields = document.querySelectorAll('input[type="text"]');
    inputFields.forEach(function (inputField) {
        inputField.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                calculateArea();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the button
    var mybutton = document.getElementById("up-button");
  
    // When the user scrolls down 50px from the top of the document, show the button
    window.onscroll = function() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };
  
    // When the user clicks on the button, scroll to the top of the document
    mybutton.onclick = function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  });