// src/components/RecipeList.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.filteredRecipes())
  const favorites = useRecipeStore((s) => s.favorites)
  const addFavorite = useRecipeStore((s) => s.addFavorite)
  const removeFavorite = useRecipeStore((s) => s.removeFavorite)
  const updateRecipe = useRecipeStore((s) => s.updateRecipe)
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)

  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({ title: '', description: '' })

  if (!recipes || recipes.length === 0) {
    return <p>No recipes found.</p>
  }

  const startEdit = (recipe) => {
    setEditingId(recipe.id)
    setFormData({ title: recipe.title, description: recipe.description })
  }

  const handleEditSubmit = (id) => {
    updateRecipe(id, {
      title: formData.title.trim(),
      description: formData.description.trim(),
    })
    setEditingId(null)
  }

  return (
    <div>
      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id)
        return (
          <div key={recipe.id} style={{ border: '1px solid #ddd', padding: 10, marginBottom: 10 }}>
            {editingId === recipe.id ? (
              <>
                <input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
                <button onClick={() => handleEditSubmit(recipe.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <h3>
                  <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                </h3>
                <p>{recipe.description}</p>
                <div>
                  {isFavorite ? (
                    <button onClick={() => removeFavorite(recipe.id)}>
                      Unfavorite
                    </button>
                  ) : (
                    <button onClick={() => addFavorite(recipe.id)}>
                      Favorite
                    </button>
                  )}
                  <button onClick={() => startEdit(recipe)}>Edit</button>
                  <button
                    onClick={() => {
                      if (window.confirm('Delete this recipe?')) {
                        deleteRecipe(recipe.id)
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList
