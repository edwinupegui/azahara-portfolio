import { Dispatch, SetStateAction } from "react";
import { MdOutlineCancel } from "react-icons/md";

interface IModal {
  isOpen: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

function Modal({ isOpen, setShowModal }: IModal) {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-white rounded-md shadow-lg overflow-y-auto max-w-[90%] max-h-[90%]">
            <div className="flex justify-end p-3">
              <button
                onClick={() => setShowModal(false)}
              >
                <MdOutlineCancel size={"28px"} />
              </button>
            </div>
            <div className="py-10 px-20">
              <h2 className="text-2xl font-bold mb-6">
                Aviso Legal y Política de Privacidad:
              </h2>
              <h3 className="text-lg font-bold mb-2">Aviso Legal</h3>
              <p className="mb-4">
                Propiedad del Sitio Web: Este sitio web es propiedad y está
                operado por Azahara. Todos los derechos, títulos e intereses en
                y para el contenido del sitio web, incluidos, entre otros,
                texto, gráficos, logotipos, iconos de botones, imágenes, clips
                de audio y software, son propiedad de Azahara y están protegidos
                por las leyes de derechos de autor internacionales.
              </p>
              <p className="mb-4">
                Uso del Sitio Web: El uso de este sitio web está sujeto a los
                siguientes términos y condiciones. Al acceder a este sitio web,
                usted acepta estos términos y condiciones sin limitación ni
                calificación. Si no está de acuerdo con estos términos y
                condiciones, no utilice este sitio web.
              </p>
              <p className="mb-4">
                Enlaces a Terceros: Este sitio web puede contener enlaces a
                otros sitios web operados por terceros. Azahara no tiene control
                sobre esos sitios y no es responsable de su contenido ni de los
                términos y condiciones de uso ni de las políticas de privacidad
                de esos sitios.
              </p>
              <p className="mb-4">
                Limitación de Responsabilidad: Azahara no será responsable de
                ningún daño directo, indirecto, incidental, consecuente o
                especial que surja del uso o la imposibilidad de uso de este
                sitio web, incluso si Azahara ha sido advertido de la
                posibilidad de tales daños.
              </p>
              <h3 className="text-xl font-bold mb-2">
                Política de Privacidad
              </h3>
              <p className="mb-4">
                Información Recopilada: Recopilamos información personal que
                usted nos proporciona voluntariamente al registrarse, realizar
                una compra, suscribirse a nuestro boletín informativo o
                completar un formulario de contacto. Esta información puede
                incluir su nombre, dirección de correo electrónico, número de
                teléfono y dirección postal.
              </p>
              <p className="mb-4">
                Uso de la Información: Utilizamos la información recopilada
                para:
              </p>
              <p className="mb-4">
                •	Procesar sus pedidos y transacciones. •	Enviar correos
                electrónicos periódicos con información sobre promociones,
                productos o servicios. •	Mejorar nuestro sitio web y personalizar
                su experiencia de usuario.
              </p>
              <p className="mb-4">
                Protección de la Información: Implementamos una variedad de
                medidas de seguridad para mantener la seguridad de su
                información personal cuando realiza un pedido o ingresa, envía o
                accede a su información personal. Utilizamos métodos de cifrado
                para proteger los datos sensibles transmitidos en línea.
              </p>
              <p className="mb-4">
                Divulgación de Información a Terceros: No vendemos,
                intercambiamos ni transferimos a terceros su información
                personal identificable. Esto no incluye a terceros de confianza
                que nos asisten en la operación de nuestro sitio web, la
                realización de nuestro negocio o el servicio a usted, siempre
                que esas partes acuerden mantener esta información confidencial.
              </p>
              <p className="mb-4">
                Cookies: Utilizamos cookies para mejorar su experiencia en
                nuestro sitio web. Las cookies son pequeños archivos que un
                sitio o su proveedor de servicios transfiere al disco duro de su
                computadora a través de su navegador web (si lo permite) y que
                permiten a los sitios o sistemas de proveedores de servicios
                reconocer su navegador y capturar y recordar cierta información.
              </p>
              <p className="mb-4">
                Sus Derechos: Tiene derecho a acceder, rectificar o eliminar su
                información personal que tenemos en nuestro poder. Puede ejercer
                estos derechos poniéndose en contacto con nosotros a través de
                la información de contacto proporcionada en este sitio web.
              </p>
              <p className="mb-4">
                Cambios en la Política de Privacidad: Nos reservamos el derecho
                de actualizar o cambiar nuestra Política de Privacidad en
                cualquier momento. Cualquier cambio será publicado en esta
                página.
              </p>
              <p className="mb-4">
                Contacto: Si tiene alguna pregunta sobre este Aviso Legal o la
                Política de Privacidad, puede contactarnos a través de:
              </p>
              <p className="mb-4">
                <p>• Teléfono: 314 588 8596</p>
                <p>• Dirección: Calle 123, Medellín, Colombia</p>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
