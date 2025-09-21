import axios from "axios";

const BASE_URL = "https://api.github.com/users";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, {
      headers: {
        Authorization: API_KEY ? `token ${API_KEY}` : "",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "User not found" };
  }
};
