import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes())

  if (recipes.length === 0) {
    return <p>No recipes found.</p>
  }

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: '20px' }}>
          <h3>
            {/* Each recipe links to a detail route */}
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
