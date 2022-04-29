import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";

// Header Components
import MenuHeader from "./components/Menu/MenuHeader";

// Pages Components
import Home from "./pages/Home/Home";
import BlogPost from "./components/Blog/BlogPost";
import HairExtenstions from "./pages/HairExtenstions/HairExtenstions";
import CareCollection from "./pages/CareCollection/CareCollection";
import Detail from "./pages/CareCollection/Detail";
import PartnerSalons from "./pages/PartnerSalons/PartnerSalons";
import BecomeVokeSalon from "./pages/BecomeVokeSalon";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ/FAQ";

//  Footer Components
import MenuFooter from "./components/Menu/MenuFooter";

import { Modal } from "./App.styled";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const bodyContainer = document.querySelector("body");

  const toggle = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
      bodyContainer.classList.toggle("overflow");
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        bodyContainer.classList.remove("overflow");
      }
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClick={toggle} />
      <div>
        <Header>
          <MenuHeader isOpen={isOpen} toggle={toggle} />
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="hair-extenstions" element={<HairExtenstions />} />
            <Route path="care-collection" element={<CareCollection />} />
            <Route path="care-collection/:slug" element={<Detail />} />
            <Route path="partner-salons" element={<PartnerSalons />} />
            <Route path="become-voke-salon" element={<BecomeVokeSalon />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
          </Routes>
        </Main>
      </div>
      <Footer>
        <MenuFooter />
      </Footer>
    </>
  );
}

export default App;
