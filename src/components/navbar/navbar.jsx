import { useState, useEffect } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import {
  CircleHalf,
  MoonStarsFill,
  ReceiptCutoff,
  SunFill,
} from "react-bootstrap-icons";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
const Navbar = () => {
  const [navLinks] = useState([
    {
      navigation: "/",
      name: "Home",
    },
    {
      navigation: "/invoices",
      name: "Invoices",
    },
    {
      navigation: "/settings",
      name: "Settings",
    },
  ]);

  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getPreferredTheme());

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (
      theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  }, [theme]);

  return (
    <nav className="navbar navbar-expand-lg shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <ReceiptCutoff className="me-2">Invoice Generator</ReceiptCutoff>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks.map((item) => (
              <li key={item.name} className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "inactive nav-link"
                  }
                  to={item.navigation}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <hr className="d-lg-none text-white-50"></hr>
          <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
            <li className="nav-item dropdown">
              <button
                className="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
                id="bd-theme"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-label="theme"
              >
                {theme === "light" && (
                  <SunFill className="my-1 theme-icon-active" />
                )}
                {theme === "dark" && (
                  <MoonStarsFill className="my-1 theme-icon-active" />
                )}
                {theme === "auto" && (
                  <CircleHalf className="my-1 theme-icon-active" />
                )}

                <span className="d-lg-none ms-2">Theme</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li onClick={() => setTheme("light")}>
                  <button
                    type="button"
                    className={`dropdown-item d-flex align-items-center ${
                      theme === "light" ? "active" : ""
                    }`}
                  >
                    <SunFill className="me-2 opacity-50" />
                    Light
                  </button>
                </li>
                <li onClick={() => setTheme("dark")}>
                  <button
                    type="button"
                    className={`dropdown-item d-flex align-items-center ${
                      theme === "dark" ? "active" : ""
                    }`}
                    data-bs-theme-value="dark"
                  >
                    <MoonStarsFill className="me-2 opacity-50" />
                    Dark
                  </button>
                </li>
                <li onClick={() => setTheme("auto")}>
                  <button
                    type="button"
                    className={`dropdown-item d-flex align-items-center ${
                      theme === "auto" ? "active" : ""
                    }`}
                  >
                    <CircleHalf className="me-2 opacity-50" />
                    Auto
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
