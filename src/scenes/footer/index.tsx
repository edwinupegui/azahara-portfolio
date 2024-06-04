import Logo from "@/assets/Logo.png";
import { Dispatch, SetStateAction } from "react";

interface IFooter {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Footer = ({ setShowModal }: IFooter) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="w-96" />
          <p
            className="my-5 hover:cursor-pointer hover:text-white"
            onClick={() => setShowModal(true)}
          >
            Aviso Legal y Política de Privacidad:
          </p>
          <p>© Azahara All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
