import { motion } from "framer-motion";
import HText from "../../shared/HText";
import { SelectedPage, TestimonialsType } from "../../shared/types";
import people1 from "./../../assets/people1.png";
import Testimony from "./Testimony";

const testimonials: Array<TestimonialsType> = [
  {
    image: people1,
    testimony: "Excelente servicio, mi piel nunca se había sentido tan bien.",
    client: "María P",
  },
  {
    image: people1,
    testimony: "Excelente servicio, mi piel nunca se había sentido tan bien.",
    client: "María P",
  },
  {
    image: people1,
    testimony: "Excelente servicio, mi piel nunca se había sentido tan bien.",
    client: "María P",
  },
  {
    image: people1,
    testimony: "Excelente servicio, mi piel nunca se había sentido tan bien.",
    client: "María P",
  },
  {
    image: people1,
    testimony: "Excelente servicio, mi piel nunca se había sentido tan bien.",
    client: "María P",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Testimonials = ({ setSelectedPage }: Props) => {
  return (
    <section id="testimonials" className="w-full bg-gray-20 py-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5 py-10">
            <HText>Testimonios:</HText>
          </div>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div className="grid grid-cols-1 px-2 md:grid-cols-2 xl:grid-cols-3 gap-7 mx-auto container">
            {testimonials.map((item, key) => (
              <Testimony
                key={key}
                client={item.client}
                image={item.image}
                testimony={item.testimony}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
