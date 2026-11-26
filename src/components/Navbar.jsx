
import { NavLink, useLocation } from "react-router-dom";

function Navbar({ quantidade }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="navbar-titulo">
        Escola de idiomas — João
      </h2>

      <div className="navbar-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/turmas/novo">
          Nova turma
        </NavLink>

        <NavLink
          to="/turmas"
          className={({ isActive }) =>
            isActive && location.pathname !== "/turmas/novo"
              ? "active"
              : ""
          }
        >
          Turmas
          <span className="navbar-quantidade">
            {quantidade}
          </span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
