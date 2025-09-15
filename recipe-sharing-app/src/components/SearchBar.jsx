import { useRecipeStore } from './recipeStore'

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm)
  const setIngredientFilter = useRecipeStore((state) => state.setIngredientFilter)
  const setMaxPrepTime = useRecipeStore((state) => state.setMaxPrepTime)

  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      <input
        type="text"
        placeholder="Search by recipe name..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by ingredient..."
        onChange={(e) => setIngredientFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max prep time (min)"
        onChange={(e) => setMaxPrepTime(Number(e.target.value))}
      />
    </div>
  )
}

export default SearchBar
