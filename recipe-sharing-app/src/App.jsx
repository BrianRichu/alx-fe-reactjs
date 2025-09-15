import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>My Recipe App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  )
}

export default App
