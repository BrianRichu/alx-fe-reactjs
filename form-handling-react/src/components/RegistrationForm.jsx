import { useState } from "react";

function RegistrationForm() {
  // Step 1: Define state variables for each input field
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Step 2: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: ensure no field is empty
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    console.log("User registered:", formData);

    // Reset form after submission
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container" style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          style={{
            marginTop: "1.5rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
