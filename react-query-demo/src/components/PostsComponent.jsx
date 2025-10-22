
import { useQuery } from "@tanstack/react-query";

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

function PostsComponent() {
  // useQuery hook for data fetching
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 60000, // data stays fresh for 1 minute
    cacheTime: 300000, // cache remains for 5 minutes
  });

  // Loading state
  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  // Error state
  if (isError) {
    return <p style={{ color: "red" }}>Error: {error.message}</p>;
  }

  // Success state
  return (
    <div>
      <button
        onClick={() => refetch()}
        disabled={isFetching}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
              backgroundColor: "#fafafa",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
