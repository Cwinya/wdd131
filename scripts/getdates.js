// Get the last modified date and time as a string
const lastModifiedDate = document.lastModified;

// Display the last modified date and time
console.log("Last Modified:", lastModifiedDate);

// You can also display it in the HTML document
document.getElementById("lastModified").textContent = "Last Modification: " + lastModifiedDate;