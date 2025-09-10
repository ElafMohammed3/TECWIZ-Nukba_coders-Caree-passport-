import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
