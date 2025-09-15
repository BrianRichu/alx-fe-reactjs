import { create } from 'zustand'

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  ingredientFilter: '',
  maxPrepTime: null,

  // Actions
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  setSearchTerm: (term) => set({ searchTerm: term }),
  setIngredientFilter: (ingredient) => set({ ingredientFilter: ingredient }),
  setMaxPrepTime: (time) => set({ maxPrepTime: time }),

  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedFields } : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Computed / derived state
  filteredRecipes: () => {
    const { recipes, searchTerm, ingredientFilter, maxPrepTime } = get()

    return recipes.filter((recipe) => {
      const matchesTitle = recipe.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

      const matchesIngredient = ingredientFilter
        ? recipe.ingredients.some((ing) =>
            ing.toLowerCase().includes(ingredientFilter.toLowerCase())
          )
        : true

      const matchesPrepTime = maxPrepTime
        ? recipe.prepTime <= maxPrepTime
        : true

      return matchesTitle && matchesIngredient && matchesPrepTime
    })
  },
}))
