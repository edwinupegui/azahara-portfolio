import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/3145888596", "_blank");
  };

  return (
    <button
      className="fixed bottom-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-green-600 transition-all"
      onClick={handleWhatsAppClick}
    >
      <p>Chatea con nosotros</p>
      <FaWhatsapp className="text-white" size={"20px"} />
    </button>
  );
}

export default WhatsAppButton;
