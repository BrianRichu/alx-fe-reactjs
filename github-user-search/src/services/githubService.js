import axios from "axios";

// Basic user fetch (by username)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Advanced search (by username, location, repo count, etc.)
export const searchUsers = async (username, location, minRepos) => {
  try {
    let query = `${username ? username : ""}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    return response.data.items; // API returns items array
  } catch (error) {
    throw error;
  }
};
