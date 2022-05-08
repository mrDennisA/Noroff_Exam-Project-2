import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// Hooks
import AuthContext from "../../../services/AuthContext";

// Styles
import { Section } from "./index.styled";

export default function AdminMenu() {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/l", { replace: true });
  }

  return (
    <div className="bgDarkBrown">
      <div className="container">
        <div className="wrapper">
          <Section>
            {auth ? (
              <>
                <Link to="dashboard">
                  <span>Dashboard</span>
                </Link>
                <button onClick={logout}>
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="login">
                <span>login</span>
              </Link>
            )}
          </Section>
        </div>
      </div>
    </div>
  );
}
