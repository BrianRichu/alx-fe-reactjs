import { create } from 'zustand'

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',

  // ✅ Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // ✅ Replace the entire recipe list
  setRecipes: (recipes) => set({ recipes }),

  // ✅ Update the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // ✅ Update a recipe by ID
  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedFields } : recipe
      ),
    })),

  // ✅ Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // ✅ Derived filtered recipes
  filteredRecipes: () => {
    const { recipes, searchTerm } = get()
    if (!searchTerm.trim()) return recipes
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  },
}))
