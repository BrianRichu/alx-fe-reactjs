import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Recipe App</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
  )
}

export default App
