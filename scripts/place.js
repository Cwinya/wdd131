// Footer Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Windchill Calculation
function calculateWindChill(tempC, speedKmh) {
  // Formula in Celsius:
  // 13.12 + 0.6215T - 11.37V^0.16 + 0.3965T*V^0.16
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1);
}

// Static values (match what’s shown in HTML)
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
let windchill = "N/A";

// Check conditions (Celsius version)
if (temp <= 10 && speed > 4.8) {
  windchill = calculateWindChill(temp, speed);
}

document.getElementById("windchill").textContent = windchill;
