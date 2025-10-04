import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split("\n").length < 2) {
      newErrors.ingredients = "Please provide at least two ingredients.";
    }

    if (!instructions.trim()) {
      newErrors.instructions = "Preparation steps are required.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newRecipe = {
        id: Date.now(), // unique ID
        title,
        summary: instructions.substring(0, 60) + "...", // short summary
        image: "https://via.placeholder.com/300x200",
        ingredients: ingredients.split("\n"),
        instructions: instructions.split("\n"),
      };

      console.log("New Recipe Submitted:", newRecipe);

      // Reset form
      setTitle("");
      setIngredients("");
      setInstructions("");
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Add a New Recipe</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-2xl mx-auto"
      >
        {/* Title Field */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
              errors.title ? "border-red-500 focus:ring-red-500" : "focus:ring-indigo-500"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full border rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 ${
              errors.ingredients ? "border-red-500 focus:ring-red-500" : "focus:ring-indigo-500"
            }`}
            placeholder="Enter each ingredient on a new line"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Instructions Field */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Preparation Steps</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`w-full border rounded-lg px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 ${
              errors.instructions ? "border-red-500 focus:ring-red-500" : "focus:ring-indigo-500"
            }`}
            placeholder="Enter each step on a new line"
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
