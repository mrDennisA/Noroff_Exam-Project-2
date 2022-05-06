import { useMatch, useResolvedPath } from "react-router-dom";

// Components
import Logo from "../../Logo";
import { BAROPEN_ICON, BARCLOSED_ICON } from "../../Icons/Icons";

// Styles
import { NavLogo, Button, Nav, NavLink, SideLink, Link } from "./index.styled";

export default function HeaderMenu({ isOpen, toggle }) {
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
        <LinkActive to="hair-extenstions">Master Hair Extenstions</LinkActive>
        <LinkActive to="care-collection">Care Collection</LinkActive>
        <LinkActive to="partner-salons">Partner Salons</LinkActive>
      </>
    );
  }

  return (
    <>
      <NavLogo>
        <Logo />
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
