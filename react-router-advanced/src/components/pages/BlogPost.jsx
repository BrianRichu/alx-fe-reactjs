import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  const posts = {
    1: { title: "React Router Basics", content: "Learning routing in React..." },
    2: { title: "Advanced Routing", content: "Nested and dynamic routes..." },
  };

  const post = posts[postId];

  if (!post) return <p>Post not found!</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="mt-2">{post.content}</p>
    </div>
  );
};

export default BlogPost;
