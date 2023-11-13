

document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature-input");
    const unitSelector = document.getElementById("unit-selector");
    const convertButton = document.getElementById("convert-button");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", convertTemperature);

    function convertTemperature() {
        const temperature = parseFloat(temperatureInput.value);
        const selectedUnit = unitSelector.value;

        if (!isNaN(temperature)) {
            let convertedTemperature;
            let convertedUnit;

            switch (selectedUnit) {
                case "celsius":
                    convertedTemperature = (temperature - 32) * (5 / 9);
                    convertedUnit = "Celsius";
                    break;
                case "fahrenheit":
                    convertedTemperature = (temperature * 9 / 5) + 32;
                    convertedUnit = "Fahrenheit";
                    break;
                case "kelvin":
                    convertedTemperature = temperature + 273.15;
                    convertedUnit = "Kelvin";
                    break;
                default:
                    break;
            }

            result.textContent = `Converted Temperature is: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
        } else {
            result.textContent = "Please enter a valid number.";
        }
    }
});
