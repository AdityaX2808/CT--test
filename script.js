let recipe = {
    name: "Pasta Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan Cheese", "Black Pepper"],
    instructions: "1. Cook spaghetti according to package instructions. \n2. In a separate pan, cook bacon until crispy. \n3. In a bowl, whisk together eggs and grated Parmesan cheese. \n4. Once spaghetti is cooked, drain it and add it to the pan with bacon. \n5. Turn off the heat and quickly stir in the egg mixture until the eggs are cooked but still creamy. \n6. Season with black pepper and serve immediately."
};

function displayRecipe() {
    const recipeContainer = document.getElementById("recipe-container");
    recipeContainer.innerHTML = `
        <h2>${recipe.name}</h2>
        <h3>Ingredients:</h3>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>
        <h3>Instructions:</h3>
        <p>${recipe.instructions}</p>
    `;
}

function addRecipe() {
    recipe.name = prompt("Enter recipe name:");
    const ingredients = prompt("Enter ingredients separated by commas (,):");
    recipe.ingredients = ingredients.split(",").map(ingredient => ingredient.trim());
    recipe.instructions = prompt("Enter recipe instructions:");
    displayRecipe();
}

function deleteRecipe() {
    if (confirm("Are you sure you want to delete this recipe?")) {
        recipe = {};
        const recipeContainer = document.getElementById("recipe-container");
        recipeContainer.innerHTML = "";
    }
}

function editRecipe() {
    const newName = prompt("Enter new recipe name (leave blank to keep current):");
    if (newName !== "") {
        recipe.name = newName;
    }
    const newIngredients = prompt("Enter new ingredients separated by commas (,) (leave blank to keep current):");
    if (newIngredients !== "") {
        recipe.ingredients = newIngredients.split(",").map(ingredient => ingredient.trim());
    }
    const newInstructions = prompt("Enter new recipe instructions (leave blank to keep current):");
    if (newInstructions !== "") {
        recipe.instructions = newInstructions;
    }
    displayRecipe();
}

displayRecipe();