import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export default function SideNavLink({ to, name, onClick, children, ...props }) {
  return (
    <li
      className="mb-4  hover:text-primary transition-all group-hover:transition-all"
      {...props}
    >
      <NavLink
        onClick={onClick}
        to={to}
        className={(navData) => {
          if (navData.isActive) {
            return "flex flex-row font-bold text-yellow-500 dark:text-primary";
          }
          return "flex flex-row text-gray-900 dark:text-dark-text-fill";
        }}
      >
        {children}
        <span className="text-base ">{name}</span>
      </NavLink>
    </li>
  );
}
