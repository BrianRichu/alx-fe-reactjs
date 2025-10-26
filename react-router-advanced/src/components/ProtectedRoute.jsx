import { Navigate } from "react-router-dom";

/**
 * Custom authentication hook
 * Simulates checking if the user is logged in.
 */
export const useAuth = () => {
  const isLoggedIn = localStorage.getItem("auth") === "true";
  return { isLoggedIn };
};

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  // Redirect to /login if not authenticated
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the protected content
  return children;
};

export default ProtectedRoute;
