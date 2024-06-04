import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.jpg";
import { SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles =
    `mb-5 w-full rounded-lg bg-primary-300 text-white px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: Record<string, any>) => {
    const isValid = await trigger();
    if (isValid) {
      const { name, email, phone, message } = data;
      const formattedMessage =
        `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`;
      const encodedMessage = encodeURIComponent(formattedMessage);
      window.open(`https://wa.me/3145888596?text=${encodedMessage}`, "_blank");
    }
  };

  return (
    <section id="contactus" className="w-full p-10 xl:p-56">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">Contacto</span>
          </HText>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="Nombre"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" &&
                    "Este campo es requerido."}
                  {errors.name.type === "maxLength" &&
                    "Máximo del 100 caracteres."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="Correo"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "Este campo es requerido."}
                  {errors.email.type === "pattern" && "Correo invalido."}
                </p>
              )}

              <input
                className={inputStyles}
                type="tel"
                placeholder="Celular"
                {...register("phone", {
                  required: true,
                  pattern: /^3\d{9}$/,
                })}
              />
              {errors.phone && (
                <p className="mt-1 text-primary-500">
                  {errors.phone.type === "required" &&
                    "Este campo es requerido."}
                  {errors.phone.type === "pattern" && "Celular invalido."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="Mensaje"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "Este campo es requerido."}
                  {errors.message.type === "maxLength" &&
                    "MMáximo del 2000 caracteres."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-green-500 px-20 py-3 transition duration-500 text-white"
              >
                <span className="flex gap-2 justify-center items-center">
                  <p>
                    Enviar
                  </p>
                  <FaWhatsapp className="text-white" size={"20px"} />
                </span>
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-logotext">
              <img
                className="w-full rounded-lg shadow-lg"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
