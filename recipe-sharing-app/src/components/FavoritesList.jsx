import { useRecipeStore } from './recipeStore'

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes)
  const favorites = useRecipeStore(state => state.favorites)

  const favoriteRecipes = recipes.filter(r => favorites.includes(r.id))

  if (favoriteRecipes.length === 0) {
    return <p>No favorites yet.</p>
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FavoritesList
