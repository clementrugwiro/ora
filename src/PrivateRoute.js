import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "./hooks/useAuth";

function CheckRole({ children, ...props }) {
  const { user } = useContext(UserContext);
  console.log(UserContext);
  const location = useLocation();
  if (user?.auth) return <React.Fragment {...props}>{children}</React.Fragment>;
  return;
}

export default CheckRole;
