import { useRecipeStore } from './recipeStore'

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes())

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes match your filters.</p>
      ) : (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <strong>{recipe.title}</strong> - {recipe.prepTime} mins
              <br />
              Ingredients: {recipe.ingredients.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RecipeList
