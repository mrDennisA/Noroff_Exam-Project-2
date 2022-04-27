import { useRef } from "react";
import { useMatch, useResolvedPath } from "react-router-dom";

// API URL
import { HEADER_URL } from "../../services/API";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// Components
import Logo from "../Logo";
import { BAROPEN_ICON, BARCLOSED_ICON } from "../Icons/Icons";

// Styles
import { NavLogo, Button, Nav, NavLink, SideLink, Link } from "./MenuHeader.styled";

const url =
  HEADER_URL +
  "?populate=logo" + // Logo
  "&populate=link.pageLink"; // Links

export default function MenuHeader({ isOpen, toggle }) {
  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (!loading) {
    const logo = "http://localhost:1337" + data.data.attributes.logo.data.attributes.url;
    const links = data.data.attributes.link;

    // Toggle Active Link
    function LinkActive({ children, to }) {
      const resolved = useResolvedPath(to);
      const match = useMatch({ path: resolved.pathname, end: true });

      return (
        <Link className={match ? " active" : ""} to={to} onClick={toggle}>
          {children}
        </Link>
      );
    }

    // Link Array
    function LinkArray() {
      return (
        <>
          <LinkActive to="/">Home</LinkActive>
          {links.map((item) => {
            // console.log(item);
            const linkID = item.id;
            const slug = item.pageLink.data.attributes.slug;
            const name = item.pageLink.data.attributes.name;
            return (
              <LinkActive key={linkID} to={slug}>
                {name}
              </LinkActive>
            );
          })}
        </>
      );
    }

    return (
      <>
        <NavLogo>
          <Logo data={logo} />
          <Button onClick={toggle}>{BAROPEN_ICON}</Button>
        </NavLogo>
        <Nav className="menu">
          <NavLink>
            <LinkArray />
          </NavLink>
          <SideLink isOpen={isOpen}>
            <Button onClick={toggle}>{BARCLOSED_ICON}</Button>
            <LinkArray />
          </SideLink>
        </Nav>
      </>
    );
  }
}
