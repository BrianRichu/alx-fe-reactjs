import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "15px",
    backgroundColor: "#222",
  };

  const linkStyle = {
    margin: "0 15px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;