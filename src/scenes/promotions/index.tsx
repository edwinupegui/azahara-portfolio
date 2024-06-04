import { motion } from "framer-motion";
import Promotion from "./Promotion";
import { BenefitType, SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import { FaFaceGrinBeam, FaRegFaceGrinStars } from "react-icons/fa6";
import { TbBodyScan, TbEyeClosed } from "react-icons/tb";

const promotions: Array<BenefitType> = [
  {
    icon: <FaFaceGrinBeam className="h-6 w-6" />,
    title: "Limpiezas Faciales Hydrafacial:",
    description:
      "Las limpiezas faciales Hydrafacial combinan limpieza, exfoliación, extracción e hidratación en un solo tratamiento no invasivo.",
  },
  {
    icon: <TbBodyScan className="h-6 w-6" />,
    title: "Depilaciones Corporales con Cera:",
    description:
      "Las depilaciones corporales con cera eliminan eficazmente el vello no deseado desde la raíz, dejando la piel suave y libre de vello por varias semanas.",
  },
  {
    icon: <TbEyeClosed className="h-6 w-6" />,
    title: "Embellecimiento de Cejas:",
    description:
      "El embellecimiento de cejas realza su forma natural, dejando tus cejas perfectamente definidas y simétricas por varias semanas.",
  },
  {
    icon: <FaRegFaceGrinStars className="h-6 w-6" />,
    title: "Maquillaje Profesional:",
    description:
      "El maquillaje profesional realza tu belleza natural, dejando tu rostro impecable, radiante y listo para cualquier ocasión especial.",
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

const Promotions = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="mx-auto py-20 w-5/6">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Servicios.</HText>
          <p className="my-5 text-sm">
            ¡Descubre nuestras promociones iniciales y aprovecha los tres
            primeros servicios de belleza completamente gratuitos! No dejes
            pasar esta increíble oportunidad para consentirte y lucir
            espectacular. ¡Te esperamos!.
          </p>
          <HText>Compra Nuestros Productos:</HText>
          <span className="flex gap-2">
            <a
              className={"transition font-bold text-xl duration-500 hover:text-primary-300"}
              target="_blank"
              href={`https://www.luegopago.com/tiendas/azahara`}
            >
              Azahara en Luegopago
            </a>
            <p className="font-bold text-xl">
              y
            </p>
            <a
              className={"transition font-bold text-xl duration-500 hover:text-primary-300"}
              href={`https://www.luegopago.com/tiendas/azahara`}
            >
              Azahara en MercadoShops
            </a>
          </span>
        </motion.div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {promotions.map((benefit: BenefitType) => (
            <Promotion
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Promotions;
