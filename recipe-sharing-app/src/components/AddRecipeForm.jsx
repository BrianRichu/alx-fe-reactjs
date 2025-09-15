import { useState } from 'react'
import { useRecipeStore } from './recipeStore'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe)
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [prepTime, setPrepTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !ingredients || !prepTime) return

    addRecipe({
      id: Date.now(),
      title,
      ingredients: ingredients.split(',').map((ing) => ing.trim()),
      prepTime: Number(prepTime),
    })

    setTitle('')
    setIngredients('')
    setPrepTime('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Recipe name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <input
        type="number"
        placeholder="Prep time (minutes)"
        value={prepTime}
        onChange={(e) => setPrepTime(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm
