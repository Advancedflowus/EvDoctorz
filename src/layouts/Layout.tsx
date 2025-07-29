
import { Outlet } from "react-router-dom";
import Navbar from "../components/VideoHeroSection";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ContactUs from "../components/ContactUs";

const Layout = () => {

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ContactUs />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
