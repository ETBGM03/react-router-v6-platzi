import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const menuLink = [
  { id: 1, url: "/", name: "Home", private: false },
  { id: 2, url: "/blog", name: "Blog", private: false },
  { id: 3, url: "/profile", name: "Profile", private: true },
  { id: 4, url: "/login", name: "Sign in", private: false, publicOnly: true },
  { id: 5, url: "/logout", name: "Sign Out", private: true },
];

function Menu() {
  const { user } = useAuth();

  return (
    <nav>
      <ul>
        {menuLink.map((it) => {
          if (it.publicOnly && user) return null;
          if (it.private && !user) return null;

          return (
            <li key={it.id}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "green" : "#888",
                })}
                to={it.url}
              >
                {it.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;
