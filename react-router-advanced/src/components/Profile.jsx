import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Profile Page</h2>
      <nav className="space-x-4">
        <Link to="details" className="text-blue-600">Profile Details</Link>
        <Link to="settings" className="text-blue-600">Settings</Link>
      </nav>

      <div className="mt-4">
        {/* Renders nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
