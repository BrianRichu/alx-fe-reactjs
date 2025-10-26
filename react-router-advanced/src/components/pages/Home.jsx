import { Link } from "react-router-dom";

const Home = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Welcome to Advanced Routing Demo</h1>
    <nav className="mt-4 space-x-4">
      <Link to="/blog/1" className="text-blue-600">Blog 1</Link>
      <Link to="/blog/2" className="text-blue-600">Blog 2</Link>
      <Link to="/profile" className="text-blue-600">Profile</Link>
    </nav>
  </div>
);

export default Home;
