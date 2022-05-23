import { useState } from "react";
import { useMatch, useResolvedPath } from "react-router-dom";

// Components
import Logo from "../../Logo";
import { BAROPEN_ICON, BARCLOSED_ICON } from "../../common/Icons";

// Styles
import { Modal, NavLogo, Button, Nav, NavLink, SideLink, Link } from "./index.styled";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
      document.body.style.overflow = null;
      window.removeEventListener("resize", handleSize);
    }
  };

  // Toggle Mobil Menu
  const toggle = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
      document.body.style.overflow = document.body.style.overflow ? null : "hidden";
      window.addEventListener("resize", handleSize);
    }
  };

  // Toggle Active Link
  const LinkActive = ({ children, to }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    return (
      <Link className={match ? " active" : ""} to={to} onClick={toggle}>
        {children}
      </Link>
    );
  };

  // Link Array
  const LinkArray = () => {
    return (
      <>
        <LinkActive to="/">Home</LinkActive>
        <LinkActive to="hair-extensions">Master Hair Extensions</LinkActive>
        <LinkActive to="care-collection">Care Collection</LinkActive>
        <LinkActive to="partner-salons">Partner Salons</LinkActive>
      </>
    );
  };

  return (
    <>
      {isOpen && <Modal onClick={toggle} />}
      <NavLogo>
        <Logo />
        <Button onClick={toggle}>{BAROPEN_ICON}</Button>
      </NavLogo>
      <Nav className="menu">
        <NavLink>
          <LinkArray />
        </NavLink>
        <SideLink className={isOpen ? "active" : ""}>
          <Button onClick={toggle}>{BARCLOSED_ICON}</Button>
          <LinkArray />
        </SideLink>
      </Nav>
    </>
  );
}
