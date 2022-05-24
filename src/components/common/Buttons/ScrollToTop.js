import { useState, useEffect } from "react";

// Components
import ScrollToButton from "../Buttons/ScrollToButton";

import { Container } from "./ScrollToTop.styled";

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 1000) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <Container>{showTopBtn && <ScrollToButton onClick={scrollToTop} />}</Container>;
}
