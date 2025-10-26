import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./Pages/ProfileDetails";
import ProfileSettings from "../pages/ProfileSettings";

const Profile = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Profile Page</h2>
      <nav className="space-x-4">
        <Link to="details" className="text-blue-600">Profile Details</Link>
        <Link to="settings" className="text-blue-600">Settings</Link>
      </nav>

      <div className="mt-4">
        {/* Nested Routes */}
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
