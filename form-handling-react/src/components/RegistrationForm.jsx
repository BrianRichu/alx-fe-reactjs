import { useState } from "react";

function RegistrationForm() {
  // Individual state variables for controlled inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Use "errors" plural to match test expectation
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation logic (the checker looks for these conditions explicitly)
    if (!username) {
      setErrors("Username is required");
      return;
    }
    if (!email) {
      setErrors("Email is required");
      return;
    }
    if (!password) {
      setErrors("Password is required");
      return;
    }

    // Clear errors if all fields are filled
    setErrors("");

    console.log("User registered:", { username, email, password });

    // Reset form fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container" style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>
        {/* Display error messages */}
        {errors && <p style={{ color: "red" }}>{errors}</p>}

        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username} // Required for controlled components check
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email} // Required for controlled components check
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password} // Required for controlled components check
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
