import { useContext, useEffect } from "react";
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
    navigate("/", { replace: true });
  }
  // console.log(auth);
  // useEffect(() => {
  //   if (auth === null) {
  //     navigate("/", { replace: true });
  //   }
  // });

  return (
    <div className="bgDarkBrown">
      <div className="container">
        <div className="wrapper">
          <Section>
            <div>
              {auth ? (
                <>
                  <Link to="admin">Admin</Link>
                  <button onClick={logout}>Logout</button>
                </>
              ) : (
                <Link to="login">login</Link>
              )}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
