import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import PostsComponent from "./components/PostsComponent";

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ textAlign: "center" }}>React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
