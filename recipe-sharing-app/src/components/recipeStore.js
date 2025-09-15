// src/components/recipeStore.js
import create from 'zustand'

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  ingredientFilter: '',
  maxPrepTime: null,

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setSearchTerm: (term) => set({ searchTerm: term }),
  setIngredientFilter: (ingredient) => set({ ingredientFilter: ingredient }),
  setMaxPrepTime: (time) => set({ maxPrepTime: time }),

  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedFields } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((fid) => fid !== id),
      recommendations: [],
    })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: Array.from(new Set([...state.favorites, recipeId])),
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      const favIds = new Set(state.favorites)
      const favoriteRecipes = state.recipes.filter((r) => favIds.has(r.id))
      const favIngredients = new Set(
        favoriteRecipes.flatMap((r) => r.ingredients || [])
      )

      const recommended = state.recipes
        .filter(
          (r) =>
            !favIds.has(r.id) &&
            (r.ingredients || []).some((ing) => favIngredients.has(ing))
        )
        .slice(0, 10)

      return { recommendations: recommended }
    }),

  filteredRecipes: () => {
    const { recipes, searchTerm, ingredientFilter, maxPrepTime } = get()
    const term = (searchTerm || '').toLowerCase()

    return recipes.filter((recipe) => {
      const matchesTitle =
        !term || (recipe.title || '').toLowerCase().includes(term)
      const matchesIngredient =
        !ingredientFilter ||
        (recipe.ingredients || []).some((ing) =>
          ing.toLowerCase().includes(ingredientFilter.toLowerCase())
        )
      const matchesPrepTime =
        !maxPrepTime ||
        (typeof recipe.prepTime === 'number' && recipe.prepTime <= maxPrepTime)

      return matchesTitle && matchesIngredient && matchesPrepTime
    })
  },
}))
