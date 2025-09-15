import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes)
  const favorites = useRecipeStore(state => state.favorites)
  const addFavorite = useRecipeStore(state => state.addFavorite)
  const removeFavorite = useRecipeStore(state => state.removeFavorite)

  if (recipes.length === 0) {
    return <p>No recipes found.</p>
  }

  return (
    <div>
      {recipes.map(recipe => {
        const isFavorite = favorites.includes(recipe.id)
        return (
          <div key={recipe.id} style={{ marginBottom: '20px' }}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            {isFavorite ? (
              <button onClick={() => removeFavorite(recipe.id)}>Unfavorite</button>
            ) : (
              <button onClick={() => addFavorite(recipe.id)}>Favorite</button>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList
