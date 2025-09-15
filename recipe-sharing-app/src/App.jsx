// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import { useRecipeStore } from './components/recipeStore'

// Inline RecipeDetails component (instead of a new file)
const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === Number(id))
  )
  const favorites = useRecipeStore((s) => s.favorites)
  const addFavorite = useRecipeStore((s) => s.addFavorite)
  const removeFavorite = useRecipeStore((s) => s.removeFavorite)
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)

  if (!recipe) return <p>Recipe not found.</p>
  const isFavorite = favorites.includes(recipe.id)

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {isFavorite ? (
        <button onClick={() => removeFavorite(recipe.id)}>Unfavorite</button>
      ) : (
        <button onClick={() => addFavorite(recipe.id)}>Favorite</button>
      )}
      <button
        onClick={() => {
          if (window.confirm('Delete this recipe?')) {
            deleteRecipe(recipe.id)
            navigate('/')
          }
        }}
      >
        Delete
      </button>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>My Recipe App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
