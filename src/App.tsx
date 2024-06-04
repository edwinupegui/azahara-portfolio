import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import ContactUs from "./scenes/contactUs";
import Home from "./scenes/home";
import Promotions from "./scenes/promotions";
import Footer from "./scenes/footer";
import { SelectedPage } from "./shared/types";
import AboutUs from "./scenes/aboutUs";
import Testimonials from "./scenes/testimonials";
import WhatsAppButton from "./shared/WhatsAppButton";
import Modal from "./shared/Modal";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false); // Estado para controlar la visibilidad del modal

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <AboutUs setSelectedPage={setSelectedPage} />
      <Promotions setSelectedPage={setSelectedPage} />
      <Testimonials setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setShowModal={setShowModal} />
      <WhatsAppButton />
      {showModal && <Modal isOpen={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
