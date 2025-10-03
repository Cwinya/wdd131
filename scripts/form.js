const lastModifiedDate = document.lastModified;
console.log("Last Mofidfied;", lastModifiedDate);
document.getElementById("lastModified").textContent = "Last Modification: " + lastModifiedDate;

// Product array for dynamic select options
const products = [
  { id: "prod1", name: "Product 1" },
  { id: "prod2", name: "Product 2" },
  { id: "prod3", name: "Product 3" },
  { id: "prod4", name: "Product 4" },
  { id: "prod5", name: "Product 5" }
];

// Populate product select options dynamically
function populateProductOptions() {
  const select = document.getElementById('product');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name; // value attribute is product name as per instructions
    option.textContent = product.name;
    select.appendChild(option);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateProductOptions();
});