function convertToCelsius() {
    var celsiusInput = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsiusInput)) {
      var fahrenheit = (celsiusInput * 9/5) + 32;
      document.getElementById('resultFahrenheit').innerHTML = celsiusInput +' degrees Celsius is ' + fahrenheit.toFixed(2) + ' degrees Fahrenheit.';
    } else {
      document.getElementById('resultFahrenheit').innerHTML = 'Please enter a valid numerical value for Celsius.';
    }
  }
  
  function convertToFahrenheit() {
    var fahrenheitInput = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheitInput)) {
      var celsius = (fahrenheitInput - 32) * 5/9;
      document.getElementById('resultCelsius').innerHTML = fahrenheitInput + ' degrees Fahrenheit is ' + celsius.toFixed(2) + ' degrees Celsius.';
    } else {
      document.getElementById('resultCelsius').innerHTML = 'Please enter a valid numerical value for Fahrenheit.';
    }
  }
  