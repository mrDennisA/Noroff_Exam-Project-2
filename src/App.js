import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

// Header Components
import AdminMenu from "./components/Menu/AdminMenu";
import HeaderMenu from "./components/Menu/HeaderMenu";

// Pages Components
import Home from "./pages/Home";
import BlogPost from "./components/Blog/BlogPost";
import HairExtenstions from "./pages/HairExtenstions";
import CareCollection from "./pages/CareCollection";
import Detail from "./pages/CareCollection/Detail";
import PartnerSalons from "./pages/PartnerSalons";
import BecomeVokeSalon from "./pages/BecomeVokeSalon";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

// Admin Pages Components
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/Dashboard/AddProduct";
import EditProduct from "./pages/Dashboard/EditProduct";

//  Footer Components
import FooterMenu from "./components/Menu/FooterMenu";

// Service
import { AuthProvider } from "./services/AuthContext";
import Protected from "./services/Protected";

// Styles
import { Modal } from "./App.styled";

function App() {
  // Header Menu Toggle
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    const bodyContainer = document.querySelector("body");

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
    <AuthProvider>
      <Modal isOpen={isOpen} onClick={toggle} />
      <div>
        <AdminMenu />
        <Header>
          <HeaderMenu isOpen={isOpen} toggle={toggle} />
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":slug" element={<BlogPost />} />
            <Route path="hair-extenstions" element={<HairExtenstions />} />
            <Route path="care-collection" element={<CareCollection />} />
            <Route path="care-collection/:slug" element={<Detail />} />
            <Route path="partner-salons" element={<PartnerSalons />} />
            <Route path="become-voke-salon" element={<BecomeVokeSalon />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />

            <Route path="login" element={<Login />} />
            <Route
              path="dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
            <Route
              path="dashboard/add-product"
              element={
                <Protected>
                  <AddProduct />
                </Protected>
              }
            />
            <Route
              path="dashboard/:id"
              element={
                <Protected>
                  <EditProduct />
                </Protected>
              }
            />
          </Routes>
        </Main>
      </div>
      <Footer>
        <FooterMenu />
      </Footer>
    </AuthProvider>
  );
}

export default App;
