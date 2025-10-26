import { Link } from "react-router-dom";



// Inside your map() loop:
<Link
  to={`/recipe/${recipe.id}`}
  className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
>
  <div className="flex justify-end mb-6">
  <Link
    to="/add"
    className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
  >
    + Add Recipe
  </Link>
</div>
  View Recipe →
</Link>
