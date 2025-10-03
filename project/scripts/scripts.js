// Data to simulate a backend/API call for recipes
const recipes = [
    { id: 1, name: "Authentic Tiramisu", cuisine: "italian", difficulty: "medium", rating: 4.8, img: "tiramisu.jpg" },
    { id: 2, name: "Spicy Beef Tacos", cuisine: "mexican", difficulty: "easy", rating: 4.5, img: "tacos.jpg" },
    { id: 3, name: "Pad Thai Noodles", cuisine: "asian", difficulty: "medium", rating: 4.7, img: "padthai.jpg" },
    { id: 4, name: "Moroccan Lamb Tagine", cuisine: "african", difficulty: "medium", rating: 4.6, img: "tagine.jpg" },
    { id: 5, name: "Classic Neapolitan Pizza", cuisine: "italian", difficulty: "medium", rating: 4.9, img: "pizza.jpg" },
    { id: 6, name: "Chipotle Chicken Bowl", cuisine: "mexican", difficulty: "easy", rating: 4.3, img: "bowl.jpg" },
];

/**
 * Renders recipe cards based on the provided list.
 * @param {Array} recipeList - The filtered list of recipes.
 */
function renderRecipes(recipeList) {
    const recipeListElement = document.getElementById('recipe-list');
    if (!recipeListElement) return;

    recipeListElement.innerHTML = ''; // Clear existing cards

    recipeList.forEach(recipe => {
        const cardHTML = `
            <div class="recipe-card" data-cuisine="${recipe.cuisine}" data-difficulty="${recipe.difficulty}">
                <img src="placeholder-${recipe.img}" alt="${recipe.name}">
                <div class="recipe-info">
                    <h4>${recipe.name}</h4>
                    <p>Cuisine: <span class="cuisine-tag">${recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)}</span></p>
                    <p>Rating: ${'★'.repeat(Math.round(recipe.rating))} (${recipe.rating})</p>
                    <a href="#" class="cta-button">Make It</a>
                </div>
            </div>
        `;
        recipeListElement.insertAdjacentHTML('beforeend', cardHTML);
    });
}

/**
 * Handles the mobile hamburger menu click event.
 */
function setupMobileMenu() {
    const menuButton = document.querySelector('.menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            // Toggle the accessibility state of the button
            const isExpanded = mobileMenu.classList.contains('open');
            menuButton.setAttribute('aria-expanded', isExpanded);
        });
    }
}

/**
 * Filters the recipes based on the clicked cuisine tag.
 */
function setupCuisineTags() {
    const tagList = document.querySelector('.tag-list');
    if (!tagList) return;

    tagList.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('tag')) {
            // Remove active state from all tags
            document.querySelectorAll('.tag').forEach(tag => tag.classList.remove('active'));
            // Add active state to the clicked tag
            target.classList.add('active');

            const cuisine = target.getAttribute('data-cuisine');
            let filteredRecipes = recipes;

            if (cuisine !== 'all') {
                filteredRecipes = recipes.filter(recipe => recipe.cuisine === cuisine);
            }

            renderRecipes(filteredRecipes);
        }
    });
}


// Initialize the website on page load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render all initial recipes
    renderRecipes(recipes);
    
    // 2. Set up mobile menu functionality
    setupMobileMenu();
    
    // 3. Set up cuisine tag filtering
    setupCuisineTags();
});