import { Link } from "react-router-dom";

// Inside your map() loop:
<Link
  to={`/recipe/${recipe.id}`}
  className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
>
  View Recipe →
</Link>
