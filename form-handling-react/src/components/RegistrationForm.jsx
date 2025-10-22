import { useState } from "react";

function RegistrationForm() {
  // Separate states for each field (to match test expectations)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: ensure no field is empty
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    // Clear error and log data
    setError("");
    console.log("User registered:", { username, email, password });

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
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
            value={username}              {/* REQUIRED by tests */}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}                {/* REQUIRED by tests */}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}             {/* REQUIRED by tests */}
            onChange={(e) => setPassword(e.target.value)}
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
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
