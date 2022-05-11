import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// Hooks
import AuthContext from "../../../services/AuthContext";

// Styles
import { Section } from "./index.styled";
import Wrapper from "../../../layout/Wrapper";

export default function AdminMenu() {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/", { replace: true });
  }

  return (
    <Wrapper>
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
    </Wrapper>
  );
}
