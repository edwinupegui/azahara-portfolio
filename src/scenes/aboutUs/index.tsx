import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import { SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import ActionButton from "../../shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="aboutus"
      className="mx-auto px-10 lg:px-48 py-10 bg-primary-100"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
      >
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Nuestra Historia:
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Azahara nació para democratizar el acceso a servicios de belleza
                de alta calidad. Nuestra misión es ofrecer tratamientos
                accesibles y seguros para todos, utilizando tecnología avanzada
                y certificados por INVIMA.
              </p>
            </motion.div>

            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Misión y Visión:
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Misión: Ofrecer tratamientos de belleza de alta calidad,
                accesibles y seguros, utilizando tecnología avanzada y
                cumpliendo con las certificaciones de INVIMA.
              </p>
              <p className="my-5">
                Visión: Ser líderes en la democratización de los servicios de
                belleza, logrando que cada persona pueda acceder a tratamientos
                que mejoren su bienestar y autoestima, independientemente de su
                situación económica.
              </p>
            </motion.div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Equipo:
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Nuestro equipo está liderado por Alejandra Gómez, una experta en
                el sector de la belleza con años de experiencia en el desarrollo
                y gestión de tratamientos de alta calidad. Junto a Alejandra,
                contamos con un equipo de profesionales dedicados a ofrecer lo
                mejor en servicios de belleza, comprometidos con la innovación y
                la satisfacción del cliente.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Reserva Ahora
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
