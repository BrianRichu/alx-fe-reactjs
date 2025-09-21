import React, { useState } from "react";
import { advancedUserSearch } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const data = await advancedUserSearch(username, location, minRepos);
      setResults(data.items);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white shadow-md p-6 rounded-2xl"
      >
        <h2 className="text-xl font-semibold text-gray-800">
          GitHub Advanced User Search
        </h2>

        <input
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid gap-4">
          {results.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl shadow-sm"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
