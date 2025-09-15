import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',

  // Existing actions
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  setSearchTerm: (term) => set({ searchTerm: term }),

  // CRUD
  updateRecipe: (id, updatedFields) =>
    set(state => ({
      recipes: state.recipes.map(r =>
        r.id === id ? { ...r, ...updatedFields } : r
      )
    })),
  deleteRecipe: (id) =>
    set(state => ({
      recipes: state.recipes.filter(r => r.id !== id)
    })),

  // Filtering
  filteredRecipes: () =>
    set(state => ({
      recipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    })),

  // Favorites
  addFavorite: (recipeId) =>
    set(state => ({
      favorites: [...new Set([...state.favorites, recipeId])]
    })),
  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),

  // Mock Recommendations
  generateRecommendations: () =>
    set(state => {
      const recommended = state.recipes.filter(
        recipe =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      )
      return { recommendations: recommended }
    }),
}))

export { useRecipeStore }
