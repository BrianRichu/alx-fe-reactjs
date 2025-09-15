import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import { useRecipeStore } from './components/recipeStore'

// Inline RecipeDetails component
const RecipeDetails = () => {
  const { id } = useParams()
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === Number(id))
  )

  if (!recipe) {
    return <p>Recipe not found.</p>
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>My Recipe App</h1>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/add">Add Recipe</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
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
