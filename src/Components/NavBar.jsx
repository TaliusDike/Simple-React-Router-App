import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navigation-bar">
      <h1>A Simple Routing App</h1>
      <div className="navbar-links-container">
        <NavLink className="navbar-links" to="/">
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="navbar-links"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="navbar-links"
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="navbar-links"
          to="/users"
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
