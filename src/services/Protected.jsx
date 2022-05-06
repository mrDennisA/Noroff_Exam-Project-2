import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "./AuthContext";

export default function Protected({ children }) {
  const [auth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
