
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {

  return (
    <section id="home" className="gap-16 bg-gray-20 pt-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-32 before:z-[-1] md:before:content-logotext">
                <h1 className="text-3xl md:text-8xl font-bold basis-3/5 font-montserrat">AZAHARA</h1>
              </div>
            </div>

            <p className="mt-8 text-3xl basis-3/5 font-montserrat">
              Belleza y Bienestar al Alcance de Todos
            </p>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Reserva Ahora
            </ActionButton>
          </motion.div>
        </div>
        <div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-pageGraphic" className="relative w-[20rem] lg:w-[25rem] xl:w-[30rem] bottom-0 md:absolute" src={HomePageGraphic} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
