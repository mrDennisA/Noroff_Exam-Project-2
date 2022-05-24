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
import HairExtensions from "./pages/HairExtensions";
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

function App() {
  return (
    <AuthProvider>
      <div>
        <AdminMenu />
        <Header>
          <HeaderMenu />
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":slug" element={<BlogPost />} />
            <Route path="hair-extensions" element={<HairExtensions />} />
            <Route path="care-collection" element={<CareCollection />} />
            <Route path="care-collection/:slug" element={<Detail />} />
            <Route path="partner-salons" element={<PartnerSalons />} />
            <Route path="become-voke-salon" element={<BecomeVokeSalon />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />

            {/* Admin start*/}
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
            {/* Admin end*/}
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
