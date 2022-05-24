import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "./AuthContext";

export default function Protected(props) {
  const [auth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return props.children;
}
