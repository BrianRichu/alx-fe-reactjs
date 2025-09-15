import { useState } from 'react'
import { useRecipeStore } from '../recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes())
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const updateRecipe = useRecipeStore((state) => state.updateRecipe)

  // Track which recipe is being edited
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')

  const handleEdit = (recipe) => {
    setEditingId(recipe.id)
    setEditTitle(recipe.title)
    setEditDescription(recipe.description)
  }

  const handleSave = (id) => {
    updateRecipe(id, { title: editTitle, description: editDescription })
    setEditingId(null)
    setEditTitle('')
    setEditDescription('')
  }

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '6px',
            }}
          >
            {editingId === recipe.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="Title"
                  style={{ display: 'block', marginBottom: '8px', width: '100%' }}
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Description"
                  style={{ display: 'block', marginBottom: '8px', width: '100%' }}
                />
                <button onClick={() => handleSave(recipe.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <button onClick={() => handleEdit(recipe)}>Edit</button>
                <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default RecipeList
