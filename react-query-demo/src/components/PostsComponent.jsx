// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";
import React from "react";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    refetchOnWindowFocus: true, // 👈 Required by your task
    keepPreviousData: true,     // 👈 Required by your task
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Posts</h2>
      <button
        onClick={() => refetch()}
        className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
      >
        Refetch Posts
      </button>

      {isFetching && <p className="text-sm text-gray-500">Updating data...</p>}

      <ul className="space-y-2">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-3 rounded shadow-sm">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
